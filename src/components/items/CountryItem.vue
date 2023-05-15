<template>
  <q-item
    clickable
    @click="data.selectCountry(props.item)"
    style="height: 52px"
    class="relative-position country-item">
    <q-item-section avatar>
      <q-img
        class="rounded-10"
        :src="props.item.image"
        spinner-color="primary"
        style="height: 24px; width: 24px" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-subtitle1">
        {{ title }}
      </q-item-label>
    </q-item-section>

    <q-item-section side class="">
      <q-item-label class="text-center text-weight-bold text-color">
        {{ price }}
      </q-item-label>

      <q-item-label class="text-primary text-weight-bold" caption>
        {{ item.count }} {{ lang.items }}
      </q-item-label>
    </q-item-section>

    <transition name="button">
      <q-btn
        class="absolute-right border-left-10 q-px-lg country-item"
        v-if="selected"
        unelevated
        square
        size="md"
        color="primary"
        :label="lang.buy"
        :loading="loading"
        @click="createOrder" />
    </transition>
  </q-item>
</template>

<script lang="ts" setup>
import config from 'src/config';
import namesCountry from 'src/utils/names/contries';

import { withDefaults, computed, ref } from 'vue';
import { defaultCountryItem } from 'stores/content/defaults';

import { useDataStore } from 'stores/data/dataStore';
import { useLang } from 'src/utils/use/useLang';

import { fetchSMS } from 'boot/queries';

const props = withDefaults(defineProps<Props>(), {
  item: () => defaultCountryItem,
});

const data = useDataStore();
const lang = computed(() => useLang());

const loading = ref(false);

const title = computed(() =>
  data.user.language === 'ru'
    ? namesCountry[props.item?.id]
    : props.item?.title_eng
);

const price = computed(
  () => lang.value.fromAt + ' ' + (props.item.cost / 100).toFixed(2) + ' ₽'
);
const selected = computed(() => data.selectedCountry?.id === props.item.id);

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
