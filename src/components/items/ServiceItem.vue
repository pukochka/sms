<template>
  <q-item
    class="relative-position overflow-hidden country-item"
    clickable
    @click="data.services.selectedValue = props.item"
    style="height: 52px">
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
      <q-item-label class="text-subtitle1">
        {{ name }}
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
import { computed, ref } from 'vue';

import { defaultServiceItem } from 'stores/content/defaults';

import { useDataStore } from 'stores/data/dataStore';

import { fetchSMS } from 'boot/queries';
import config from 'src/config';
import { useLang } from 'src/utils/use/useLang';

const props = withDefaults(defineProps<Props>(), {
  item: () => defaultServiceItem,
});

const data = useDataStore();
const lang = computed(() => useLang());

const loading = ref(false);

const name = computed(() => props.item?.longName ?? '');
const price = computed(() => props.item.cost.comma());

const selected = computed(() => data.selectedService?.name === props.item.name);

const createOrder = () => {
  loading.value = true;

  fetchSMS('createOrder', {
    service: props.item.name,
    country: data.selectedCountry?.org_id ?? '',
    user_id: data.user?.id ?? 0,
    public_key: config.public_key,
    user_secret_key: data.systemUserValue?.secret_user_key ?? '',
  }).then(() => (loading.value = false));
};

interface Props {
  item?: SMSServices;
  index?: number;
  top?: number;
}
</script>

<style lang="scss" scoped></style>
