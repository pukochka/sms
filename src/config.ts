/**
 * (c) 2023-present
 * Released under the MIT License.
 * Root file
 *
 *  .d888888b.
 * d88    "Y8b           .db               .db
 * 888     888           888               888
 * 888     88            888               888
 * 8888888X    .d8888b. 88888b            88888b         .d888888 .d8888b. .d8888b.
 * 888     88  888  888  888               888           888      888  888 8  88  8
 * 888     888 888  888  888     88888888  888           888      888  888 8  88  8
 * Y88b    888 888  888  888               888     .db.  888      888  888 8  88  8 .db.
 *  "8888888P' "Y8888P'  "Y888P"          "Y888P"  "YP"  "Y8888b. "Y8888P' 8  88  8 "YP"
 *
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

  request_interval: 5000,
  request_countries_interval: 100000,

  // is_dark: window.Telegram.WebApp.colorScheme === 'dark',
  is_dark: true,

  activate_country_url:
    'https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/country/',
  activate_service_url:
    'https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/',
};

export default config;
