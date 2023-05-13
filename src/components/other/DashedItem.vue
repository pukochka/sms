<template>
  <div class="row no-wrap col-12">
    <div class="">{{ item }}</div>

    <div class="col-grow q-mx-sm relative-position">
      <div class="order-dashed"></div>
    </div>

    <div class="">{{ value }}</div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<DashedItemProps>(), {
  item: '',
  value: '',
});

interface DashedItemProps {
  item: string | number;
  value: string | number;
}
</script>

<style lang="scss" scoped></style>
