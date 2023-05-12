<template>
  <q-item
    class="col-12 rounded-10"
    :class="[main.itemBackgroundClass]"
    style="height: 52px">
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
      <q-item-label :class="[main.textClasses]">{{ title }}</q-item-label>
    </q-item-section>

    <q-badge
      class="rounded-10"
      floating
      color="primary"
      text-color="white"
      :label="main.language.selected_country" />
  </q-item>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { useMainStore } from 'stores/main/mainStore';
import { useDataStore } from 'stores/data/dataStore';
import { CountryImage } from 'src/utils/images';

const main = useMainStore();
const data = useDataStore();

const title = computed(() =>
  data.userValue?.language === 'ru'
    ? data.selectedCountry?.title_ru
    : data.selectedCountry?.title_eng
);

const Image = () => CountryImage(data.selectedCountry?.id);
</script>

<style lang="scss" scoped></style>
