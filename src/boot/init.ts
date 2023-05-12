import { boot } from 'quasar/wrappers';
import { colors, setCssVar, Dark } from 'quasar';

import config from 'src/config';
import { fetchSMS, fetchUser } from 'boot/queries';

export default boot(async () => {
  const { getPaletteColor, lighten } = colors;

  Dark.set(config.is_dark);

  window.Telegram.WebApp.enableClosingConfirmation();

  setCssVar(
    'primary',
    lighten(getPaletteColor('primary'), config.is_dark ? 30 : 0)
  );

  // fetchUser().then(() => console.log('[ இ௰இ ]'));

  fetchSMS('getUser', { user_id: 1028741753 });
});
