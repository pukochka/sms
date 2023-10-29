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
      <q-item-label class="font-size-16 text-weight-bold text-center">
        {{ decode }}
      </q-item-label>
    </q-item-section>

    <copy-button :text="item" />
  </q-item>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { useDialog } from 'src/utils/use/useDialog';

import CopyButton from 'components/other/CopyButton.vue';

import { decodeURIWithoutSlash } from 'src/utils/helpers/string';

const props = withDefaults(defineProps<OrderCodeProps>(), {
  item: '',
});

const visibility = computed(() => props.item.length >= 15);

const decode = computed(() => decodeURIWithoutSlash(props.item));

const openView = () => {
  useDialog(decode.value, true, true);
};

interface OrderCodeProps {
  item: string;
}
</script>

<style lang="scss" scoped></style>
