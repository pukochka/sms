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

const defaultSystemUser: SystemUser = {
  id: 0,
  bot_id: 0,
  user: {
    id: 0,
    telegram_id: 0,
    username: '',
    first_name: 'Artsemi',
    last_name: 'Puka',
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
  operator: '',
  country: '',
  cost: '',
  status: 8,
};

export {
  defaultServiceItem,
  defaultCountryItem,
  defaultSystemUser,
  defaultUser,
  defaultOrder,
};
