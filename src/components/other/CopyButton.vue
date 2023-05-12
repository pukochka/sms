<template>
  <q-btn
    unelevated
    class="border-left-10 self-end absolute-right"
    size="md"
    color="primary"
    :icon="state ? 'check' : 'content_copy'"
    @click="copy" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { copyToClipboard } from 'quasar';

const props = withDefaults(defineProps<Props>(), {
  text: () => '',
});

const state = ref(false);

const copy = () => {
  state.value = true;
  copyToClipboard(props.text);

  setTimeout(() => (state.value = false), 2000);
};

interface Props {
  text: string;
}
</script>

<style lang="scss" scoped></style>
