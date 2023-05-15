<template>
  <div class="q-gutter-y-md relative-position">
    <div class="q-gutter-y-sm">
      <div class="text-weight-bold font-size-16">
        1. {{ lang.select_country }}
      </div>

      <q-input
        v-if="data.multiSelectedCountry === null"
        dense
        borderless
        class="rounded-10 q-px-md col-grow bg-item"
        :placeholder="lang.search"
        v-model="data.search.multiCountry">
        <template v-slot:append>
          <q-icon name="search" v-if="data.search.multiCountry === ''" />

          <q-icon
            v-else
            name="close"
            @click.stop.prevent="data.search.multiCountry = ''"
            class="cursor-pointer" />
        </template>
      </q-input>

      <choose-item
        v-if="data.multiSelectedCountry === null"
        :search="data.search.multiCountry"
        :current-items="data.multiCountries">
        <template v-slot="{ item }">
          <multi-country :item="item"></multi-country>
        </template>
      </choose-item>

      <multi-country-selected v-else></multi-country-selected>
    </div>

    <div class="q-gutter-y-sm">
      <div class="">
        <div class="text-weight-bold font-size-16">
          2. {{ lang.select_services }}
        </div>

        <div class="text-caption">{{ lang.max_selecting }}</div>
      </div>

      <div
        v-if="data.multiSelectedCountry === null"
        class="row bg-item flex-center rounded-10 q-py-lg q-px-sm">
        <q-icon color="primary" name="info" size="32px" />

        <div class="q-pl-sm">
          {{ lang.select_notify_country }}
        </div>
      </div>

      <div class="q-gutter-y-sm" v-else>
        <q-input
          dense
          borderless
          class="rounded-10 q-px-md col-grow bg-item"
          :placeholder="lang.search"
          v-model="data.search.multiServices">
          <template v-slot:append>
            <q-icon name="search" v-if="data.search.multiServices === ''" />

            <q-icon
              v-else
              name="close"
              @click.stop.prevent="data.search.multiServices = ''"
              class="cursor-pointer" />
          </template>
        </q-input>

        <choose-item
          :search="data.search.multiServices"
          :current-items="data.multiServices">
          <template v-slot="{ item }">
            <multi-service :item="item"></multi-service>
          </template>
        </choose-item>
      </div>
    </div>
  </div>

  <q-inner-loading :showing="states.loadings.getCountries" class="bg-page">
    <q-spinner size="50px" color="primary" />
  </q-inner-loading>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { useLang } from 'src/utils/use/useLang';
import { useDataStore } from 'stores/data/dataStore';
import { useStatesStore } from 'stores/states/statesStore';

import ChooseItem from 'components/stages/ChooseItem.vue';
import MultiCountry from 'components/items/MultiCountry.vue';
import MultiService from 'components/items/MultiService.vue';
import MultiCountrySelected from 'components/selected/MultiCountrySelected.vue';

const lang = computed(() => useLang());
const data = useDataStore();
const states = useStatesStore();
</script>

<style lang="scss" scoped></style>
