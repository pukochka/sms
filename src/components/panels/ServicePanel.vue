<template>
  <div class="q-gutter-y-md">
    <div
      class="q-gutter-y-sm relative-position"
      v-for="(stage, index) in stages"
      :key="index">
      <div class="text-weight-bold font-size-16">
        {{ index + 1 }}. {{ stage.label }}
      </div>

      <component :is="stage.component" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { stages } from 'stores/content/stages';
</script>

<style lang="scss" scoped></style>
