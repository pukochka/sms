<template>
  <q-item
    clickable
    style="height: 52px"
    class="relative-position country-item"
    @click="data.services.selectedRent = item">
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
        :label="lang.button_rent"
        @click="openBuild" />
    </transition>
  </q-item>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { defaultRentService } from 'stores/content/defaults';

import { useDataStore } from 'stores/data/dataStore';
import { useLang } from 'src/utils/use/useLang';

import { useStatesStore } from 'stores/states/statesStore';

const props = withDefaults(defineProps<Props>(), {
  item: () => defaultRentService,
});

const data = useDataStore();
const states = useStatesStore();
const lang = computed(() => useLang());

const title = computed(() => props.item?.longName ?? '');
const price = computed(() => props.item.cost.comma(lang.value.fromAt + ' '));

const selected = computed(
  () => data.services.selectedRent?.name === props.item.name
);

const openBuild = () => {
  data.services.selectedRent = props.item;
  states.openDialog('rent_build');
};

interface Props {
  item?: SMSRentService;
}
</script>

<style lang="scss" scoped></style>
