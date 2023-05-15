export interface StatesStore {
  dialogs: Dialogs;

  loadings: Record<LoadingNames, boolean>;

  tab: TabNames;

  drawer: boolean;

  notifyValue: {
    state: boolean;
    message: string;
  };
}

export interface Dialogs {
  order: boolean;
  orders_view: boolean;
}

export type DialogNames = 'order' | 'orders_view';

export type LoadingNames = 'init' | 'error' | 'getCountries';

export type TabNames = 'service' | 'multi-service' | 'rent';
