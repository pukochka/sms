import config from 'src/config';

import { h } from 'vue';
import { QImg } from 'quasar';

const CountryImage = (country_id?: string) => {
  return h(QImg, {
    class: ' rounded-10 q-list--bordered',
    style: 'height:24px; width:24px',
    src: (config.activate_country_url + country_id ?? '0') + '.svg',
  });
};

const ServiceImage = (name?: string) => {
  let link = (config.activate_service_url + name ?? 'ot') + '0.webp';

  if (name === 'be') link = '/megamarket.png';

  return h(QImg, {
    class: ' rounded-10 q-list--bordered',
    style: 'height:24px; width:24px',
    src: link,
  });
};

export { CountryImage, ServiceImage };
