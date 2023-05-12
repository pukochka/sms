import axios from 'axios';
import config from 'src/config';
import { useStatesStore } from 'stores/states/statesStore';
import { useMainStore } from 'stores/main/mainStore';

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

    states.startLoad(config.url ?? '', config.params ?? {});

    return config;
  });

  instance.interceptors.response.use(
    function (response) {
      const states = useStatesStore();
      const main = useMainStore();

      states.endLoad(response.config.url ?? '');

      if (response.data.result === true) {
        return response;
      } else {
        states.notify(
          main.language.order_status_text[response.data.message] ??
            response.data.message ??
            main.language.errors.undefined_message
        );

        return Promise.reject('error');
      }
    },
    function (error) {
      const states = useStatesStore();
      const main = useMainStore();

      states.endLoad(error.config.url ?? '');

      if (error.config.line === 83) return;

      states.notify(main.language.errors.connection);

      return Promise.reject(error);
    }
  );
}

export { bott, sms };
