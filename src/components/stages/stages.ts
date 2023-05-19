import { computed, markRaw } from 'vue';
import { useLanguage } from 'src/utils/useLanguage';

import ServiceChoose from 'components/stages/ServiceChoose.vue';
import CountryChoose from 'components/stages/CountryChoose.vue';

const stages = computed<SMSStages[]>(() => [
  {
    component: markRaw(ServiceChoose),
    label: useLanguage().select_service,
    id: 0,
  },

  {
    component: markRaw(CountryChoose),
    label: useLanguage().select_country,
    id: 1,
  },
]);

export { stages };

interface SMSStages {
  label: string;
  component: any;
  id: number;
}
