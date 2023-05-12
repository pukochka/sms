<template>
  <q-item clickable @click="select" style="height: 52px">
    <q-item-section>
      <q-item-label :class="[main.textClasses]">{{ item.title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';
import { defaultOperatorItem } from 'stores/defaults';

import { useDataStore } from 'stores/data/dataStore';
import { useMainStore } from 'stores/main/mainStore';
import { fetchSMS } from 'boot/queries';

const props = withDefaults(defineProps<Props>(), {
  item: () => defaultOperatorItem,
});

const data = useDataStore();
const main = useMainStore();

const select = () => {
  fetchSMS('setOperator', {
    user_id: data.user?.id ?? 0,
    operator: props.item.title,
  });
};

interface Props {
  item?: SMSOperator;
}
</script>

<style lang="scss" scoped></style>
