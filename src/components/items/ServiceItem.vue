<template>
  <q-item
    class="relative-position overflow-hidden"
    clickable
    @click="select"
    style="height: 52px">
    <q-item-section avatar>
      <q-img
        class="rounded-10"
        :src="props.item.image ?? ''"
        spinner-color="primary"
        style="height: 24px; width: 24px" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-subtitle1">
        <div class="" v-html="name"></div>
      </q-item-label>
    </q-item-section>

    <q-inner-loading :showing="loading" class="bg-page">
      <q-spinner size="36px" color="primary" />
    </q-inner-loading>
  </q-item>
</template>

<script lang="ts" setup>
import config from 'src/config';
import { computed, ref } from 'vue';

import { defaultServiceItem } from 'stores/content/defaults';

import { useDataStore } from 'stores/data/dataStore';

import { fetchSMS } from 'boot/queries';

import { products } from 'src/utils/names/products';

const props = withDefaults(defineProps<Props>(), {
  item: () => defaultServiceItem,
});

const data = useDataStore();

const loading = ref(false);

const name = computed(() => products[props.item.name] ?? props.item.name);

const select = () => {
  loading.value = true;

  fetchSMS(
    'setService',
    {
      service: props.item.name,
      user_id: data.user.id,
      user_secret_key: data.systemUser.secret_user_key,
    },
    (response) => {
      fetchSMS(
        'countries',
        {
          public_key: config.public_key,
          user_id: data.user.id,
        },
        () => {
          loading.value = false;
          data.selectService(response.data.data);
        }
      );
    }
  ).then();
};

interface Props {
  item?: SMSServices;
  index?: number;
  top?: number;
}
</script>

<style lang="scss" scoped></style>
