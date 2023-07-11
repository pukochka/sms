import { defineStore } from 'pinia';

import { useStatesStore } from 'stores/states/statesStore';

import { mapServiceTitle } from 'src/utils/names/products';

import {
  defaultOrder,
  defaultSystemUser,
  defaultUser,
} from 'stores/content/defaults';

import 'src/utils/helpers/polyfills';

import { DataStore, PriceNames, SearchNames } from 'stores/data/models';
import { LocalStorage } from 'quasar';

export const useDataStore = defineStore('data', {
  state: () =>
    ({
      userValue: defaultUser,
      systemUserValue: defaultSystemUser,

      services: {
        value: [],

        selectedValue: null,
      },

      countries: {
        value: [],

        selectedValue: null,
      },

      orders: {
        value: [],

        selectedOrder: defaultOrder,
      },

      search: {
        services: '',
        countries: '',
      },

      price: {
        services: false,
      },
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

    /** */
    countriesValue: (state): SMSCountry[] =>
      state.countries.value.countryFilter(state.search.countries),

    /** */
    selectedCountry: (state): SMSCountry | null =>
      state.countries.selectedValue,
    selectedService: (state): SMSServices | null =>
      state.services.selectedValue,

    createdOrder: (state): SMSOrder | null => state.orders.selectedOrder,

    ordersValue: (state): SMSOrder[] => state.orders.value.reverse(),

    activeOrders: (state): SMSOrder[] =>
      state.orders.value.filter(
        (order) => ![0, 6, 8, 9, 10, 'cancel', 'finish'].includes(order.status)
      ),
  },
  actions: {
    modelValue(name: SearchNames, value: string) {
      this.search[name] = value;
    },
    usePrice(name: PriceNames) {
      this.price[name] = !this.price[name];
    },

    setServices(value: SMSServices[]) {
      this.services.value = mapServiceTitle(value);
    },

    setOrder(value: SMSOrder) {
      const states = useStatesStore();

      this.orders.selectedOrder = value;

      states.openDialog('order');
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
    selectCountry(value: SMSCountry) {
      this.countries.selectedValue = value;
    },
    setLastCountry() {
      const last = LocalStorage.getItem('last-country') ?? '';

      const country = this.countries.value.find(
        (country) => country.org_id.toString() === last.toString()
      );

      if (country) this.countries.selectedValue = country;
    },
  },
});
