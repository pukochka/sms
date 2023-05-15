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
  org_id: number;
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
   *
   * */
  operator: string;
  /**
   * Статус
   */
  status: 0 | 1 | 3 | 4 | 5 | 6 | 8 | 9 | 10;
}
/**
 *
 * 1: 'Готовность принять СМС', не использую
 * 4: 'Ожидает СМС',
 * 5: 'Ожидание повторного СМС', не использую
 * 6: 'Активация подтверждена',
 * 7: 'Пришла СМС',
 * 8: 'Отмена активации',
 *
 *
 * Стандарт ( с повтором )
 * 4 -> 7 -> 5 -> 7 -> 6
 *
 * Стандарт ( без повтором )
 * 4 -> 7 -> 6
 *
 * Отена активации
 * 4 -> 8 ( 9 )
 *
 * Время истекло без смс
 * 4 -> 8 ( 9 )
 *
 * Время истекло с смс
 * 4 -> 7 -> 8 ( 9 )
 *
 * Отена активации - пользователь использовал метод closeOrder
 * Активация подтверждена - пользователь использовал метод confirmOrder или время истекло
 *
 *
 *
 * 1 5
 * */
