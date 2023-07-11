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

        orders_view: false,
        replenish: false,
      },

      loadings: {
        getCountries: false,

        init: true,
        error: false,
      },

      tab: 'service',

      drawer: false,

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
      }

      this.tab = name;
    },
  },
});
