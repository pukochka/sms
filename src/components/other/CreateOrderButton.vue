<template>
  <div
    class="fixed-bottom row q-pa-sm transition"
    :class="[data.multiSelected ? ' multi-selected' : '']">
    <q-btn
      class="rounded-10 col"
      unelevated
      no-caps
      size="md"
      color="primary"
      :loading="loading"
      :label="lang.create_order"
      @click="createOrder" />
  </div>
</template>

<script lang="ts" setup>
import config from 'src/config';
import { computed, ref } from 'vue';
import { useLang } from 'src/utils/use/useLang';
import { useDataStore } from 'stores/data/dataStore';
import { fetchSMS } from 'boot/queries';

const lang = computed(() => useLang());
const data = useDataStore();

const loading = ref(false);

const createOrder = () => {
  loading.value = true;

  const services = data.selectedMultiServices
    .map((service) => service.name)
    .join(',');

  fetchSMS('createMulti', {
    user_id: data.user.id,
    services: services,
    user_secret_key: data.systemUser.secret_user_key,
    public_key: config.public_key,
    country: data.countries.selectedMulti?.org_id ?? '-1',
  }).then(() => {
    loading.value = false;
    data.selectedMultiServices = [];
  });
};
</script>

<style lang="scss" scoped></style>
