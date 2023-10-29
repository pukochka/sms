<template>
  <q-dialog
    v-model="states.dialogs.rent_view"
    no-shake
    persistent
    transition-duration="150"
    position="bottom"
    @before-show="show"
    @hide="hide">
    <q-card style="width: 100%" class="q-gutter-y-md q-px-md q-pb-md">
      <div class="row justify-between items-center no-wrap">
        <div class="font-size-16 text-weight-bold">
          {{ lang.order }} №{{ data.createdRent.id }}
        </div>

        <q-btn
          unelevated
          class="rounded-10"
          size="md"
          color="primary"
          icon="close"
          v-close-popup />
      </div>

      <div class="row q-gutter-y-sm">
        <div
          class="row col-12 items-end"
          v-for="(item, index) in order"
          :key="index">
          <div>{{ item.label }}</div>

          <div class="col-grow q-mx-sm relative-position">
            <div class="order-dashed"></div>
          </div>

          <div class="row items-end q-gutter-x-sm">
            <ImageService v-if="item.image === 'service'" />

            <ImageCountry v-else-if="item.image === 'country'" />

            <div class="" v-html="item.value"></div>
          </div>
        </div>
      </div>

      <div class="">
        <div>
          {{ lang.order_phone }}
        </div>

        <q-list bordered separator class="rounded-10 overflow-hidden">
          <q-item
            style="max-height: 35px !important; min-height: 35px !important"
            class="relative-position bg-item">
            <q-item-section>
              <q-item-label class="text-center font-size-16 text-weight-bold">
                {{ data.createdRent.phone }}
              </q-item-label>
            </q-item-section>

            <copy-button :text="data.createdOrder?.phone ?? ''"></copy-button>
          </q-item>
        </q-list>
      </div>

      <div class="">
        <div v-if="codes.length > 0">
          {{ lang.order_codes }}
        </div>

        <pagination-list
          v-if="codes.length > 0"
          search=""
          stable-height
          :el-height="36"
          :hidden-buttons="true"
          :current-items="codes"
          :visible-items="2">
          <template v-slot="{ item }">
            <order-code :item="item"></order-code>
          </template>
        </pagination-list>

        <div
          v-if="codes.length === 0 && orderEnd === false"
          class="text-center rounded-10 q-pa-sm bg-item">
          <q-icon name="info" color="primary" size="32px" />

          <div>
            {{ lang.order_notify_wait }}
          </div>
        </div>
      </div>

      <div class="">
        <div class="" v-if="!timer.isEnd && !orderEnd && codes.length === 0">
          <div class="text-center text-caption">
            {{ lang.order_remained }} {{ timer.format }}
          </div>

          <q-linear-progress
            stripe
            rounded
            size="20px"
            :value="timer.percent"
            color="primary" />

          <div class="text-center text-caption q-pt-sm">
            {{ lang.rent_cancel_warning }}
          </div>
        </div>
      </div>

      <div
        class="text-center font-size-16 text-weight-bold q-pt-sm"
        v-if="orderEnd">
        {{ lang.rent_status[status] }}
      </div>

      <div class="row q-my-sm q-gutter-y-sm">
        <q-btn
          v-if="!orderEnd"
          unelevated
          no-caps
          class="rounded-10 col-12"
          size="md"
          color="primary"
          :label="lang.rent_confirm"
          :loading="loadings.confirm"
          @click="confirmRent" />

        <q-btn
          v-if="!orderEnd"
          unelevated
          no-caps
          class="rounded-10 col-12"
          size="md"
          color="primary"
          :label="lang.prolong_rent"
          :loading="loadings.prolong"
          @click="prolongRent" />

        <q-btn
          v-if="orderEnd === false && !timer.isEnd && codes.length === 0"
          unelevated
          no-caps
          class="rounded-10 col-12"
          size="md"
          color="red"
          :label="lang.rent_cancel"
          :loading="loadings.cancel"
          @click="cancelRent" />
      </div>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import config from 'src/config';
import { computed, ref } from 'vue';
import { date } from 'quasar';
import { findCountryName, findServiceName } from 'src/utils/names/find';

import { useLang } from 'src/utils/use/useLang';
import { useStatesStore } from 'stores/states/statesStore';
import { useDataStore } from 'stores/data/dataStore';
import { useTimer } from 'src/utils/helpers/timer';

import { fetchSMS } from 'boot/queries';

import { CountryImage, ServiceImage } from 'src/utils/images';

import PaginationList from 'components/other/PaginationList.vue';
import OrderCode from 'components/other/OrderCode.vue';
import CopyButton from 'components/other/CopyButton.vue';

const states = useStatesStore();
const data = useDataStore();
const timer = useTimer();
const lang = computed(() => useLang());

const loadings = ref({
  confirm: false,
  prolong: false,
  cancel: false,
});

let interval: any;

const updateRent = () =>
  (interval = setInterval(
    () =>
      fetchSMS('getRentOrder', {
        user_id: data.user.id,
        order_id: data.createdRent?.id ?? 0,
        public_key: config.public_key,
        user_secret_key: data.systemUser.secret_user_key,
      }),
    5000
  ));

const status = computed(() => data.createdRent?.status ?? 9);

const codes = computed(() =>
  (data.createdRent?.codes ?? '').split('.').filter((item) => item !== '')
);

const endDate = computed(() =>
  date.formatDate(
    Number(data.createdRent?.end_time + '000'),
    'DD-MM-YYYY HH:mm'
  )
);

const country = computed(() => findCountryName(data.createdRent?.country));
const service = computed(() => findServiceName(data.createdRent?.service));
const orderEnd = computed(() => [9, 10].includes(status.value));

const confirmRent = () => {
  loadings.value.confirm = true;

  fetchSMS('confirmRentOrder', {
    user_id: data.user.id,
    order_id: data.createdRent?.id ?? 0,
    public_key: config.public_key,
    user_secret_key: data.systemUser.secret_user_key,
  }).then(() => {
    timer.stop();
    loadings.value.confirm = false;
  });
};

const prolongRent = () => {
  loadings.value.prolong = true;

  fetchSMS('getContinuePrice', {
    user_id: data.user.id,
    order_id: data.createdRent?.id ?? 0,
    public_key: config.public_key,
    user_secret_key: data.systemUser.secret_user_key,
    time: 4,
  }).then(() => {
    loadings.value.prolong = false;
  });
};

const cancelRent = () => {
  loadings.value.cancel = true;

  fetchSMS('closeRentOrder', {
    user_id: data.user.id,
    order_id: data.createdRent?.id ?? 0,
    public_key: config.public_key,
    user_secret_key: data.systemUser.secret_user_key,
  }).then(() => {
    timer.stop();
    loadings.value.cancel = false;
  });
};

const show = () => {
  if (orderEnd.value) return;

  updateRent();

  timer.start(
    () => console.dir(),
    data.createdRent?.start_time ?? '',
    config.time_to_cancel
  );
};

const hide = () => {
  timer.stop();

  clearInterval(interval);

  fetchSMS('getRentOrders', {
    user_id: data.user.id,
    user_secret_key: data.systemUser.secret_user_key,
    public_key: config.public_key,
  });
};

const ImageCountry = () => CountryImage(data.createdRent?.country);
const ImageService = () => ServiceImage(data.createdRent?.service);

const order = computed(() => [
  {
    label: lang.value.order_service,
    value: service.value,
    image: 'service',
  },
  {
    label: lang.value.order_country,
    value: country.value,
    image: 'country',
  },
  {
    label: lang.value.order_price,
    value: data.createdRent?.cost?.comma(),
    image: '',
  },
  {
    label: lang.value.order_status,
    value: lang.value.rent_status[status.value],
    image: '',
  },
  {
    label: lang.value.date_end,
    value: endDate.value,
    image: '',
  },
]);
</script>

<style lang="scss" scoped></style>
