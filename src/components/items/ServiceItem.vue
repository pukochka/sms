<template>
  <q-item
    class="relative-position overflow-hidden"
    clickable
    @click="select"
    style="height: 52px">
    <q-item-section avatar>
      <div class="icon-sms">
        <Image />
      </div>
    </q-item-section>

    <q-item-section>
      <q-item-label :class="[main.textClasses]">
        {{ name }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts" setup>
import { computed, withDefaults } from 'vue';

import { defaultServiceItem } from 'stores/defaults';
import { ServiceImage } from 'src/utils/images';

import { useDataStore } from 'stores/data/dataStore';
import { useMainStore } from 'stores/main/mainStore';

import { fetchSMS } from 'boot/queries';

const props = withDefaults(defineProps<Props>(), {
  item: () => defaultServiceItem,
});

const data = useDataStore();
const main = useMainStore();

const name = computed(() => props.item?.longName);

const Image = () => ServiceImage(props.item?.name);

const select = () => {
  fetchSMS('setService', {
    service: props.item.name,
    user_id: data.user?.id ?? 0,
    user_secret_key: data.systemUser?.secret_user_key ?? '',
  });
};

interface Props {
  item?: SMSServices;
  index?: number;
  top?: number;
}
</script>

<style lang="scss" scoped>
.top-animation {
  transition: 0.3s top;
}
</style>
