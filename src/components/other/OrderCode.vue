<template>
  <q-item
    style="max-height: 35px !important; min-height: 35px !important"
    class="relative-position bg-item">
    <q-btn
      v-if="visibility"
      unelevated
      color="primary"
      icon="visibility"
      class="absolute-left rounded-10"
      @click="openView" />

    <q-item-section>
      <q-item-label
        class="font-size-16 text-weight-bold text-center q-px-xl ellipsis">
        {{ item }}
      </q-item-label>
    </q-item-section>

    <CopyButton :text="item" />
  </q-item>
</template>

<script lang="ts" setup>
import CopyButton from 'components/other/CopyButton.vue';
import { computed } from 'vue';
import { useDialog } from 'src/utils/use/useDialog';

const props = withDefaults(defineProps<OrderCodeProps>(), {
  item: '',
});

const visibility = computed(() => props.item.length >= 15);

const openView = () => {
  useDialog(props.item, true, true);
};

interface OrderCodeProps {
  item: string;
}
</script>

<style lang="scss" scoped></style>
