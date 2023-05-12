<template>
  <q-item
    class="col-12 rounded-10"
    :class="[main.itemBackgroundClass]"
    style="height: 52px">
    <q-item-section avatar class="cursor-pointer">
      <q-btn
        flat
        round
        size="md"
        color="primary"
        icon="close"
        @click="data.selectedOperatorValue = null" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="[main.textClasses]">
        {{ data.selectedOperator.title }}
      </q-item-label>
    </q-item-section>

    <q-badge
      class="rounded-10"
      floating
      color="primary"
      text-color="white"
      :label="`${main.language.selected_operator}`" />
  </q-item>
</template>

<script lang="ts" setup>
import { useMainStore } from 'stores/main/mainStore';
import { useDataStore } from 'stores/data/dataStore';

const main = useMainStore();
const data = useDataStore();
</script>

<style lang="scss" scoped></style>
