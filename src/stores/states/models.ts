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

export type DialogNames =
  | 'order'
  | 'repeat_order'
  | 'orders_view'
  | 'rent'
  | 'replenish'
  | 'rent_view'
  | 'rent_continue'
  | 'rent_build';

export type LoadingNames =
  | 'init'
  | 'error'
  | 'getCountries'
  | 'getRentCountries';

export type TabNames = 'service' | 'multi-service' | 'rent';
