<template>
  <q-item :style="{ height: elHeight + 'px' }">
    <q-item-section class="no-wrap">
      <div class="row no-wrap items-center">
        <div class="">
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
        </div>

        <q-space></q-space>

        <q-badge
          class="q-pa-sm rounded-10 ellipsis"
          color="orange-7"
          text-color="white">
          <div class="ellipsis">{{ lang.rent_status[status] }}</div>
        </q-badge>
      </div>

      <div class="row justify-end">
        <q-btn
          dense
          unelevated
          no-caps
          class="rounded-10 col-6"
          size="md"
          color="primary"
          :label="lang.details"
          :loading="loading"
          @click="openRent" />
      </div>
    </q-item-section>
  </q-item>
</template>

<script lang="ts" setup>
import config from 'src/config';
import { computed, ref } from 'vue';
import { date, useQuasar } from 'quasar';

import { useStatesStore } from 'stores/states/statesStore';
import { useDataStore } from 'stores/data/dataStore';
import { useLang } from 'src/utils/use/useLang';

import { fetchSMS } from 'boot/queries';
import { CountryImage, ServiceImage } from 'src/utils/images';
import { findCountryName, findServiceName } from 'src/utils/names/find';

import { defaultRentOrder } from 'stores/content/defaults';

const props = withDefaults(defineProps<RentItemProps>(), {
  item: () => defaultRentOrder,
});

const quasar = useQuasar();
const data = useDataStore();
const states = useStatesStore();
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
    () => states.openDialog('rent_view')
  ).then(() => (loading.value = false));
};

const ImageCountry = () => CountryImage(props.item?.country);
const ImageService = () => ServiceImage(props.item?.service);

interface RentItemProps {
  item: SMSRentOrder;
}
</script>

<style lang="scss" scoped></style>
