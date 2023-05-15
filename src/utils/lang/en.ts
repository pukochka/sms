const status_text: Record<number, string> = {
  0: 'Cancellation of activation',
  1: 'Willingness to accept SMS',
  2: 'There are no available numbers',
  3: 'Waiting for a repeated SMS',
  4: 'Waiting for SMS',
  5: 'Waiting for code refinement',
  6: 'Activation confirmed',
  7: 'Got SMS',
  8: 'Cancellation of activation',
  9: 'Activation canceled',

  10: 'Activation successfully activated',
  11: 'There is no connection to the servers',
  12: 'The specified activation id does not exist',
  13: 'One of the parameters has an invalid value',
  14: 'Error when trying to transmit activation ID without forwarding, or completed/inactive activation',
  15: 'Invalid API access key',
  16: 'Incorrect action',
  17: 'The account is blocked',
};

const enScheme = {
  price: 'Price',
  cost: 'from',
  items: 'pcs',

  copied: 'Copied!',
  service: 'Service',
  multiService: 'Multiservice',
  profile: 'Profile',
  rent: 'Rent',

  select_country: 'Select country',
  select_service: 'Select service',
  select_services: 'Select services',
  select_operator: 'Select operator',

  max_selecting: 'You can choose from 2 to 5 services',
  multi_success: 'Successfully activated:',

  adds: 'The web application was created in the service',
  adds_button: 'Create a bot! Click!',

  search: 'Search...',
  not_found: 'Nothing was found...',

  from: 'from',
  fromAt: 'from',
  prev: 'Prev',
  next: 'Next',
  arrangement: 'Arrangement',
  buy: 'Buy',

  selected_operator: 'Selected operator',
  selected_country: 'Selected country',
  selected_service: 'Selected service',

  select_notify: 'You need to select a service',
  select_notify_country: 'Select a country',

  balance: 'Balance',
  change_language: 'Change the language',
  activations: 'Activations',

  order: 'Order',
  create_order: 'Create order',
  activations_warning: 'There is an unfinished activation',
  activations_notify: 'Unfinished activations',
  no_activations: "You don't have any activations yet",
  finish_activation: 'Finish activation',
  noBalance: 'There is not enough balance to create an order!',

  order_time: 'Date',
  order_service: 'Service',
  order_country: 'Country',
  order_operator: 'Operator',
  order_price: 'Price',
  order_status: 'Status',

  order_end: 'Order completed',
  order_notify_wait:
    'Insert the number into the service and send an SMS, then check the received code here!',

  order_phone: 'Phone number',
  order_remained: 'Remained',
  order_codes: 'Code from the SMS',

  order_status_text: status_text,

  button_repeat: 'Repeat SMS',
  button_confirm: 'Confirm activation',
  button_cancel: 'Cancel activation',
  button_report: 'Confirm readiness',

  button_dismiss: 'Dismiss',
  button_open: 'Open',

  details: 'Details',

  cancel: 'Cancel',
  confirm: 'Confirm',

  errors: {
    undefined_message:
      'Unknown error, please contact the technical support of the service',
    connection: 'Check your internet connection or disable the VPN',
    titles: {
      sure: 'Attention',
      reload: 'Oops, something went wrong...',
      notify: 'Notification',
    },
  },
};

export default enScheme;
