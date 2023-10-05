/**
 * Types for SMS-service bot-t.com
 * (c) 2023-present
 * */

/**
 * Сущность пользователя системы bott
 * */
declare interface SystemUser {
  id: number;
  bot_id: number;
  user: {
    id: number;
    telegram_id: number;
    username: string;
    first_name: string;
    last_name: string;
    link: string;
    type: string;
  };
  ref: null;
  money: number;
  status: number;
  create_at: number;
  update_at: number;
  secret_user_key: string;
}

/**
 * Сущность пользователя для приложения
 * */
declare interface SMSUser {
  /**
   * идентификатор пользователя ( tg_id )
   * */
  id: number;
  /**
   * выбранный сервис
   * */
  service: string;
  /**
   * (ru или eng)
   * */
  language: string;
}

/**
 * Сущность страны для выбора
 * */
declare interface SMSCountry {
  /**
   * Уникальный идентификатор */
  id: string;
  /**
   * Название страны в соответствии с выбранным языком
   * */
  title: string;
  /**
   * Название страны
   * */
  title_ru: string;
  /**
   * Название страны
   * */
  title_eng: string;
  /**
   * Флаг страны(Если нет, то null)
   * */
  image: string | null;
  /**
   * доступное количество к заказу
   * */
  count: number;
  /**
   * цена номера с учетом наценки от создателя бота
   * */
  cost: number;
}

/**
 * Сущность страны для выбора
 * */
declare interface SMSRentCountry {
  /**
   * Уникальный идентификатор */
  id: string;
  /**
   * Название страны
   * */
  title_ru: string;
  /**
   * Название страны
   * */
  title_eng: string;
  /**
   * Флаг страны(Если нет, то null)
   * */
  image: string | null;
}

/**
 * Сущность страны для выбора
 * */
declare interface SMSRentService {
  /**
   *
   * */
  name: string;
  /**
   *
   * */
  count: number;
  /**
   *
   * */
  cost: string;
  /**
   *
   * */
  image: string;
  /**
   *
   * */
  longName: string;
}

/**
 * Сущность оператора для выбора
 * */
declare interface SMSOperator {
  /**
   * Уникальный идентификатор */
  id: number;
  /**
   * Уникальный идентификатор
   * */
  title: string;
}

/**
 * Сущность сервисов для покупки
 * */
declare interface SMSServices {
  /**
   * название сервиса
   * */
  name: string;
  /**
   * название сервиса
   * */
  longName: string;
  /**
   * картинка сервиса (Или null)
   * */
  image: string | null;
}

/**
 * Сущность сервисов для покупки ( Multi )
 * */
declare interface SMSMultiService {
  /**
   * название сервиса
   * */
  name: string;
  /**
   * картинка сервиса
   * */
  image: string;
  /**
   * доступное количество к заказу
   * */
  count: number;
  /**
   * цена номера с учетом наценки от создателя бота
   * */
  cost: number;
  /**
   *
   * */
  longName: string;
}

/**
 * Сущность стран для покупки ( Multi )
 * */
declare interface SMSMultiCountry {
  /**
   * название сервиса
   * */
  org_id: string;
  /**
   * картинка сервиса
   * */
  image: string;
  /**
   *
   * */
  name_ru: string;
  /**
   *
   * */
  name_en: string;
}

/**
 * Сущность заказа
 * */
declare interface SMSOrder {
  /**
   * Уникальный идентификатор заказа
   * */
  id: number;
  /**
   * номер телефона
   * */
  phone: string;
  /**
   * Коды
   * */
  codes: string | null;
  /**
   * Время в unix формате
   * */
  time: number;
  /**
   *
   * */
  service: string;
  /**
   *
   * */
  country: string;
  /**
   *
   * */
  cost: number;
  /**
   * Статус
   */
  status: 0 | 1 | 3 | 4 | 5 | 6 | 8 | 9 | 10;
}

/**
 * Сущность заказа
 * */
declare interface SMSRentOrder {
  /**
   * Уникальный идентификатор заказа
   * */
  id: number;
  /**
   * номер телефона
   * */
  phone: string;
  /**
   * Коды
   * */
  codes: string | null;
  /**
   * Время в unix формате
   * */
  start_time: string;
  /**
   * Время в unix формате
   * */
  end_time: string;
  /**
   *
   * */
  service: string;
  /**
   *
   * */
  country: string;
  /**
   *
   * */
  cost: number;
  /**
   * Статус
   */
  status: 0 | 1 | 3 | 4 | 5 | 6 | 8 | 9 | 10;
}

declare interface SMSFavorite {
  service: SMSServices;
  country: SMSCountry;
}

declare interface Stages {
  label: string;

  caption?: string;

  search:
    | 'services'
    | 'operators'
    | 'countries'
    | 'multiServices'
    | 'multiCountry'
    | 'rentCountry'
    | 'rentService';
  condition: boolean;
  list: Array<any>;
  selected: any | null;
  itemComponent: any;
  price?: 'services' | 'multi' | 'rent';
  text?: string;
  selectedComponent?: any;
}
