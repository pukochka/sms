import config from 'src/config';
import { products } from 'src/utils/names/products';

import { defineStore } from 'pinia';

import { toCurrentTime, toTimeEnd } from 'src/utils/time';

import 'src/utils/polyfills';

import { useMainStore } from 'stores/main/mainStore';
import { useStatesStore } from 'stores/states/statesStore';

import { fetchSMS } from 'boot/queries';

import { DataStore, DataValues } from 'stores/data/models';

import namesCountry from 'src/utils/names/contries';

import Timeout = NodeJS.Timeout;
import { defaultOrder, defaultSystemUser, defaultUser } from 'stores/defaults';

let time_interval: Timeout;
let request_getOrder_interval: Timeout;
let request_countries_interval: Timeout;

export const useDataStore = defineStore('data', {
  state: () =>
    ({
      userValue: defaultUser,
      systemUserValue: defaultSystemUser,

      countriesValue: [],
      servicesValue: [],
      operatorsValue: [],

      ordersValue: [],

      selectedCountryValue: null,
      selectedServiceValue: null,
      selectedOperatorValue: null,

      createdOrderValue: defaultOrder,

      search: {
        services: '',
        operators: '',
        countries: '',
      },

      timeToEnd: {
        percent: 0,
        full: '00:00',
        isEnd: false,
      },

      price: false,
    } as DataStore),
  getters: {
    isAuth: (state): boolean => state.userValue !== null,
    user: (state): SMSUser => state.userValue,
    systemUser: (state): SystemUser => state.systemUserValue,

    selectedCountry: (state): SMSCountry | null => state.selectedCountryValue,
    selectedService: (state): SMSServices | null => state.selectedServiceValue,
    selectedOperator: (state): SMSOperator | null =>
      state.selectedOperatorValue,

    createdOrder: (state): SMSOrder | null => state.createdOrderValue,

    canPay: (state) => state.selectedServiceValue !== null,

    services: (state): SMSServices[] =>
      state.servicesValue.filter((service) =>
        service.longName.toString()?.shortIncludes(state.search.services)
      ),

    operators: (state): SMSOperator[] =>
      state.operatorsValue.filter((operators) =>
        operators.title?.shortIncludes(state.search.operators)
      ),

    countries: (state): SMSCountry[] =>
      state.countriesValue
        .map((country) => {
          country.title =
            state.userValue?.language === 'eng'
              ? country.title_eng
              : namesCountry[country.id];

          return country;
        })

        .filter((country) =>
          (state.userValue?.language === 'eng'
            ? country.title
            : namesCountry[country.id]
          )?.shortIncludes(state.search.countries)
        )

        .sort(function (a, b) {
          return state.price ? a.cost - b.cost : a.cost + b.cost;
        }),

    orders: (state): SMSOrder[] => state.ordersValue.reverse(),

    active_order: (state): SMSOrder[] =>
      state.ordersValue.filter(
        (order) =>
          order.status !== 8 &&
          order.status !== 9 &&
          order.status !== 6 &&
          order.status !== 0 &&
          order.status !== 10
      ),
  },
  actions: {
    setUser(value: SMSUser) {
      this.userValue = value;
    },
    setSystemUser(value: SystemUser) {
      this.systemUserValue = value;
    },
    setServices(value: SMSServices[], init?: boolean) {
      this.servicesValue = value
        .map((service) => {
          service.longName = products[service.name] ?? service.name;
          return service;
        })
        .filter((service) => service?.name?.length <= 2);

      if (init) this.selectService();
    },
    setCountries(value: SMSCountry[]) {
      this.countriesValue = value.map((country) => {
        country.title =
          this.userValue?.language === 'eng'
            ? country.title_eng
            : country.title_ru;

        return country;
      });
    },

    setOrders(value: SMSOrder[]) {
      this.ordersValue = value;
    },

    setOrder(value: SMSOrder) {
      const states = useStatesStore();

      this.createdOrderValue = value;

      this.startGetOrder();
      this.startCounter();

      states.openDialog('order');
    },
    updateOrder(value: SMSOrder) {
      this.createdOrderValue = value;
    },

    selectService(value?: SMSUser) {
      const main = useMainStore();

      this.userValue = value ?? this.userValue;

      this.selectedServiceValue =
        this.servicesValue.find(
          (service) => service.name === this.user?.service
        ) ?? null;

      if (this.selectedServiceValue !== null) main.useScroll(1);

      this.checkCanPay();
    },
    selectCountry(value: SMSCountry) {
      this.selectedCountryValue = value;
    },
    selectOperator(value?: SMSUser) {
      this.userValue = value ?? this.userValue;
    },

    nullify() {
      this.selectedServiceValue = null;
      this.selectedCountryValue = null;
      this.selectedOperatorValue = null;
    },

    checkCanPay() {
      if (this.canPay) {
        fetchSMS('countries', {
          user_id: this.userValue?.id ?? 0,
          public_key: config.public_key,
          interval: true,
        });
        this.startCountries();
      }
    },

    startCounter() {
      this.useCounter();
      time_interval = setInterval(() => this.useCounter(), 1000);
    },
    endCounter() {
      clearInterval(time_interval);
    },
    startGetOrder() {
      request_getOrder_interval = setInterval(
        () =>
          fetchSMS('getOrder', {
            order_id: this.createdOrder?.id ?? 0,
            user_id: this.user?.id ?? 0,
            public_key: config.public_key,
            user_secret_key: this.systemUserValue?.secret_user_key ?? '',
          }),
        config.request_interval
      );
    },
    endGetOrder() {
      clearInterval(request_getOrder_interval);
    },
    startCountries() {
      request_countries_interval = setInterval(
        () =>
          fetchSMS('countries', {
            user_id: this.userValue?.id ?? 0,
            public_key: config.public_key,
          }),
        config.request_countries_interval
      );
    },
    endCountries() {
      clearInterval(request_countries_interval);
    },

    modelValue(section: DataValues, text: string) {
      this.search[section] = text;
    },

    usePrice() {
      this.price = !this.price;
    },

    useCounter() {
      const time = toTimeEnd(this.createdOrder?.time);

      this.timeToEnd.percent = time;

      this.timeToEnd.isEnd = time >= 1;

      this.timeToEnd.full = toCurrentTime(time);

      if (time >= 1) this.endCounter();
    },
  },
});
