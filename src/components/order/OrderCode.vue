<template>
  <q-item
    style="max-height: 35px !important; min-height: 35px !important"
    class="relative-position bg-item">
    <q-item-section>
      <q-item-label class="font-size-16 text-weight-bold text-center">
        {{ item }}
      </q-item-label>
    </q-item-section>

    <CopyButton :text="item" />
  </q-item>
</template>

<script lang="ts" setup>
import CopyButton from 'components/other/CopyButton.vue';

defineProps({
  item: String,
});
</script>

<style lang="scss" scoped></style>
