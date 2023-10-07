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
   *
   * */
  image: string;
  /**
   *
   * */
  name_en: string;
  /**
   *
   * */
  name_ru: string;
  /**
   *
   * */
  org_id: string;
}

/**
 * Сущность сервисов для покупки
 * */
declare interface SMSServices {
  longName: string;
  /**
   *
   * */
  cost: number;
  /**
   *
   * */
  count: number;
  /**
   *
   * */
  image: string;
  /**
   *
   * */
  name: string;
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

declare interface SMSFavorite {
  service: SMSServices;
  country: SMSCountry;
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

declare interface Stages {
  label: string;

  caption?: string;

  search: 'services' | 'countries' | 'multiServices' | 'multiCountry';

  condition: boolean;
  list: Array<any>;
  selected: any | null;
  itemComponent: any;
  price?: 'services' | 'multi';
  text?: string;
  selectedComponent?: any;
}
