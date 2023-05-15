<template>
  <q-page class="fit">
    <q-tab-panels v-model="states.tab" animated class="bg-transparent">
      <q-tab-panel
        :name="panel.name"
        v-for="(panel, index) in panels"
        :key="index">
        <component :is="panel.component"></component>
      </q-tab-panel>
    </q-tab-panels>

    <div class="q-pt-lg"></div>
  </q-page>
</template>

<script setup lang="ts">
import { useStatesStore } from 'stores/states/statesStore';

import MultiPanel from 'components/panels/MultiPanel.vue';
import RentPanel from 'components/panels/RentPanel.vue';
import ServicePanel from 'components/panels/ServicePanel.vue';

const states = useStatesStore();

const panels: Panels[] = [
  {
    name: 'service',
    component: ServicePanel,
  },
  {
    name: 'multi-service',
    component: MultiPanel,
  },
  {
    name: 'rent',
    component: RentPanel,
  },
];

interface Panels {
  name: string;
  component: any;
}
</script>
