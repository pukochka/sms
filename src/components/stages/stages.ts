import { computed, markRaw } from 'vue';
import { useLang } from 'src/utils/use/useLang';

import ServiceChoose from 'components/stages/ServiceChoose.vue';
import CountryChoose from 'components/stages/CountryChoose.vue';

const stages = computed<SMSStages[]>(() => [
  {
    component: markRaw(ServiceChoose),
    label: useLang().select_service,
    id: 0,
  },

  {
    component: markRaw(CountryChoose),
    label: useLang().select_country,
    id: 1,
  },
]);

export { stages };

interface SMSStages {
  label: string;
  component: any;
  id: number;
}
