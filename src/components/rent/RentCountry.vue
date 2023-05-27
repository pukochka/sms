<template>
  <q-item style="height: 52px" clickable v-ripple @click="select">
    <q-item-section avatar>
      <q-img
        class="rounded-10"
        :src="props.item.image"
        spinner-color="primary"
        style="height: 24px; width: 24px" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-subtitle1">{{ label }}</q-item-label>
    </q-item-section>

    <q-inner-loading :showing="loading" class="bg-page">
      <q-spinner size="36px" color="primary" />
    </q-inner-loading>
  </q-item>
</template>

<script lang="ts" setup>
import config from 'src/config';
import { computed, ref } from 'vue';

import { defaultRentCountry } from 'stores/content/defaults';
import namesCountry from 'src/utils/names/contries';

import { useDataStore } from 'stores/data/dataStore';
import { fetchSMS } from 'boot/queries';

const props = withDefaults(defineProps<RentCountryProps>(), {
  item: () => defaultRentCountry,
});

const data = useDataStore();
const loading = ref(false);

const label = computed(() =>
  data.user.language === 'ru'
    ? namesCountry[props.item.id]
    : props.item.title_eng
);

const select = () => {
  loading.value = true;

  fetchSMS('getRentServices', {
    country: props.item.id,
    public_key: config.public_key,
  }).then(() => {
    loading.value = false;
    data.countries.selectedRent = props.item;
  });
};

interface RentCountryProps {
  item: SMSRentCountry;
}
</script>

<style lang="scss" scoped></style>
