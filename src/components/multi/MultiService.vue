<template>
  <q-item
    style="height: 52px"
    clickable
    v-ripple
    @click="data.selectMultiService(props.item)">
    <q-item-section avatar>
      <div class="row no-wrap items-center q-gutter-x-sm">
        <q-checkbox v-model="selected" color="primary" />

        <q-img
          class="rounded-10"
          :src="props.item.image"
          spinner-color="primary"
          style="height: 24px; width: 24px" />

        <div class="absolute-full"></div>
      </div>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-subtitle1">{{ label }}</q-item-label>
    </q-item-section>

    <q-item-section side class="no-wrap">
      <q-item-label class="text-color text-weight-bold">
        {{ lang.fromAt }} {{ price }}
      </q-item-label>

      <q-item-label caption class="text-primary text-weight-bold">
        {{ item.count }} {{ lang.items }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { defaultMultiService } from 'stores/content/defaults';
import { products } from 'src/utils/names/products';

import { useDataStore } from 'stores/data/dataStore';
import { useLang } from 'src/utils/use/useLang';

const props = withDefaults(defineProps<MultiServiceProps>(), {
  item: () => defaultMultiService,
});

const data = useDataStore();
const lang = computed(() => useLang());

const label = computed(() => products[props.item.name]);
const price = computed(() => props.item.cost.comma());

const selected = computed(() =>
  data.selectedMultiServices
    .map((service) => service.name)
    .includes(props.item.name)
);

interface MultiServiceProps {
  item: SMSMultiService;
}
</script>

<style lang="scss" scoped></style>
