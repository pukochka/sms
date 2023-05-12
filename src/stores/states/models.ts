export interface StatesStore {
  dialogs: Dialogs;

  loadings: Record<LoadingNames, boolean>;

  tab: TabNames;

  drawer: boolean;

  notifyValue: {
    state: boolean;
    message: string;
  };

  anyCountriesButtons: (SMSOrder | null)[];
  reportedOrdersValue: number[];
}

export interface Dialogs {
  order: boolean;
  orders_view: boolean;
}

export type DialogNames = 'order' | 'orders_view';
export type LoadingNames = 'init' | 'services' | 'countries' | 'operators';

export type TabNames = 'catalog' | 'countries' | 'operators' | 'profile';
