<template>
  <q-page class="fit q-pa-md q-gutter-y-md" :class="[main.backgroundClass]">
    <div
      class="q-gutter-y-sm relative-position overflow-hidden"
      :id="'stage-' + index"
      v-for="(stage, index) in main.stages"
      :key="index">
      <div :class="[main.titleClasses]">{{ index + 1 }}. {{ stage.label }}</div>

      <component :is="stage.component" />
    </div>

    <div class="q-pt-lg"></div>
  </q-page>
</template>

<script setup lang="ts">
import { useMainStore } from 'stores/main/mainStore';

const main = useMainStore();
</script>
