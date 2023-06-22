import { defineStore } from 'pinia';

import { useStatesStore } from 'stores/states/statesStore';

import { mapServiceTitle } from 'src/utils/names/products';

import {
  defaultOrder,
  defaultRentOrder,
  defaultSystemUser,
  defaultUser,
} from 'stores/content/defaults';
import { useNotify } from 'src/utils/use/useNotify';
import { useLang } from 'src/utils/use/useLang';

import 'src/utils/helpers/polyfills';

import { DataStore, PriceNames, SearchNames } from 'stores/data/models';

export const useDataStore = defineStore('data', {
  state: () =>
    ({
      userValue: defaultUser,
      systemUserValue: defaultSystemUser,

      services: {
        value: [],
        multi: [],
        rent: [],

        selectedValue: null,
        selectedMulti: null,
        selectedRent: null,
      },

      countries: {
        value: [],
        multi: [],
        rent: [],

        selectedValue: null,
        selectedMulti: null,
        selectedRent: null,
      },

      orders: {
        value: [],
        rent: [],

        selectedOrder: defaultOrder,
        selectedMulti: defaultOrder,
        selectedRent: defaultRentOrder,
      },

      search: {
        services: '',
        operators: '',
        countries: '',
        multiServices: '',
        multiCountry: '',
        rentCountry: '',
        rentService: '',
      },

      price: {
        services: false,
        multi: false,
        rent: false,
      },

      selectedMultiServices: [],

      prolongPrice: 0,
    } as DataStore),
  getters: {
    /** */
    user: (state): SMSUser => state.userValue,
    systemUser: (state): SystemUser => state.systemUserValue,
    /** */
    servicesValue: (state): SMSServices[] =>
      state.services.value.serviceFilter(
        state.search.services,
        state.price.services
      ),
    multiServices: (state): SMSMultiService[] =>
      state.services.multi.serviceFilter(
        state.search.multiServices,
        state.price.multi
      ),
    rentServices: (state): SMSRentService[] =>
      state.services.rent /**.serviceFilter(
        state.search.rentService,
        state.price.rent
      )*/,
    /** */
    countriesValue: (state): SMSCountry[] =>
      state.countries.value.countryFilter(state.search.countries),
    multiCountries: (state): SMSMultiCountry[] =>
      state.countries.multi.countryFilter(state.search.multiCountry),
    rentCountries: (state): SMSRentCountry[] =>
      state.countries.rent.countryFilter(state.search.rentCountry),
    /** */
    selectedCountry: (state): SMSMultiCountry | null =>
      state.countries.selectedValue,
    selectedService: (state): SMSServices | null =>
      state.services.selectedValue,

    multiSelected: (state): boolean => {
      const states = useStatesStore();

      return (
        state.selectedMultiServices.length > 1 &&
        state.selectedMultiServices.length < 3 &&
        states.tab === 'multi-service'
      );
    },

    createdOrder: (state): SMSOrder | null => state.orders.selectedOrder,
    createdRent: (state): SMSRentOrder | null => state.orders.selectedRent,

    ordersValue: (state): SMSOrder[] => state.orders.value.reverse(),
    rentsValue: (state): SMSRentOrder[] => state.orders.rent.reverse(),

    activeOrders: (state): SMSOrder[] =>
      state.orders.value.filter(
        (order) => ![0, 6, 8, 9, 10, 'cancel', 'finish'].includes(order.status)
      ),
    activeRents: (state): SMSRentOrder[] =>
      state.orders.rent.filter((order) => ![9, 10].includes(order.status)),
  },
  actions: {
    modelValue(name: SearchNames, value: string) {
      this.search[name] = value;
    },
    usePrice(name: PriceNames) {
      this.price[name] = !this.price[name];
    },

    setServices(value: SMSServices[], init?: boolean) {
      this.services.value = mapServiceTitle(value);
    },
    setMultiServices(value: SMSMultiService[]) {
      this.services.multi = mapServiceTitle(value);
    },
    setRentServices(value: SMSRentService[]) {
      this.services.rent = mapServiceTitle(value);
    },

    setOrder(value: SMSOrder) {
      const states = useStatesStore();

      this.orders.selectedOrder = value;

      states.openDialog('order');
    },
    setRent(value: SMSRentOrder) {
      const states = useStatesStore();

      this.orders.selectedRent = value;

      states.openDialog('rent');
    },
    updateOrder(value: SMSOrder) {
      this.orders.selectedOrder = value;
    },

    selectService(value?: SMSUser) {
      this.userValue = value ?? this.userValue;

      this.services.selectedValue =
        this.services.value.find(
          (service) => service.name === this.user?.service
        ) ?? null;
    },
    selectCountry(value: SMSMultiCountry) {
      this.countries.selectedValue = value;
    },

    selectMultiService(value: SMSMultiService) {
      const names = this.selectedMultiServices.map((service) => service.name);

      if (names.includes(value.name)) {
        this.selectedMultiServices = this.selectedMultiServices.filter(
          (service) => service.name !== value.name
        );
        return;
      }

      if (this.selectedMultiServices.length >= 2) {
        const lang = useLang();
        useNotify(lang.max_selecting);

        return;
      }

      this.selectedMultiServices.push(value);
    },
  },
});
