export interface DataStore {
  userValue: SMSUser;
  systemUserValue: SystemUser;

  countriesValue: SMSCountry[];
  servicesValue: SMSServices[];
  operatorsValue: SMSOperator[];

  multiCountriesValue: SMSMultiCountry[];
  multiServicesValue: SMSMultiService[];

  multiSelectedValue: SMSMultiService[];

  ordersValue: SMSOrder[];

  selectedCountryValue: SMSCountry | null;
  selectedServiceValue: SMSServices | null;
  multiSelectedCountry: SMSMultiCountry | null;

  createdOrderValue: SMSOrder | null;

  search: {
    services: string;
    operators: string;
    countries: string;
    multiServices: string;
    multiCountry: string;
  };

  timeToEnd: {
    percent: number;
    full: string;
    isEnd: boolean;
  };

  price: boolean;
}

export type DataValues = 'services' | 'operators' | 'countries';
