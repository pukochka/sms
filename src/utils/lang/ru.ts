const status_text: Record<number, string> = {
  0: 'Отмена активации',
  1: 'Готовность принять СМС',
  2: 'Нет свободных номеров',
  3: 'Ожидание повторного СМС',
  4: 'Ожидание СМС',
  5: 'Ожидание уточнения кода',
  6: 'Активация подтверждена',
  7: 'Пришла СМС',
  8: 'Отмена активации',
  9: 'Активация отменена',

  10: 'Активация успешно активирована',
  11: 'Нет соединения с серверами',
  12: 'Указанного id активации не существует',
  13: 'Один из параметров имеет недопустимое значение',
  14: 'Ошибка при попытке передать ID активации без переадресации, или же завершенной/не активной активации',
  15: 'Неверный API ключ доступа',
  16: 'Некорректное действие',
  17: 'Аккаунт заблокирован',
};

const ruScheme = {
  price: 'Цена',
  cost: 'от',
  items: 'шт',

  copied: 'Скопированно!',
  service: 'Сервис',
  multiService: 'Мультисервис',
  profile: 'Профиль',
  rent: 'Аренда',

  select_country: 'Выбрать страну',
  select_service: 'Выбрать сервис',
  select_services: 'Выбрать сервисы',
  select_operator: 'Выбрать оператора',

  max_selecting: 'Можно выбрать от 2 до 5 сервисов',
  multi_success: 'Успешно активировано: ',

  adds: 'Веб-приложение создано в сервисе',
  adds_button: 'Создать бота! Жми!',

  search: 'Поиск...',
  not_found: 'Ничего не нашлось...',

  from: 'из',
  fromAt: 'от',
  prev: 'Пред',
  next: 'След',
  arrangement: 'Изменить порядок',
  buy: 'Купить',

  selected_operator: 'Выбранный оператор',
  selected_country: 'Выбранная страна',
  selected_service: 'Выбранный сервис',

  select_notify: 'Выберите сервис',
  select_notify_country: 'Выберите страну',

  balance: 'Баланс',
  change_language: 'Сменить язык',
  activations: 'Активации',

  order: 'Заказ',
  create_order: 'Создать заказ',
  activations_warning: 'Есть незаконченная активация',
  activations_notify: 'Неоконченные активации',
  no_activations: 'У вас пока нет активаций',
  finish_activation: 'Закончите активацию',
  noBalance: 'Не хватает баланса для создания заказа!',

  order_time: 'Дата',
  order_service: 'Сервис',
  order_country: 'Страна',
  order_operator: 'Оператор',
  order_price: 'Цена',
  order_status: 'Статус',

  order_end: 'Заказ завершён',
  order_notify_wait:
    'Вставьте номер в сервис и отправьте смс, затем проверьте полученный код здесь!',

  order_remained: 'Осталось',
  order_codes: 'Код из смс',
  order_phone: 'Номер телефона',

  order_status_text: status_text,

  button_repeat: 'Повторное СМС',
  button_confirm: 'Подтвердить активацию',
  button_cancel: 'Отменить активацию',
  button_report: 'Подтвердить готовность',

  button_dismiss: 'Пропустить',
  button_open: 'Открыть',

  details: 'Детали',

  cancel: 'Отмена',
  confirm: 'Подтвердить',

  errors: {
    undefined_message:
      'Неизвестная ошибка, обратитесь в техническу поддержку сервиса',
    connection: 'Проверьте подключение к интернету или отключите VPN',
    titles: {
      sure: 'Внимание',
      reload: 'Упс, походу что-то пошло не так...',
      notify: 'Уведомление',
    },
  },
};

export default ruScheme;
