import { computed, markRaw } from 'vue';

import { useLang } from 'src/utils/use/useLang';

import CountryChoose from 'components/stages/CountryChoose.vue';
import ServiceChoose from 'components/stages/ServiceChoose.vue';

export const stages = computed((): Stages[] => [
  {
    label: useLang().select_service,
    component: markRaw(ServiceChoose),
    id: 0,
  },
  {
    label: useLang().select_country,
    component: markRaw(CountryChoose),
    id: 1,
  },
]);

interface Stages {
  label: string;
  component: any;
  id: number;
}
