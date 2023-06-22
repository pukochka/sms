<template>
  <q-item style="height: 52px" clickable v-ripple @click="select">
    <q-item-section avatar>
      <q-img
        class="rounded-10"
        :src="props.item.image"
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

    <q-inner-loading :showing="loading" class="bg-page">
      <q-spinner size="36px" color="primary" />
    </q-inner-loading>
  </q-item>
</template>

<script lang="ts" setup>
import config from 'src/config';
import { computed, ref } from 'vue';

import { defaultMultiCountry } from 'stores/content/defaults';
import namesCountry from 'src/utils/names/contries';

import { useDataStore } from 'stores/data/dataStore';
import { fetchSMS } from 'boot/queries';
import { findCountryName } from 'src/utils/names/find';

const props = withDefaults(defineProps<MultiCountryProps>(), {
  item: () => defaultMultiCountry,
});

const data = useDataStore();
const loading = ref(false);

const label = computed(() => findCountryName(props.item.org_id));

const select = () => {
  loading.value = true;

  fetchSMS('getServices', {
    country: props.item.org_id,
    public_key: config.public_key,
  }).then(() => {
    loading.value = false;
    data.countries.selectedMulti = props.item;
  });
};

interface MultiCountryProps {
  item: SMSMultiCountry;
}
</script>

<style lang="scss" scoped></style>
