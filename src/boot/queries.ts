import config from 'src/config';
import { sms, bott } from 'boot/instances';

import { getHash } from 'src/utils/helpers/string';

import { useDataStore } from 'stores/data/dataStore';
import { useStatesStore } from 'stores/states/statesStore';

import { useNotify } from 'src/utils/use/useNotify';
import { useColor } from 'src/utils/use/useColor';
import { useLang } from 'src/utils/use/useLang';
import { LocalStorage } from 'quasar';

export async function fetchSMS<Q extends keyof SMSQueries>(
  query: Q,
  params?: SMSParams<Q>,
  callback?: (response?: any) => void
) {
  const data = useDataStore();
  const states = useStatesStore();
  const lang = useLang();

  try {
    return await sms({
      url: query,
      params: params,
    }).then((response) => {
      if (callback) callback(response);

      if (query === 'services') {
        /** */

        data.setServices(response.data.data, true);

        /** */
      } else if (query === 'countries') {
        /** */

        data.countries.value = response.data.data;

        /** */
      } else if (query === 'getCountries') {
        /** */

        data.countries.multi = response.data.data ?? [];
        data.setLastCountry('multi');
        fetchSMS('getServices', {
          public_key: config.public_key,
          country: LocalStorage.getItem('last-multi-country') ?? '1',
        });

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
        /** */
      } else if (query === 'setLanguage') {
        /** */

        data.userValue = response.data.data;

        /** */
      } else if (query === 'createOrder') {
        /** */

        data.setOrder(response.data.data);
        states.openDialog('order');

        /** */
      } else if (query === 'orders') {
        /** */

        data.orders.value = response.data.data;

        /** */
      } else if (query === 'getRentOrders') {
        /** */

        data.orders.rent = response.data.data ?? [];

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

        /** */
      } else if (query === 'getUser') {
        /** */

        data.userValue = response.data.data;

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
          () => useNotify('', true)
        );

        /** */
      } else if (query === 'getRentCountries') {
        /** */

        data.countries.rent = response.data.data ?? [];
        data.setLastCountry('rent');
        fetchSMS('getRentServices', {
          public_key: config.public_key,
          country: LocalStorage.getItem('last-rent-country') ?? '1',
        });

        /** */
      } else if (query === 'getRentServices') {
        /** */

        data.setRentServices(response.data.data ?? []);

        /** */
      } else if (query === 'getRentOrder') {
        /** */

        data.orders.selectedRent = response.data.data;

        /** */
      } else if (query === 'getContinuePrice') {
        /** */

        data.prolongPrice = response.data.data;
        states.openDialog('rent_continue');

        /** */
      } else if (query === 'createRentOrder') {
        /** */

        data.orders.selectedRent = response.data.data;
        states.openDialog('rent_view');

        /** */
      } else if (query === 'continueRent') {
        /** */

        data.orders.selectedRent = response.data.data;
        useNotify(lang.success_rent_continue);

        /** */
      } else if (query === 'confirmRentOrder') {
        /** */

        data.orders.selectedRent = response.data.data;
        useNotify(lang.success_rent_confirm);

        /** */
      } else if (query === 'closeRentOrder') {
        /** */

        data.orders.selectedRent = response.data.data;
        useNotify(lang.success_rent_cancel);

        /** */
      } else if (query === 'getTimePrice') {
        /** */

        data.rentPrice = response.data.data;

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
      data.systemUserValue = response.data.data;

      fetchSMS('getUser', {
        user_id: response.data.data.user.telegram_id,
      });
    });
  } catch (e) {}
}

async function startApp(id: number, secret: string) {
  return await Promise.all([
    fetchSMS('services', { public_key: config.public_key }),
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
      () => useNotify('', true)
    ),
    fetchSMS('getRentOrders', {
      user_id: id,
      user_secret_key: secret,
      public_key: config.public_key,
    }),
  ]);
}
