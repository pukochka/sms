<template>
  <transition name="fade">
    <div
      v-if="modelValue"
      style="z-index: 10"
      class="absolute-full flex flex-center rounded-10"
      :class="[main.loadingClass]">
      <q-spinner color="primary" size="3em" />
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { useMainStore } from 'stores/main/mainStore';

withDefaults(defineProps<Props>(), {
  modelValue: false,
});

const main = useMainStore();

interface Props {
  modelValue: boolean;
}
</script>

<style lang="scss" scoped></style>
