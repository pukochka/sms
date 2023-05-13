<template>
  <q-page class="fit">
    <q-tab-panels v-model="states.tab" animated class="bg-transparent">
      <q-tab-panel name="service">
        <div class="q-gutter-y-md">
          <div
            class="q-gutter-y-sm relative-position overflow-hidden"
            :id="'stage-' + index"
            v-for="(stage, index) in stages"
            :key="index">
            <div class="text-weight-bold font-size-16">
              {{ index + 1 }}. {{ stage.label }}
            </div>

            <component :is="stage.component" />
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="multi-service"> </q-tab-panel>
    </q-tab-panels>

    <div class="q-pt-lg"></div>
  </q-page>
</template>

<script setup lang="ts">
import { stages } from 'components/stages/stages';
import { useStatesStore } from 'stores/states/statesStore';

const states = useStatesStore();
</script>
