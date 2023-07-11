import { defineStore } from 'pinia';

import { useStatesStore } from 'stores/states/statesStore';

import { mapServiceTitle } from 'src/utils/names/products';

import {
  defaultOrder,
  defaultSystemUser,
  defaultUser,
} from 'stores/content/defaults';
import { useNotify } from 'src/utils/use/useNotify';
import { useLang } from 'src/utils/use/useLang';

import 'src/utils/helpers/polyfills';

import { DataStore, PriceNames, SearchNames } from 'stores/data/models';
import config from 'src/config';
import { fetchSMS } from 'boot/queries';

export const useDataStore = defineStore('data', {
  state: () =>
    ({
      userValue: defaultUser,
      systemUserValue: defaultSystemUser,

      services: {
        value: [],
        multi: [],

        selectedValue: null,
        selectedMulti: null,
      },

      countries: {
        value: [],
        multi: [],

        selectedValue: null,
        selectedMulti: null,
      },

      orders: {
        value: [],

        selectedOrder: defaultOrder,
        selectedMulti: defaultOrder,
      },

      search: {
        services: '',
        countries: '',
        multiServices: '',
        multiCountry: '',
      },

      price: {
        services: false,
        multi: false,
      },

      selectedMultiServices: [],
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
    /** */
    countriesValue: (state): SMSCountry[] =>
      state.countries.value.countryFilter(state.search.countries),
    multiCountries: (state): SMSMultiCountry[] =>
      state.countries.multi.countryFilter(state.search.multiCountry),
    /** */
    selectedCountry: (state): SMSCountry | null =>
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
    setMultiServices(value: SMSMultiService[]) {
      this.services.multi = mapServiceTitle(value);
    },

    setLastCountry(lastCounty: string, section: 'value' | 'multi') {
      const country = this.countries.value.find(
        (country) => country.org_id === lastCounty
      );

      const multiCountry = this.countries.multi.find(
        (country) => country.org_id === lastCounty
      );

      if (country && section === 'value') {
        this.countries.selectedValue = country;
      }

      if (multiCountry && section === 'multi') {
        this.countries.selectedMulti = multiCountry;

        fetchSMS('getServices', {
          country: multiCountry.org_id,
          public_key: config.public_key,
        }).then();
      }
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
