export interface StatesStore {
  dialogs: Record<DialogNames, boolean>;

  loadings: Record<LoadingNames, boolean>;

  tab: TabNames;

  drawer: boolean;

  notifyValue: {
    state: boolean;
    message: string;
  };
}

export type DialogNames = 'order' | 'orders_view' | 'replenish';

export type LoadingNames = 'init' | 'error' | 'getCountries' | 'getServices';

export type TabNames = 'service' | 'multi-service';
