<template>
  <q-item class="rounded-10 bg-item">
    <q-item-section avatar>
      <q-btn
        flat
        round
        size="md"
        color="primary"
        icon="close"
        @click="nullify" />
    </q-item-section>

    <q-item-section avatar>
      <q-img
        class="rounded-10"
        :src="image"
        spinner-color="primary"
        style="height: 24px; width: 24px">
        <template v-slot:error>
          <q-img
            class="rounded-10"
            src="src/assets/default.png"
            spinner-color="primary"
            style="height: 24px; width: 10px" />
        </template>
      </q-img>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-subtitle1">{{ label }}</q-item-label>
    </q-item-section>

    <q-badge
      class="rounded-10"
      floating
      color="primary"
      text-color="white"
      :label="lang.selected_country" />
  </q-item>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import namesCountry from 'src/utils/names/contries';

import { useDataStore } from 'stores/data/dataStore';

import { useLang } from 'src/utils/use/useLang';
import { findCountryName } from 'src/utils/names/find';

const data = useDataStore();
const lang = computed(() => useLang());

const label = computed(() =>
  findCountryName(data.countries.selectedMulti?.org_id ?? '')
);

const image = computed(() => data.countries.selectedMulti?.image ?? '');

const nullify = () => {
  data.countries.selectedMulti = null;
  data.selectedMultiServices = [];
};
</script>

<style lang="scss" scoped></style>
