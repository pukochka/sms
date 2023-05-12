<template>
  <ItemsLoading v-model="states.loadings.operators" />

  <div class="q-gutter-y-sm" v-if="data.selectedOperator === null">
    <q-input
      dense
      borderless
      class="rounded-10 q-px-md col-grow"
      :class="[main.itemBackgroundClass]"
      :placeholder="main.language.search"
      v-model="data.search.operators">
      <template v-slot:append>
        <q-icon name="search" v-if="data.search.operators === ''" />

        <q-icon
          v-else
          name="close"
          @click.stop.prevent="data.search.operators = ''"
          class="cursor-pointer" />
      </template>
    </q-input>

    <ChooseItem
      :type="'operator'"
      :search="data.search.operators"
      :current-items="data.operators" />
  </div>

  <div v-else class="row">
    <OperatorSelected />
  </div>
</template>

<script lang="ts" setup>
import { useDataStore } from 'stores/data/dataStore';
import { useMainStore } from 'stores/main/mainStore';
import { useStatesStore } from 'stores/states/statesStore';

import ChooseItem from 'components/stages/ChooseItem.vue';
import ItemsLoading from 'components/other/ItemsLoading.vue';
import OperatorSelected from 'components/selected/OperatorSelected.vue';

const main = useMainStore();
const data = useDataStore();
const states = useStatesStore();
</script>

<style lang="scss" scoped></style>
