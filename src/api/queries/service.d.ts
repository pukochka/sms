/**
 * Types for SMS-service bot-t.com
 * (c) 2023-present
 * */

declare interface SMSServiceQueries {
  /**
   * Возвращает страны
   * */
  countries: SMSUserIdParam & PublicKey;

  /**
   * Возвращает сервисы, которые можно выбрать для заказа
   * */
  services: PublicKey;

  /**
   * Получаем заказы пользователя
   * */
  orders: SMSUserIdParam & SMSCommonParams;

  /**
   * Создаем заказ
   * */
  createOrder: SMSCountryParam & SMSUserIdParam & SMSCommonParams;

  /**
   * Задать страну ( для заказа )
   * */
  setCountry: SMSCountryParam & SMSUserIdParam;

  /**
   * Задать сервис ( для заказа )
   * */
  setService: SMSServiceParam & SMSUserIdParam & SecretKey;

  /**
   * Получаем заказ
   * */
  getOrder: SMSOrderParams;

  /**
   * Отменяем заказ
   * */
  closeOrder: SMSOrderParams;

  /**
   * Запрос повторного СМС
   * */
  secondSms: SMSOrderParams;

  /**
   * Подтвердить успешную активацию
   * */
  confirmOrder: SMSOrderParams;
}
