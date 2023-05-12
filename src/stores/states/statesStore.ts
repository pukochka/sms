import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';
import { DialogNames, StatesStore, TabNames } from 'stores/states/models';

export const useStatesStore = defineStore('states', {
  state: () =>
    ({
      dialogs: {
        order: false,
        orders_view: false,
      },

      loadings: {
        init: true,
        services: false,
        countries: false,
        operators: false,
      },

      tab: 'catalog',

      drawer: false,

      notifyValue: {
        state: false,
        message: '',
      },

      anyCountriesButtons: [],
      reportedOrdersValue: LocalStorage.getItem('anyCountries') ?? [],
    } as StatesStore),
  getters: {},
  actions: {
    openDialog(name: DialogNames) {
      this.dialogs[name] = true;
    },
    closeDialog(name: DialogNames) {
      this.dialogs[name] = false;
    },

    startLoad(url: string, params: any) {
      if (url === 'setService' || url === 'services')
        this.loadings.services = true;

      if (url === 'setCountry' || params.hasOwnProperty('interval')) {
        this.loadings.countries = true;
      }
    },
    endLoad(url: string) {
      if (url === 'services' || url === 'setCountry' || url === 'setService')
        this.loadings.services = false;
      if (url === 'countries' || url === 'setCountry')
        this.loadings.countries = false;
    },

    stop() {
      this.loadings.init = false;
    },

    toggleDrawer() {
      this.drawer = !this.drawer;
    },

    toggleTab(name: TabNames) {
      this.tab = name;
    },

    notify(message: string) {
      this.notifyValue.state = true;
      this.notifyValue.message = message;
    },
    removeAny(order: SMSOrder) {
      this.reportedOrdersValue.push(order.id);

      LocalStorage.set('anyCountries', this.reportedOrdersValue);
    },
  },
});
