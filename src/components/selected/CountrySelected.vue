<template>
  <q-item class="col-12 rounded-10 bg-item" style="height: 52px">
    <q-item-section avatar>
      <q-btn
        flat
        round
        size="md"
        color="primary"
        icon="close"
        @click="data.selectedCountryValue = null" />
    </q-item-section>

    <q-item-section avatar>
      <div class="icon-sms">
        <Image />
      </div>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
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
import { useLang } from 'src/utils/use/useLang';

import { useDataStore } from 'stores/data/dataStore';

import { CountryImage } from 'src/utils/images';

const data = useDataStore();
const lang = computed(() => useLang());

const title = computed(() =>
  data.userValue.language === 'ru'
    ? data.selectedCountry?.title_ru
    : data.selectedCountry?.title_eng
);

const Image = () => CountryImage(data.selectedCountry?.id);
</script>

<style lang="scss" scoped></style>
