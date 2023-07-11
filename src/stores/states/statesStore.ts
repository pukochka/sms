import { defineStore } from 'pinia';

import { DialogNames, LoadingNames, StatesStore } from 'stores/states/models';

export const useStatesStore = defineStore('states', {
  state: () =>
    ({
      dialogs: {
        order: false,

        orders_view: false,
        replenish: false,
      },

      loadings: {
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
  },
});
