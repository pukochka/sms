import config from 'src/config';
import { sms, bott } from 'boot/instances';

import { getHash } from 'src/utils/helpers/string';

import { useDataStore } from 'stores/data/dataStore';
import { useStatesStore } from 'stores/states/statesStore';

import { useNotify } from 'src/utils/use/useNotify';
import { useColor } from 'src/utils/use/useColor';
import { useLang } from 'src/utils/use/useLang';

export async function fetchSMS<Q extends SMSQueries>(
  query: Q,
  params?: SMSParams<Q>,
  open?: boolean
) {
  const data = useDataStore();
  const states = useStatesStore();
  const lang = useLang();

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
      } else if (query === 'getCountries') {
        /** */

        data.multiCountriesValue = response.data.data;

        /** */
      } else if (query === 'getServices') {
        /** */

        data.setMultiServices(response.data.data);

        /** */
      } else if (query === 'setCountry') {
        /** */

        data.selectCountry(response.data.data);

        /** */
      } else if (query === 'getSettings') {
        /** */

        useColor(response.data.data ?? 1);

        /** */
      } else if (query === 'setService') {
        /** */

        data.selectService(response.data.data);

        /** */
      } else if (query === 'setLanguage') {
        /** */

        data.setUser(response.data.data);

        /** */
      } else if (query === 'createOrder') {
        /** */

        data.setOrder(response.data.data);
        states.openDialog('order');

        /** */
      } else if (query === 'orders') {
        /** */

        data.setOrders(response.data.data);

        if (open) useNotify('', true);

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
        if (open) states.openDialog('order');

        /** */
      } else if (query === 'getUser') {
        /** */

        data.setUser(response.data.data);

        startApp(data.user.id, data.systemUser.secret_user_key).then(
          () => (states.loadings.init = false)
        );

        /** */
      } else if (query === 'createMulti') {
        /** */

        useNotify(lang.multi_success + response.data?.data?.length ?? 0);
        fetchSMS(
          'orders',
          {
            user_id: data.user.id,
            user_secret_key: data.systemUser.secret_user_key,
            public_key: config.public_key,
          },
          true
        );

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

async function startApp(id: number, secret: string) {
  return await Promise.all([
    fetchSMS('services', { public_key: config.public_key }, true),
    fetchSMS('countries', {
      user_id: id,
      public_key: config.public_key,
    }),
    fetchSMS(
      'orders',
      {
        user_id: id,
        user_secret_key: secret,
        public_key: config.public_key,
      },
      true
    ),
  ]);
}
