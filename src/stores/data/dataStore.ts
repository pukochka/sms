import { defineStore } from 'pinia';

import config from 'src/config';
import { toCurrentTime, toTimeEnd } from 'src/utils/helpers/time';

import { useStatesStore } from 'stores/states/statesStore';

import { fetchSMS } from 'boot/queries';

import namesCountry from 'src/utils/names/contries';
import { products } from 'src/utils/names/products';

import 'src/utils/helpers/polyfills';

import { DataStore, DataValues } from 'stores/data/models';

import Timeout = NodeJS.Timeout;
import {
  defaultOrder,
  defaultSystemUser,
  defaultUser,
} from 'stores/content/defaults';
import { useNotify } from 'src/utils/use/useNotify';
import { useLang } from 'src/utils/use/useLang';

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

      multiCountriesValue: [],
      multiServicesValue: [],

      multiSelectedValue: [],

      ordersValue: [],

      selectedCountryValue: null,
      selectedServiceValue: null,
      multiSelectedCountry: null,

      createdOrderValue: defaultOrder,

      search: {
        services: '',
        operators: '',
        countries: '',
        multiServices: '',
        multiCountry: '',
      },

      timeToEnd: {
        percent: 0,
        full: '00:00',
        isEnd: false,
      },

      price: false,
    } as DataStore),
  getters: {
    user: (state): SMSUser => state.userValue,
    systemUser: (state): SystemUser => state.systemUserValue,

    services: (state): SMSServices[] =>
      state.servicesValue.filter((service) =>
        service.longName.toString()?.shortIncludes(state.search.services)
      ),
    multiServices: (state): SMSMultiService[] =>
      state.multiServicesValue.filter((service) =>
        service.longName?.toString()?.shortIncludes(state.search.multiServices)
      ),

    countries: (state): SMSCountry[] =>
      state.countriesValue
        .filter((country) =>
          (state.userValue?.language === 'eng'
            ? country.title_eng
            : namesCountry[country.id]
          )?.shortIncludes(state.search.countries)
        )
        .sort(function (a, b) {
          return state.price ? a.cost - b.cost : a.cost + b.cost;
        }),
    multiCountries: (state): SMSMultiCountry[] =>
      state.multiCountriesValue.filter((service) =>
        (state.userValue?.language === 'eng'
          ? service.name_en
          : namesCountry[service.org_id]
        )?.shortIncludes(state.search.multiCountry)
      ),

    selectedCountry: (state): SMSCountry | null => state.selectedCountryValue,
    selectedService: (state): SMSServices | null => state.selectedServiceValue,

    multiSelected: (state): boolean => {
      const states = useStatesStore();

      return (
        state.multiSelectedValue.length > 1 && states.tab === 'multi-service'
      );
    },

    createdOrder: (state): SMSOrder | null => state.createdOrderValue,

    canPay: (state) => state.selectedServiceValue !== null,

    orders: (state): SMSOrder[] => state.ordersValue.reverse(),

    activeOrders: (state): SMSOrder[] =>
      state.ordersValue.filter(
        (order) => ![0, 6, 8, 9, 10].includes(order.status)
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
    setMultiServices(value: SMSMultiService[]) {
      this.multiServicesValue = value
        .map((item) => {
          item.longName = products[item.name]?.toString() ?? item.name;
          return item;
        })
        .filter((item) => !(item.name.length > 2));
    },

    setOrders(value: SMSOrder[]) {
      this.ordersValue = value;
    },

    setOrder(value: SMSOrder) {
      const states = useStatesStore();

      this.createdOrderValue = value;

      states.openDialog('order');
    },
    updateOrder(value: SMSOrder) {
      this.createdOrderValue = value;
    },

    selectService(value?: SMSUser) {
      this.userValue = value ?? this.userValue;

      this.selectedServiceValue =
        this.servicesValue.find(
          (service) => service.name === this.user?.service
        ) ?? null;
    },
    selectCountry(value: SMSCountry) {
      this.selectedCountryValue = value;
    },
    selectOperator(value?: SMSUser) {
      this.userValue = value ?? this.userValue;
    },

    selectMultiService(value: SMSMultiService) {
      const names = this.multiSelectedValue.map((service) => service.name);

      if (names.includes(value.name)) {
        this.multiSelectedValue = this.multiSelectedValue.filter(
          (service) => service.name !== value.name
        );
        return;
      }

      if (this.multiSelectedValue.length >= 5) {
        const lang = useLang();
        useNotify(lang.max_selecting);
        return;
      }

      this.multiSelectedValue.push(value);
    },

    nullify() {
      this.selectedServiceValue = null;
      this.selectedCountryValue = null;
    },

    startCounter() {
      this.useCounter();
      time_interval = setInterval(this.useCounter, 1000);
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
