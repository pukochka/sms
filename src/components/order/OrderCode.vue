<template>
  <q-item
    style="max-height: 35px !important; min-height: 35px !important"
    class="relative-position"
    :class="[main.itemBackgroundClass]">
    <q-item-section>
      <q-item-label :class="[main.titleClasses]" class="text-center">
        {{ item }}
      </q-item-label>
    </q-item-section>

    <CopyButton :text="item" />
  </q-item>
</template>

<script lang="ts" setup>
import { useMainStore } from 'stores/main/mainStore';
import CopyButton from 'components/other/CopyButton.vue';

defineProps({
  item: String,
});

const main = useMainStore();
</script>

<style lang="scss" scoped></style>
