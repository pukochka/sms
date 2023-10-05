/**
 * (c) 2023-present
 * Released under the MIT License.
 * Root file
 *
 *  .d888888b.
 * d88    "Y8b           .db               .db
 * 888     888           888               888
 * 888     88            888               888
 * 8888888X     .d8888b. 88888b            88888b         .d88888  .d8888b. .d88888b.
 * 888     88  888  888  888               888           888      888  888 88  88  88
 * 888     888 888  888  888     88888888  888           888      888  888 88  88  88
 * Y88b    888 888  888  888               888     .db.  888      888  888 88  88  88 .db.
 *  "8888888P' "Y8888P'  "Y888P"          "Y888P"  "YP"  "Y8888b. "Y8888P' 88  88  88 "YP"
 *
 *
 * ⣿⣿⠿⠿⣿⠿⣿⠿⠿⠿⣿⣿⡿⠿⠛⠛⠛⠛⠿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠉⠁ ⠉⠻⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡟⠁⣿⣿⠿⠿⣿⠿⣿⠿⠿⠿⣿⣿⡿⠿⠛⠛⠛⠛⠿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠉⠁ ⠉⠻⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡟⠁
 * */

// --------------------------- Предупреждение ---------------------------
// |  Изменение этого файла приведёт к непредусмотренным последствиям.  |
// ----------------------------------------------------------------------

import { getQueryParam } from 'src/utils/helpers/string';

const config = {
  domain: 'https://activate.bot-t.com/',
  domain_bott: 'https://api.bot-t.com/v1/',

  bot_id: getQueryParam('bot_id') ?? 886,
  public_key: getQueryParam('public_key') ?? '062d7c679ca22cf88b01b13c0b24b057',

  time_to_order_end: 1200,
  time_to_cancel: 1200,
  time_over: 180,

  request_interval: 5000,

  // dark: window.Telegram.WebApp.colorScheme === 'dark',
  dark: true,

  activate_country_url:
    'https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/country/',
  activate_service_url:
    'https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/',
};

export default config;

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
 * */
