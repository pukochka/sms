/**
 * Types for SMS-service bot-t.com
 * (c) 2023-present
 * */

/**
 * Запросы для получения данных
 * */
declare enum SMSQueriesEnum {
  /**
   * Возвращает страны
   * */
  countries = 'countries',

  /**
   * Возвращает сервисы, которые можно выбрать для заказа
   * */
  services = 'services',

  /**
   * *********************
   *
   * */
  orders = 'orders',

  /**
   * Создаем заказ
   * */
  createOrder = 'createOrder',

  /**
   * Получение пользователя
   * */
  getUser = 'getUser',

  /**
   * Задать страну ( для заказа )
   * */
  setCountry = 'setCountry',

  /**
   * Задать сервис ( для заказа )

   * */
  setService = 'setService',

  /**
   * Задать язык
   * */
  setLanguage = 'setLanguage',

  /**
   * *********************
   *
   * */
  getCountries = 'getCountries',

  /**
   * *********************
   *
   * */
  getServices = 'getServices',

  /**
   * *********************
   *
   * */
  createMulti = 'createMulti',

  /**
   * *********************
   *
   * */
  getOrder = 'getOrder',

  /**
   * *********************
   *
   * */
  closeOrder = 'closeOrder',

  /**
   * *********************
   *
   * */
  reportOrderSms = 'reportOrderSms',

  /**
   * *********************
   *
   * */
  secondSms = 'secondSms',

  /**
   * *********************
   *
   * */
  confirmOrder = 'confirmOrder',
}

/**
 *
 * */
declare interface PublicKey {
  /**
   * Публичный ключ модуля
   * */
  public_key: string;
}

/**
 *
 * */
declare interface PublicKey {
  /**
   * Публичный ключ модуля (GET string)
   * */
  public_key: string;
}

/**
 *
 * */
declare interface SecretKey {
  /**
   * Приватный ключ пользователя(GET string)
   * */
  user_secret_key: string;
}

/**
 *
 * */
declare type BottParams = SecretKey & PublicKey;

/**
 * Запрос /services
 *
 * Обязательный параметры:
 *  - user_id - Идентификатор пользователя телеграм.
 *              (У пользователя установлена выбранная страна/оператор)
 *              И поэтому сервисы вернутся только те, что выбраны у него и доступны (GET number)
 *
 * */
declare interface SMSServicesParams {
  /**
   * Идентификатор пользователя телеграм. (У пользователя установлена выбранная страна/оператор)
   * И поэтому сервисы вернутся только те, что выбраны у него и доступны (GET number)
   * */
  public_key: string;
}

/**
 * Запрос /countries
 *
 * Обязательный параметры:
 *  - user_id - Идентификатор пользователя телеграм.
 *              (У пользователя установлена выбранная страна/оператор)
 *              И поэтому сервисы вернутся только те, что выбраны у него и доступны (GET number)
 *
 * */
declare interface SMSCountriesParams extends PublicKey {
  /**
   * Идентификатор пользователя телеграм. (У пользователя установлена выбранная страна/оператор) И поэтому сервисы вернутся только те, что выбраны у него и доступны (GET number)
   * */
  user_id: number;
  /**
   *
   **/
  interval?: boolean;
}

/**
 * Запрос /createOrder
 *
 * Обязательный параметры:
 *  - user_id - Идентификатор пользователя телеграм. (У пользователя установлена выбранная страна/оператор) И поэтому сервисы вернутся только те, что выбраны у него и доступны (GET number)
 *  - service - Код сервиса (GET string)
 *  - user_secret_key - Приватный ключ пользователя(GET string)
 *  - public_key - Публичный ключ модуля (GET string)
 *
 * */
declare interface SMSCreateOrderParams extends BottParams {
  /**
   * Идентификатор пользователя телеграм. (У пользователя установлена выбранная страна/оператор) И поэтому сервисы вернутся только те, что выбраны у него и доступны (GET number)
   * */
  user_id: number;
  /**
   *
   * */
  country: string;
}

/**
 * Запрос /getUser
 *
 * Обязательный параметры:
 *  - user_id - Уникальный идентификатор пользователя (GET number)
 *
 * */
declare interface SMSGetUserParams {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
}

/**
 * Запрос /getCountries
 *
 * Для мультисервисов
 * */
declare type SMSGetCountriesParams = PublicKey;

/**
 * Запрос /getServices
 *
 * Для мультисервисов
 * */
declare interface SMSGetServicesParams extends PublicKey {
  /**
   * org_id страны
   * */
  country: string;
}

/**
 * Запрос /createMulti
 *
 * Для мультисервисов
 * */
declare interface SMSCreateMultiParams extends BottParams {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
  /**
   * org_id страны
   * */
  country: string;
  /**
   * "ig, tg, ...  vk"
   * */
  services: string;
}

/**
 * Запрос /setCountry
 *
 * Обязательный параметры:
 *  - user_id - Уникальный идентификатор пользователя (GET number)
 *  - country - Код страны (GET string)
 *
 * */
declare interface SMSSetCountryParams extends SecretKey {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
  /**
   * Код страны (GET string)
   * */
  country: string;
  /**
   * Код оператора (GET string)
   * */
  operator: string;
}

/**
 * Запрос /setService
 *
 * Обязательный параметры:
 *  - user_id - Уникальный идентификатор пользователя (GET number)
 *
 * */
declare interface SMSSetServiceParams extends SecretKey {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
  /**
   * Уникальный идентификатор заказа0
   * */
  service: string;
}

/**
 * Запрос /setLanguage
 *
 * Обязательный параметры:
 *  - user_id - Уникальный идентификатор пользователя (GET number)
 *  - language -  (GET string)
 *
 * */
declare interface SMSSetLanguageParams extends SecretKey {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
  /**
   * Язык ( eng или ru )
   * */
  language: string;
}

/**
 * Запрос /orders
 *
 * Обязательный параметры:
 *  - user_id - Уникальный идентификатор пользователя (GET number)
 *
 * */
declare interface SMSOrdersParams extends BottParams {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
}

/**
 * Запрос /getOrder
 *
 * Обязательный параметры:
 *  - user_id - Уникальный идентификатор пользователя (GET number)
 * */
declare interface SMSGetOrderParams extends BottParams {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
  /**
   * Уникальный идентификатор заказа0
   * */
  order_id: number;
  /**
   *
   * */
  view?: boolean;
}

/**
 * Запрос /closeOrder
 *
 * Обязательный параметры:
 *  - user_id - Уникальный идентификатор пользователя (GET number)
 *
 * */
declare interface SMSCloseOrderParams extends BottParams {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
  /**
   * Уникальный идентификатор заказа0
   * */
  order_id: number;
}

/**
 * Запрос /secondSms
 *
 * Обязательный параметры:
 *  - user_id - Уникальный идентификатор пользователя (GET number)
 *
 * */
declare interface SMSSecondSmsParams extends BottParams {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
  /**
   * Уникальный идентификатор заказа0
   * */
  order_id: number;
}

/**
 * Запрос /confirmOrder
 *
 * Обязательный параметры:
 *  - user_id - Уникальный идентификатор пользователя (GET number)
 *
 * */
declare interface SMSConfirmOrderParams extends BottParams {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
  /**
   * Уникальный идентификатор заказа0
   * */
  order_id: number;
}

/**
 * Для того чтобы можно было ипользовать строки
 * Это эквивалентно:
 * declare type SMSQueries = 'countries' | 'operators' | ...;
 */
declare type SMSQueries = keyof typeof SMSQueriesEnum;

/**
 * GET параметры для запросов
 * */
declare type SMSParams<Q = SMSQueries> = Q extends 'countries'
  ? SMSCountriesParams
  : Q extends 'services'
  ? SMSServicesParams
  : Q extends 'createOrder'
  ? SMSCreateOrderParams
  : Q extends 'getUser'
  ? SMSGetUserParams
  : Q extends 'setCountry'
  ? SMSSetCountryParams
  : Q extends 'setService'
  ? SMSSetServiceParams
  : Q extends 'setLanguage'
  ? SMSSetLanguageParams
  : Q extends 'orders'
  ? SMSOrdersParams
  : Q extends 'getOrder'
  ? SMSGetOrderParams
  : Q extends 'closeOrder'
  ? SMSCloseOrderParams
  : Q extends 'secondSms'
  ? SMSSecondSmsParams
  : Q extends 'confirmOrder'
  ? SMSConfirmOrderParams
  : Q extends 'getServices'
  ? SMSGetServicesParams
  : Q extends 'getCountries'
  ? SMSGetCountriesParams
  : Q extends 'createMulti'
  ? SMSCreateMultiParams
  : null;
