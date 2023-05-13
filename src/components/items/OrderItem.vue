<template>
  <q-item :style="{ height: elHeight + 'px' }">
    <q-item-section>
      <q-item-label caption v-if="minHeight">
        {{ lang.order }} №{{ item.id }}
      </q-item-label>

      <q-item-label class="row items-center q-gutter-x-sm" v-if="minHeight">
        <div class="icon-sms relative-position">
          <ImageCountry />
        </div>

        <div class="">{{ country }}</div>
      </q-item-label>

      <q-item-label class="row items-center q-gutter-x-sm">
        <div class="icon-sms relative-position">
          <ImageService />
        </div>

        <div class="">{{ service }}</div>
      </q-item-label>

      <q-item-label>
        <q-badge
          color="orange"
          text-color="black"
          :label="lang.order_status_text[item.status]" />
      </q-item-label>
    </q-item-section>

    <q-item-section side class="q-gutter-y-sm items-end">
      <q-badge
        v-if="is_active"
        class="q-pa-sm rounded-10"
        color="orange-14"
        text-color="white"
        :label="lang.finish_activation" />

      <q-btn
        flat
        v-haptic
        no-caps
        class="rounded-10"
        size="md"
        color="primary"
        :label="lang.details"
        :loading="loading"
        @click="openOrder" />
    </q-item-section>
  </q-item>
</template>

<script lang="ts" setup>
import config from 'src/config';

import { computed, PropType, ref } from 'vue';
import { useQuasar } from 'quasar';
import { CountryImage, ServiceImage } from 'src/utils/images';

import { useDataStore } from 'stores/data/dataStore';
import { useLang } from 'src/utils/use/useLang';

import { fetchSMS } from 'boot/queries';

const props = defineProps({
  item: Object as PropType<SMSOrder>,
});

const quasar = useQuasar();
const data = useDataStore();
const lang = computed(() => useLang());

const loading = ref(false);

const elHeight = computed(() => quasar.screen.height / 5);
const minHeight = computed(() => quasar.screen.height > 550);

const is_active = computed(
  () => data.active_order.find((order) => order.id === props.item?.id) ?? false
);

const country = computed(
  () =>
    data.countries?.find((country) => country.id === props.item?.country)
      ?.title ?? props.item?.country
);

const service = computed(
  () =>
    data.services?.find((service) => service.name === props.item?.service)
      ?.longName ?? props.item?.service
);

const openOrder = () => {
  loading.value = true;

  fetchSMS('getOrder', {
    order_id: props.item?.id ?? 0,
    user_id: data.user?.id ?? 0,
    public_key: config.public_key,
    user_secret_key: data.systemUser?.secret_user_key ?? '',
    view: true,
  }).then(() => (loading.value = false));
};

const ImageCountry = () => CountryImage(props.item?.country);
const ImageService = () => ServiceImage(props.item?.service);
</script>

<style lang="scss" scoped></style>
