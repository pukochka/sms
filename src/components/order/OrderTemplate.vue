<template>
  <q-dialog
    v-model="states.dialogs.orders_view"
    maximized
    transition-hide="slide-right"
    transition-show="slide-left"
    transition-duration="100">
    <q-card>
      <q-card-section class="row justify-between items-center no-wrap">
        <div class="font-size-16 text-weight-bold">{{ lang.activations }}</div>

        <q-btn
          unelevated
          class="rounded-10"
          size="md"
          color="primary"
          icon="close"
          v-close-popup />
      </q-card-section>

      <q-card-section class="q-pt-none" v-if="data.activeOrders.length > 0">
        <div class="text-center rounded-10 q-pa-sm bg-orange-14 text-white">
          <q-icon name="warning" color="white" size="26px" />

          <div class="">
            {{ lang.activations_notify }} :
            {{ data.activeOrders.length }}
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none justify-between">
        <div
          class="rounded-10 q-pa-md q-py-xl text-center bg-item"
          v-if="data.orders.length === 0">
          {{ lang.no_activations }}
        </div>

        <choose-item
          v-else
          search=""
          stable-height
          :current-items="data.orders"
          :el-height="elHeight"
          :searching="false"
          :visible-items="3">
          <template v-slot="{ item }">
            <order-item :item="item"></order-item>
          </template>
        </choose-item>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { useStatesStore } from 'stores/states/statesStore';
import { useDataStore } from 'stores/data/dataStore';

import ChooseItem from 'components/stages/ChooseItem.vue';

import { useQuasar } from 'quasar';
import { useLang } from 'src/utils/use/useLang';
import OrderItem from 'components/items/OrderItem.vue';

const states = useStatesStore();
const data = useDataStore();
const quasar = useQuasar();
const lang = computed(() => useLang());

const elHeight = computed(() => quasar.screen.height / 5);
</script>

<style lang="scss" scoped></style>
