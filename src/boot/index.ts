import config from 'src/config';

import { boot } from 'quasar/wrappers';
import { createPinia } from 'pinia';

import { Dark } from 'quasar';

import { fetchSMS, fetchUser } from 'boot/queries';

export default boot(({ app }) => {
  console.log('[ இ௰இ ]');

  const pinia = createPinia();
  app.use(pinia);

  Dark.set(config.is_dark);

  window.Telegram.WebApp.enableClosingConfirmation();

  fetchSMS('getSettings', { public_key: config.public_key }).then();

  fetchUser().then();
});
