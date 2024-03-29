import config from 'src/config';
import { defineStore } from 'pinia';

import {
  DialogNames,
  LoadingNames,
  StatesStore,
  TabNames,
} from 'stores/states/models';

import { fetchSMS } from 'boot/queries';
import { useDataStore } from 'stores/data/dataStore';

export const useStatesStore = defineStore('states', {
  state: () =>
    ({
      dialogs: {
        order: false,
        repeat_order: false,
        rent: false,
        rent_view: false,
        rent_build: false,
        rent_continue: false,
        orders_view: false,
        replenish: false,
      },

      loadings: {
        getCountries: false,
        getRentCountries: false,

        init: true,
        error: false,
      },

      tab: 'service',

      drawer: false,
      favorites: false,

      notifyValue: {
        state: false,
        message: '',
      },
    } as StatesStore),
  getters: {},
  actions: {
    openDialog(name: DialogNames) {
      this.dialogs[name] = true;
    },
    closeDialog(name: DialogNames) {
      this.dialogs[name] = false;
    },

    toggleDrawer() {
      this.drawer = !this.drawer;
    },

    toggleFavorites() {
      this.favorites = !this.favorites;
    },

    load(section: LoadingNames, value?: boolean) {
      this.loadings[section] = value ?? false;
    },

    toggleTab(name: TabNames) {
      const data = useDataStore();
      if (
        this.tab !== 'multi-service' &&
        name === 'multi-service' &&
        data.countries.multi.length === 0
      ) {
        fetchSMS('getCountries', { public_key: config.public_key }).then();
      } else if (
        this.tab !== 'rent' &&
        name === 'rent' &&
        data.countries.rent.length === 0
      ) {
        fetchSMS('getRentCountries', { public_key: config.public_key }).then();
      }

      this.tab = name;
    },
  },
});
