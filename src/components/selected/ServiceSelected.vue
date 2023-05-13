<template>
  <q-item class="col-12 rounded-10 bg-item" style="height: 52px">
    <q-item-section avatar>
      <q-btn
        flat
        round
        size="md"
        color="primary"
        icon="close"
        @click="data.selectedServiceValue = null" />
    </q-item-section>

    <q-item-section avatar>
      <div class="icon-sms">
        <Image />
      </div>
    </q-item-section>

    <q-item-section>
      <q-item-label>
        {{ data.selectedService?.longName }}
      </q-item-label>
    </q-item-section>

    <q-badge
      class="rounded-10"
      floating
      color="primary"
      text-color="white"
      :label="lang.selected_service" />
  </q-item>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useLang } from 'src/utils/use/useLang';

import { useDataStore } from 'stores/data/dataStore';

import { ServiceImage } from 'src/utils/images';

const data = useDataStore();
const lang = computed(() => useLang());

const Image = () => ServiceImage(data.selectedService?.name);
</script>

<style lang="scss" scoped></style>
