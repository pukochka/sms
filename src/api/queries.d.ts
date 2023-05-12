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
   *
   * Объект с параметрами:
   *  - id - Уникальный идентификатор
   *  - title_ru - Название страны
   *  - title_eng - Название страны
   *  - image - Флаг страны(Если нет, то null)
   *
   * */
  countries = 'countries',

  /**
   * Возвращает операторов
   *
   * Объект с параметрами:
   *  -
   * */
  operators = 'operators',

  /**
   * Возвращает сервисы, которые можно выбрать для заказа
   *
   * Объект с параметрами:
   *  - id - код сервиса
   *  - title - название сервиса
   *  - image - картинка сервиса (Или null)
   *  - count - доступное количество к заказу
   *  - cost - цена номера с учетом наценки от создателя бота
   *  - rate - процент доставки смс (null - не писать о нём)
   *
   * */
  services = 'services',

  /**
   * *********************
   *
   * */
  orders = 'orders',

  /**
   * Создаем заказ
   *
   * Объект с параметрами:
   *  - id - номер транзакции
   *  - phone - номер арендованный
   *  - time - время timestamp после которого закончится активация. Вернется по гринвичу.
   *
   * */
  createOrder = 'createOrder',

  /**
   * Получение пользователя
   *
   * Объект с параметрами:
   *  - id - идентификатор пользователя (tg_id)
   *  - country - выбранная страна пользователя (Объект)
   *  - operator - выбранный оператор (строка)
   *  - language - (ru или eng)
   *
   * */
  getUser = 'getUser',

  /**
   * Задать страну ( для заказа )
   *
   * Объект с параметрами:
   *  - id - идентификатор пользователя (tg_id)
   *  - country - выбранная страна пользователя (Объект)
   *  - operator - выбранный оператор (строка)
   *
   * */
  setCountry = 'setCountry',

  /**
   * Задать сервис ( для заказа )

   * */
  setService = 'setService',

  /**
   * Задать оператора
   *
   * Объект с параметрами:
   *  - id - идентификатор пользователя (tg_id)
   *  - country - выбранная страна пользователя (Объект)
   *  - operator - выбранный оператор (строка)
   *
   * */
  setOperator = 'setOperator',

  /**
   * Задать язык
   *
   * Объект с параметрами:
   *  - id - идентификатор пользователя (tg_id)
   *  - country - выбранная страна пользователя (строка)
   *  - operator - выбранный оператор (строка)
   *  - language - (ru или eng)
   *
   * */
  setLanguage = 'setLanguage',

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
 * Запрос /operators
 *
 * Обязательный параметры:
 *  - country - Для какой страны выбор операторов (GET string)
 * */
declare interface SMSOperatorsParams {
  /**
   * Для какой страны выбор операторов (GET string)
   * */
  country: string;
}

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
   * Идентификатор пользователя телеграм. (У пользователя установлена выбранная страна/оператор) И поэтому сервисы вернутся только те, что выбраны у него и доступны (GET number)
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
declare interface SMSCountriesParams {
  /**
   * Идентификатор пользователя телеграм. (У пользователя установлена выбранная страна/оператор) И поэтому сервисы вернутся только те, что выбраны у него и доступны (GET number)
   * */
  user_id: number;
  /**
   *
   * */
  public_key: string;
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
declare interface SMSCreateOrderParams {
  /**
   * Идентификатор пользователя телеграм. (У пользователя установлена выбранная страна/оператор) И поэтому сервисы вернутся только те, что выбраны у него и доступны (GET number)
   * */
  user_id: number;
  /**
   * Приватный ключ пользователя(GET string)
   * */
  user_secret_key: string;
  /**
   * Публичный ключ модуля (GET string)
   * */
  public_key: string;
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
 * Запрос /setCountry
 *
 * Обязательный параметры:
 *  - user_id - Уникальный идентификатор пользователя (GET number)
 *  - country - Код страны (GET string)
 *
 * */
declare interface SMSSetCountryParams {
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
  /**
   * Приватный ключ пользователя(GET string)
   * */
  user_secret_key: string;
}

/**
 * Запрос /setOperator
 *
 * Обязательный параметры:
 *  - user_id - Уникальный идентификатор пользователя (GET number)
 *  - user_secret_key - Приватный ключ пользователя (GET string)
 *  - operator - Код оператора (GET string)
 *
 * */
declare interface SMSSetOperatorParams {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
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
declare interface SMSSetServiceParams {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
  /**
   * Уникальный идентификатор заказа0
   * */
  service: string;
  /**
   * Приватный ключ пользователя(GET string)
   * */
  user_secret_key: string;
}

/**
 * Запрос /setLanguage
 *
 * Обязательный параметры:
 *  - user_id - Уникальный идентификатор пользователя (GET number)
 *  - language -  (GET string)
 *
 * */
declare interface SMSSetLanguageParams {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
  /**
   * Язык ( eng или ru )
   * */
  language: string;
  /**
   * Приватный ключ пользователя(GET string)
   * */
  user_secret_key: string;
}

/**
 * Запрос /orders
 *
 * Обязательный параметры:
 *  - user_id - Уникальный идентификатор пользователя (GET number)
 *
 * */
declare interface SMSOrdersParams {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
  /**
   * Приватный ключ пользователя(GET string)
   * */
  user_secret_key: string;
  /**
   * Публичный ключ модуля (GET string)
   * */
  public_key: string;
}

/**
 * Запрос /getOrder
 *
 * Обязательный параметры:
 *  - user_id - Уникальный идентификатор пользователя (GET number)
 * */
declare interface SMSGetOrderParams {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
  /**
   * Уникальный идентификатор заказа0
   * */
  order_id: number;
  /**
   * Публичный ключ модуля (GET string)
   * */
  public_key: string;
  /**
   * Приватный ключ пользователя(GET string)
   * */
  user_secret_key: string;
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
declare interface SMSCloseOrderParams {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
  /**
   * Уникальный идентификатор заказа0
   * */
  order_id: number;
  /**
   * Публичный ключ модуля (GET string)
   * */
  public_key: string;
  /**
   * Приватный ключ пользователя(GET string)
   * */
  user_secret_key: string;
}

/**
 * Запрос /reportOrderSms
 *
 * Обязательный параметры:
 *  - user_id - Уникальный идентификатор пользователя (GET number)
 *
 * */
declare interface SMSReportOrderSmsParams {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
  /**
   * Уникальный идентификатор заказа0
   * */
  order_id: number;
  /**
   * Публичный ключ модуля (GET string)
   * */
  public_key: string;
  /**
   * Приватный ключ пользователя(GET string)
   * */
  user_secret_key: string;
}

/**
 * Запрос /secondSms
 *
 * Обязательный параметры:
 *  - user_id - Уникальный идентификатор пользователя (GET number)
 *
 * */
declare interface SMSSecondSmsParams {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
  /**
   * Уникальный идентификатор заказа0
   * */
  order_id: number;
  /**
   * Публичный ключ модуля (GET string)
   * */
  public_key: string;
  /**
   * Приватный ключ пользователя(GET string)
   * */
  user_secret_key: string;
}

/**
 * Запрос /confirmOrder
 *
 * Обязательный параметры:
 *  - user_id - Уникальный идентификатор пользователя (GET number)
 *
 * */
declare interface SMSConfirmOrderParams {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
  /**
   * Уникальный идентификатор заказа0
   * */
  order_id: number;
  /**
   * Публичный ключ модуля (GET string)
   * */
  public_key: string;
  /**
   * Приватный ключ пользователя(GET string)
   * */
  user_secret_key: string;
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
  : Q extends 'operators'
  ? SMSOperatorsParams
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
  : Q extends 'setOperator'
  ? SMSSetOperatorParams
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
  : Q extends 'reportOrderSms'
  ? SMSReportOrderSmsParams
  : null;
