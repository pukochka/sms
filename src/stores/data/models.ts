export interface DataStore {
  userValue: SMSUser;
  systemUserValue: SystemUser;

  services: {
    value: SMSServices[];
    multi: SMSMultiService[];
    rent: SMSRentService[];

    selectedValue: SMSServices | null;
    selectedMulti: SMSMultiService | null;
    selectedRent: SMSRentService | null;
  };

  countries: {
    value: SMSCountry[];
    multi: SMSMultiCountry[];
    rent: SMSRentCountry[];

    selectedValue: SMSCountry | null;
    selectedMulti: SMSMultiCountry | null;
    selectedRent: SMSRentCountry | null;
  };

  selectedMultiServices: SMSMultiService[];

  orders: {
    value: SMSOrder[];
    rent: SMSRentOrder[];

    selectedOrder: SMSOrder;
    selectedMulti: SMSOrder;
    selectedRent: SMSRentOrder;
  };

  search: Record<SearchNames, string>;
  price: Record<PriceNames, boolean>;

  prolongPrice: number;
}

export type PriceNames = 'services' | 'multi' | 'rent';

export type SearchNames =
  | 'services'
  | 'operators'
  | 'countries'
  | 'multiServices'
  | 'multiCountry'
  | 'rentCountry'
  | 'rentService';
