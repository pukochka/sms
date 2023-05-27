/**
 * Types for SMS-service bot-t.com
 * (c) 2023-present
 * */

/**
 * /createMulti
 * */
declare interface SMSCreateMultiParams
  extends SMSCommonParams,
    SMSUserIdParam,
    SMSCountryParam {
  /**
   * Выбранные сервисы
   * */
  services: string;
}

declare interface SMSMultiQueries {
  /**
   * Возвращает страны для мульти активации
   * */
  getCountries: PublicKey;

  /**
   * Возвращает сервисы для мульти активации
   * */
  getServices: PublicKey & SMSCountryParam;

  /**
   * Создаем заказ мультисервиса
   * */
  createMulti: SMSCreateMultiParams;
}
