const defaultServiceItem: SMSServices = {
  image: null,
  name: '',
  longName: '',
};

const defaultCountryItem: SMSCountry = {
  id: '-1',
  image: null,
  title_eng: '',
  title_ru: '',
  title: '',
  cost: 1,
  count: 1,
};

const defaultMultiCountry: SMSMultiCountry = {
  org_id: '0',
  image: '',
  name_ru: '',
  name_en: '',
};

const defaultRentCountry: SMSRentCountry = {
  id: '0',
  image: '',
  title_ru: '',
  title_eng: '',
};

const defaultRentService: SMSRentService = {
  name: '',
  count: 0,
  cost: '',
  image: '',
  longName: '',
};

const defaultMultiService: SMSMultiService = {
  cost: 0,
  count: 0,
  name: '',
  longName: '',
  image: '',
};

const defaultSystemUser: SystemUser = {
  id: 0,
  bot_id: 0,
  user: {
    id: 0,
    telegram_id: 0,
    username: '',
    first_name: '',
    last_name: '',
    link: '',
    type: '',
  },
  ref: null,
  money: 0,
  status: 0,
  create_at: 0,
  update_at: 0,
  secret_user_key: '',
};

const defaultUser: SMSUser = {
  id: 0,
  language: '',
  service: '',
};

const defaultOrder: SMSOrder = {
  id: 0,
  phone: '79963811573',
  time: 0,
  codes: '',
  service: '',
  country: '',
  cost: 0,
  status: 8,
};

const defaultRentOrder: SMSRentOrder = {
  id: 0,
  phone: '79963811573',
  start_time: '0',
  end_time: '0',
  codes: '',
  service: '',
  country: '',
  cost: 0,
  status: 8,
};

export {
  defaultServiceItem,
  defaultCountryItem,
  defaultSystemUser,
  defaultMultiCountry,
  defaultMultiService,
  defaultRentCountry,
  defaultRentService,
  defaultRentOrder,
  defaultUser,
  defaultOrder,
};
