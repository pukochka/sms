<template>
  <transition name="fade">
    <div
      v-if="modelValue"
      style="z-index: 10"
      class="absolute-full flex flex-center rounded-10">
      <q-spinner color="primary" size="3em" />
    </div>
  </transition>
</template>

<script lang="ts" setup>
withDefaults(defineProps<Props>(), {
  modelValue: false,
});

interface Props {
  modelValue: boolean;
}
</script>

<style lang="scss" scoped></style>
