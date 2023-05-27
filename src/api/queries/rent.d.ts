/**
 * Types for SMS-service bot-t.com
 * (c) 2023-present
 * */
declare interface SMSRentTimeParam {
  /**
   * Выбранное время аренды
   * */
  time: number;
}

/**
 * /continueRent
 * */
declare type SMSCreateRentOrderParams = SMSUserIdParam &
  SMSCommonParams &
  SMSRentTimeParam &
  SMSCountryParam &
  SMSServiceParam;

/**
 * /continueRent
 * */
declare type SMSContinueRentParams = SMSOrderParams & SMSRentTimeParam;

/**
 *
 * */
declare interface SMSRentQueries {
  /**
   * Получить список стран
   * */
  getRentCountries: PublicKey;

  /**
   * Получить список сервисов по выбранной стране
   * */
  getRentServices: PublicKey & SMSCountryParam;

  /**
   * Создание заказа аренды
   * */
  createRentOrder: SMSCreateRentOrderParams;

  /**
   * Получаем аренды пользователя
   * */
  getRentOrders: SMSUserIdParam & SMSCommonParams;

  /**
   * Получаем заказ, вызывать метод при открытом заказе в модуле.
   * По мере работы webhook будет происходить обновление кода
   * */
  getRentOrder: SMSOrderParams;

  /**
   * Отменяем заказ
   * */
  closeRentOrder: SMSOrderParams;

  /**
   * Подтверждает заказа
   * */
  confirmRentOrder: SMSOrderParams;

  /**
   * Получаем цену продление
   * */
  getContinuePrice: SMSOrderParams & SMSRentTimeParam;

  /**
   * Продлеваем аренду на указанное время
   * */
  continueRent: SMSContinueRentParams;
}
