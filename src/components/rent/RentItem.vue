<template>
  <q-item :style="{ height: elHeight + 'px' }">
    <q-item-section>
      <q-item-label caption v-if="minHeight">
        {{ lang.order }} №{{ item.id }}
      </q-item-label>

      <q-item-label caption>
        <div class="">{{ lang.date_end }} {{ endDate }}</div>
      </q-item-label>

      <q-item-label class="row items-center q-gutter-x-sm" v-if="minHeight">
        <ImageCountry />

        <div class="">{{ country }}</div>
      </q-item-label>

      <q-item-label class="row items-center q-gutter-x-sm">
        <ImageService />

        <div class="">{{ service }}</div>
      </q-item-label>
    </q-item-section>

    <q-item-section side class="q-gutter-y-sm items-end">
      <q-badge
        class="q-pa-sm rounded-10"
        color="orange-7"
        text-color="white"
        :label="lang.rent_status[status]" />

      <q-btn
        flat
        no-caps
        class="rounded-10"
        size="md"
        color="primary"
        :label="lang.details"
        :loading="loading"
        @click="openRent" />
    </q-item-section>
  </q-item>
</template>

<script lang="ts" setup>
import config from 'src/config';
import { computed, ref } from 'vue';
import { date, useQuasar } from 'quasar';
import { defaultRentOrder } from 'stores/content/defaults';

import { CountryImage, ServiceImage } from 'src/utils/images';
import { findCountryName, findServiceName } from 'src/utils/names/find';

import { useDataStore } from 'stores/data/dataStore';
import { useLang } from 'src/utils/use/useLang';

import { fetchSMS } from 'boot/queries';

const props = withDefaults(defineProps<RentItemProps>(), {
  item: () => defaultRentOrder,
});

const quasar = useQuasar();
const data = useDataStore();
const lang = computed(() => useLang());

const loading = ref(false);

const elHeight = computed(() => quasar.screen.height / 4.3);
const minHeight = computed(() => quasar.screen.height > 550);

const country = computed(() => findCountryName(props.item.country));
const service = computed(() => findServiceName(props.item.service));

const status = computed(() => props.item.status ?? 9);

const endDate = computed(() =>
  date.formatDate(Number(props.item.end_time + '000'), 'DD-MM-YYYY HH:mm')
);

const openRent = () => {
  loading.value = true;

  fetchSMS(
    'getRentOrder',
    {
      order_id: props.item?.id ?? 0,
      user_id: data.user.id ?? 0,
      user_secret_key: data.systemUser.secret_user_key,
      public_key: config.public_key,
    },
    true
  ).then(() => (loading.value = false));
};

const ImageCountry = () => CountryImage(props.item?.country);
const ImageService = () => ServiceImage(props.item?.service);

interface RentItemProps {
  item: SMSRentOrder;
}
</script>

<style lang="scss" scoped></style>
