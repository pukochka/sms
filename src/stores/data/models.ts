export interface DataStore {
  userValue: SMSUser;
  systemUserValue: SystemUser;

  countriesValue: SMSCountry[];
  servicesValue: SMSServices[];
  operatorsValue: SMSOperator[];

  multiCountries: SMSMultiCountry[];
  multiServices: SMSMultiService[];

  ordersValue: SMSOrder[];

  selectedCountryValue: SMSCountry | null;
  selectedServiceValue: SMSServices | null;
  selectedOperatorValue: SMSOperator | null;

  createdOrderValue: SMSOrder | null;

  search: {
    services: string;
    operators: string;
    countries: string;
  };

  timeToEnd: {
    percent: number;
    full: string;
    isEnd: boolean;
  };

  price: boolean;
}

export type DataValues = 'services' | 'operators' | 'countries';
