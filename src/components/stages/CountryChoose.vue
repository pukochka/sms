<template>
  <ItemsLoading v-model="states.loadings.countries" />

  <div
    v-if="data.canPay === false"
    :class="[main.itemBackgroundClass]"
    class="row justify-center items-center rounded-10 q-py-lg q-px-sm">
    <q-icon color="primary" name="info" size="32px" />

    <div class="q-pl-sm" :class="[main.textClasses]">
      {{ main.language.select_notify }}
    </div>
  </div>

  <div id="country" class="q-gutter-y-sm" v-else>
    <div class="row justify-between no-wrap q-gutter-x-sm">
      <q-input
        dense
        borderless
        class="rounded-10 q-px-md col-grow"
        :class="[main.itemBackgroundClass]"
        :placeholder="main.language.search"
        v-model="data.search.countries">
        <template v-slot:append>
          <q-icon name="search" v-if="data.search.countries === ''" />

          <q-icon
            v-else
            name="close"
            @click.stop.prevent="data.search.countries = ''"
            class="cursor-pointer" />
        </template>
      </q-input>

      <q-btn
        dense
        no-caps
        no-wrap
        padding="4px 8px"
        unelevated
        class="rounded-10"
        size="md"
        color="primary"
        icon-right="swap_vert"
        v-haptic
        :label="main.language.price"
        @click="data.usePrice" />
    </div>

    <ChooseItem
      :type="'country'"
      :search="data.search.countries"
      :current-items="data.countries" />
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from 'stores/main/mainStore';
import { useDataStore } from 'stores/data/dataStore';
import { useStatesStore } from 'stores/states/statesStore';

import ChooseItem from 'components/stages/ChooseItem.vue';
import ItemsLoading from 'components/other/ItemsLoading.vue';

const main = useMainStore();
const data = useDataStore();
const states = useStatesStore();
</script>

<style lang="scss" scoped></style>
