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
        style="height: 24px; width: 24px" />
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

const data = useDataStore();
const lang = computed(() => useLang());

const label = computed(() =>
  data.user.language === 'ru'
    ? namesCountry[data.multiSelectedCountry?.org_id ?? '']
    : data.multiSelectedCountry?.name_en ?? ''
);

const image = computed(() => data.multiSelectedCountry?.image ?? '');

const nullify = () => {
  data.multiSelectedCountry = null;
  data.multiSelectedValue = [];
};
</script>

<style lang="scss" scoped></style>
