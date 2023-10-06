<template>
  <q-item
    clickable
    @click="data.selectCountry(props.item)"
    style="height: 52px"
    class="relative-position country-item">
    <q-item-section avatar>
      <q-img
        class="rounded-10"
        :src="props.item.image ?? ''"
        spinner-color="primary"
        style="height: 24px; width: 24px" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-subtitle1">
        {{ title }}
      </q-item-label>
    </q-item-section>

    <q-item-section side class="no-wrap">
      <q-item-label class="text-center text-weight-bold text-color">
        {{ price }}
      </q-item-label>

      <q-item-label class="text-primary text-weight-bold" caption>
        {{ item.count }} {{ lang.items }}
      </q-item-label>
    </q-item-section>

    <transition name="button">
      <div class="absolute-right row items-stretch" v-if="selected">
        <q-btn
          class="border-left-10 q-px-lg country-item"
          unelevated
          square
          size="md"
          color="primary"
          :label="lang.buy"
          :loading="loading"
          @click="createOrder" />

        <q-btn
          class="country-item"
          square
          unelevated
          color="orange"
          @click="data.controlFavorite(data.selectedService, props.item)">
          <q-icon
            :name="favorite ? mdiStar : mdiStarOutline"
            color="white"
            size="26px" />

          <div class="absolute-full country-item"></div>
        </q-btn>
      </div>
    </transition>
  </q-item>
</template>

<script lang="ts" setup>
import config from 'src/config';

import { computed, ref } from 'vue';
import { defaultCountryItem } from 'stores/content/defaults';
import { findCountryName } from 'src/utils/names/find';

import { useDataStore } from 'stores/data/dataStore';
import { useLang } from 'src/utils/use/useLang';

import { fetchSMS } from 'boot/queries';
import { mdiStar, mdiStarOutline } from '@quasar/extras/mdi-v7';

const props = withDefaults(defineProps<Props>(), {
  item: () => defaultCountryItem,
});

const data = useDataStore();
const lang = computed(() => useLang());

const loading = ref(false);

const title = computed(() => findCountryName(props.item?.id));
const price = computed(() => props.item.cost.comma());

const selected = computed(() => data.selectedCountry?.id === props.item.id);
const favorite = computed(() =>
  data.favorites.find(
    (item) =>
      item.country.id === props.item.id &&
      item.service.name === data.selectedService?.name
  )
);

const createOrder = () => {
  loading.value = true;

  fetchSMS('createOrder', {
    country: props.item.id,
    user_id: data.user?.id ?? 0,
    public_key: config.public_key,
    user_secret_key: data.systemUserValue?.secret_user_key ?? '',
  }).then(() => {
    loading.value = false;

    data.search.countries = '';
    data.search.services = '';
  });
};

interface Props {
  item?: SMSCountry;
}
</script>

<style lang="scss" scoped></style>
