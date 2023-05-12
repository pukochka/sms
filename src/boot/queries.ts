import config from 'src/config';
import { sms, bott } from 'boot/instances';

import { useDataStore } from 'stores/data/dataStore';

import { getUserString } from 'src/utils/string';
import { useStatesStore } from 'stores/states/statesStore';
import { hasActivation } from 'src/utils/hasActivation';

export async function fetchSMS<Q extends SMSQueries>(
  query: Q,
  params?: SMSParams<Q>,
  init?: boolean
) {
  const data = useDataStore();
  const states = useStatesStore();
  try {
    return await sms({
      url: query,
      params: params,
    }).then((response) => {
      if (query === 'services') {
        /** */

        data.setServices(response.data.data, true);

        /** */
      } else if (query === 'countries') {
        /** */

        data.setCountries(response.data.data);

        /** */
      } else if (query === 'getUser') {
        /** */

        data.setUser(response.data.data);

        states.stop();

        fetchSMS('services', { public_key: config.public_key }, true);
        fetchSMS(
          'orders',
          {
            user_id: data.user?.id ?? 0,
            user_secret_key: data.systemUser?.secret_user_key ?? '',
            public_key: config.public_key,
          },
          true
        );

        /** */
      } else if (query === 'setCountry') {
        /** */

        data.selectCountry(response.data.data);

        /** */
      } else if (query === 'setService') {
        /** */

        data.selectService(response.data.data);

        /** */
      } else if (query === 'setLanguage') {
        /** */

        data.setUser(response.data.data);

        /** */
      } else if (
        query === 'createOrder' ||
        response.config.params.hasOwnProperty('view')
      ) {
        /** */

        data.setOrder(response.data.data);
        states.openDialog('order');

        /** */
      } else if (query === 'orders') {
        /** */

        data.setOrders(response.data.data);

        if (init) hasActivation();

        /** */
      } else if (
        query === 'closeOrder' ||
        query === 'confirmOrder' ||
        query === 'secondSms'
      ) {
        /** */

        data.updateOrder(response.data.data);

        fetchSMS('orders', {
          user_id: data.user?.id ?? 0,
          user_secret_key: data.systemUser?.secret_user_key ?? '',
          public_key: config.public_key,
        });

        /** */
      } else if (query === 'getOrder') {
        /** */

        data.updateOrder(response.data.data);
        states.openDialog('order');

        /** */
      } else if (query === 'reportOrderSms') {
        /** */

        data.updateOrder(response.data.data);
        states.removeAny(response.data.data);

        /** */
      }
    });
  } catch (e) {}
}

export async function fetchUser() {
  const data = useDataStore();
  try {
    return await bott({
      url: 'module/bot/check-hash',
      data: {
        bot_id: config.bot_id,
        userData: getUserString(),
      },
    }).then((response) => {
      data.setSystemUser(response.data.data);

      fetchSMS('getUser', {
        user_id: response.data.data.user.telegram_id,
      });
    });
  } catch (e) {}
}
