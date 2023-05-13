import config from 'src/config';
import { sms, bott } from 'boot/instances';

import { useDataStore } from 'stores/data/dataStore';

import { getHash } from 'src/utils/helpers/string';
import { useStatesStore } from 'stores/states/statesStore';
import { hasActivation } from 'src/utils/hasActivation';

export async function fetchSMS<Q extends SMSQueries>(
  query: Q,
  params?: SMSParams<Q>,
  open?: boolean
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
        if (open) states.loadings.init = false;

        /** */
      } else if (query === 'getUser') {
        /** */

        data.setUser(response.data.data);

        fetchSMS('services', { public_key: config.public_key }, true);
        fetchSMS(
          'orders',
          {
            user_id: data.user?.id ?? 0,
            user_secret_key:
              /* data.systemUser?.secret_user_key ?? */
              '2997ec12c0c4e2df3e316d943e3da6e72997ec123e3d4d9429971695e4d5e4d5',
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

        if (open) hasActivation();

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
        userData: getHash(),
      },
    }).then((response) => {
      data.setSystemUser(response.data.data);

      fetchSMS('getUser', {
        user_id: response.data.data.user.telegram_id,
      });
    });
  } catch (e) {}
}
