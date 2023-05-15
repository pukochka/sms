import axios from 'axios';
import config from 'src/config';

import { useStatesStore } from 'stores/states/statesStore';
import { useLang } from 'src/utils/use/useLang';
import { useDialog } from 'src/utils/use/useDialog';
import { LoadingNames } from 'stores/states/models';

const sms = axios.create({
  baseURL: config.domain,
  method: 'get',
});

const bott = axios.create({
  baseURL: config.domain_bott,
  method: 'post',
});

for (const instance of [sms, bott]) {
  instance.interceptors.request.use(function (config) {
    const states = useStatesStore();

    // states.startLoad(config.url ?? '', config.params ?? {});

    return config;
  });

  instance.interceptors.response.use(
    function (response) {
      const states = useStatesStore();
      const lang = useLang();

      console.log(response.config.url);
      states.load(<LoadingNames>response.config.url ?? '');

      if (response.data.result === true) {
        return response;
      } else {
        const message =
          lang.order_status_text[response.data.message] ??
          response.data.message ??
          lang.errors.undefined_message;

        useDialog(message, true);

        return Promise.reject('error');
      }
    },
    function (error) {
      const states = useStatesStore();
      const lang = useLang();

      states.load(error.config.url ?? '', true);

      useDialog(lang.errors.connection, true);

      return Promise.reject(error);
    }
  );
}

export { bott, sms };
