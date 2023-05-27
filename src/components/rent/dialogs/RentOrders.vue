<template>
  <q-dialog
    v-model="states.dialogs.rent"
    maximized
    transition-hide="slide-right"
    transition-show="slide-left"
    transition-duration="150">
    <q-card>
      <q-card-section class="row justify-between items-center no-wrap">
        <div class="text-h6 text-weight-bold">
          {{ lang.rents }} {{ data.orders.rent.length }}
        </div>

        <q-btn
          unelevated
          class="rounded-10"
          size="md"
          color="primary"
          icon="close"
          v-close-popup />
      </q-card-section>

      <q-card-section class="q-pt-none" v-if="data.activeRents.length > 0">
        <q-banner class="bg-orange-7 justify-between text-white rounded-10">
          <div class="row justify-between items-center no-wrap">
            {{ lang.active_rent }}: {{ data.activeRents.length }}

            <q-icon :name="mdiLabelPercent" color="white" size="32px" />
          </div>
        </q-banner>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div
          class="rounded-10 q-pa-md q-py-xl text-center bg-item"
          v-if="data.orders.rent.length === 0">
          {{ lang.no_rents }}
        </div>

        <pagination-list
          v-else
          search=""
          stable-height
          :current-items="data.orders.rent"
          :el-height="elHeight"
          :searching="false"
          :visible-items="3">
          <template v-slot="{ item }">
            <rent-item :item="item"></rent-item>
          </template>
        </pagination-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { useQuasar } from 'quasar';
import { useLang } from 'src/utils/use/useLang';
import { useDataStore } from 'stores/data/dataStore';
import { useStatesStore } from 'stores/states/statesStore';

import PaginationList from 'components/other/PaginationList.vue';
import RentItem from 'components/rent/RentItem.vue';
import { mdiLabelPercent } from '@quasar/extras/mdi-v7';

const states = useStatesStore();
const data = useDataStore();
const quasar = useQuasar();
const lang = computed(() => useLang());

const elHeight = computed(() => quasar.screen.height / 4.3);
</script>

<style lang="scss" scoped></style>
