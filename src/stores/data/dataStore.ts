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
import { LocalStorage } from 'quasar';

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

        selectedRepeat: defaultOrder,
      },

      favorites: LocalStorage.getItem('sms_favorites') ?? [],

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
      rentPrice: -1,
    } as DataStore),
  getters: {
    /** */
    user: (state): SMSUser => state.userValue,
    systemUser: (state): SystemUser => state.systemUserValue,
    /** */
    servicesValue: (state): SMSServices[] =>
      state.services.value.serviceFilter(state.search.services),
    multiServices: (state): SMSMultiService[] =>
      state.services.multi.serviceFilter(
        state.search.multiServices,
        state.price.multi
      ),
    rentServices: (state): SMSRentService[] =>
      state.services.rent.serviceFilter(
        state.search.rentService,
        state.price.rent
      ),
    /** */
    countriesValue: (state): SMSCountry[] =>
      state.countries.value.countryFilter(
        state.search.countries,
        false,
        state.price.services
      ),
    multiCountries: (state): SMSMultiCountry[] =>
      state.countries.multi.countryFilter(state.search.multiCountry, true),
    rentCountries: (state): SMSRentCountry[] =>
      state.countries.rent.countryFilter(state.search.rentCountry),
    /** */
    selectedCountry: (state): SMSCountry | null =>
      state.countries.selectedValue,
    selectedService: (state): SMSServices | null =>
      state.services.selectedValue,

    multiSelected: (state): boolean => {
      const states = useStatesStore();

      return (
        state.selectedMultiServices.length > 1 && states.tab === 'multi-service'
      );
    },

    createdOrder: (state): SMSOrder | null => state.orders.selectedOrder,
    createdRent: (state): SMSRentOrder | null => state.orders.selectedRent,

    ordersValue: (state): SMSOrder[] => state.orders.value.reverse(),
    rentsValue: (state): SMSRentOrder[] => state.orders.rent.reverse(),

    repeatOrder: (state): SMSOrder => state.orders.selectedRepeat,

    activeOrders: (state): SMSOrder[] =>
      state.orders.value.filter(
        (order) => ![0, 6, 8, 9, 10].includes(order.status)
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

      if (init) this.selectService();
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
    selectCountry(value: SMSCountry) {
      this.countries.selectedValue = value;
    },
    setLastCountry(section: 'multi' | 'rent') {
      const rentCountry = LocalStorage.getItem('last-rent-country');
      const multiCountry = LocalStorage.getItem('last-multi-country');

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const country = this.countries[section].find((item: any) =>
        section === 'multi'
          ? item.org_id === multiCountry
          : item.id === rentCountry
      );

      if (!country) return;

      if (section === 'rent') this.countries.selectedRent = country;
      else if (section === 'multi') this.countries.selectedMulti = country;
    },

    selectMultiService(value: SMSMultiService) {
      const names = this.selectedMultiServices.map((service) => service.name);

      if (names.includes(value.name)) {
        this.selectedMultiServices = this.selectedMultiServices.filter(
          (service) => service.name !== value.name
        );
        return;
      }

      if (this.selectedMultiServices.length >= 5) {
        const lang = useLang();
        useNotify(lang.max_selecting);

        return;
      }

      this.selectedMultiServices.push(value);
    },

    controlFavorite(service: SMSServices | null, country: SMSCountry) {
      if (service === null) return;

      const isFav = this.favorites.find(
        (fav) =>
          fav.country.id === country.id && fav.service.name === service.name
      );

      if (!isFav) {
        this.addFavorite(service, country);

        return;
      }

      this.deleteFavorite(country, service);
    },

    addFavorite(service: SMSServices, country: SMSCountry) {
      const favorite = Object.assign(
        { service: service },
        { country: country }
      );

      this.favorites.push(favorite);

      LocalStorage.set('sms_favorites', this.favorites);
    },

    deleteFavorite(country: SMSCountry, service: SMSServices) {
      this.favorites = this.favorites.filter(
        (fav) =>
          fav.country.id !== country.id || fav.service.name !== service.name
      );

      LocalStorage.set('sms_favorites', this.favorites);
    },
  },
});
