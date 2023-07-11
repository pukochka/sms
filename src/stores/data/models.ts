export interface DataStore {
  userValue: SMSUser;
  systemUserValue: SystemUser;

  services: {
    value: SMSServices[];
    multi: SMSMultiService[];

    selectedValue: SMSServices | null;
    selectedMulti: SMSMultiService | null;
  };

  countries: {
    value: SMSCountry[];
    multi: SMSMultiCountry[];

    selectedValue: SMSCountry | null;
    selectedMulti: SMSMultiCountry | null;
  };

  selectedMultiServices: SMSMultiService[];

  orders: {
    value: SMSOrder[];

    selectedOrder: SMSOrder;
    selectedMulti: SMSOrder;
  };

  search: Record<SearchNames, string>;
  price: Record<PriceNames, boolean>;
}

export type PriceNames = 'services' | 'multi';

export type SearchNames =
  | 'services'
  | 'countries'
  | 'multiServices'
  | 'multiCountry';
