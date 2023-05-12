<template>
  <q-dialog
    v-model="states.dialogs.orders_view"
    maximized
    transition-hide="slide-right"
    transition-show="slide-left"
    transition-duration="100">
    <q-card>
      <q-card-section class="row justify-between items-center no-wrap">
        <div :class="[main.titleClasses]">{{ main.language.activations }}</div>

        <q-btn
          unelevated
          class="rounded-10"
          size="md"
          color="primary"
          icon="close"
          v-close-popup />
      </q-card-section>

      <q-card-section class="q-pt-none" v-if="data.active_order.length > 0">
        <div class="text-center rounded-10 q-pa-sm bg-orange-14 text-white">
          <q-icon name="warning" color="white" size="26px" />

          <div class="">
            {{ main.language.activations_notify }} :
            {{ data.active_order.length }}
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none justify-between">
        <div
          :class="[main.itemBackgroundClass + main.titleClasses]"
          class="rounded-10 q-pa-md q-py-xl text-center"
          v-if="data.orders.length === 0">
          {{ main.language.no_activations }}
        </div>

        <ChooseItem
          v-else
          search=""
          type="order"
          stable-height
          :current-items="data.orders"
          :el-height="elHeight"
          :searching="false"
          :visible-items="3" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { useStatesStore } from 'stores/states/statesStore';
import { useMainStore } from 'stores/main/mainStore';
import { useDataStore } from 'stores/data/dataStore';

import ChooseItem from 'components/stages/ChooseItem.vue';

import { useQuasar } from 'quasar';

const states = useStatesStore();
const main = useMainStore();
const data = useDataStore();
const quasar = useQuasar();

const elHeight = computed(() => quasar.screen.height / 5);
</script>

<style lang="scss" scoped></style>
