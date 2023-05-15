<template>
  <q-dialog
    v-model="states.dialogs.order"
    no-shake
    persistent
    position="bottom"
    transition-duration="150"
    @before-show="updateShow"
    @hide="updateHide">
    <q-card style="width: 100%" class="q-gutter-y-md q-px-md q-pb-md">
      <div class="row items-center justify-between">
        <div class="font-size-16 text-weight-bold">
          {{ lang.order }} №{{ data.createdOrder.id }}
        </div>

        <q-btn
          unelevated
          class="rounded-10"
          size="md"
          color="primary"
          icon="close"
          v-close-popup />
      </div>

      <div>
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
              <div class="icon-sms" v-if="item.image === 'service'">
                <ImageService />
              </div>

              <div class="icon-sms" v-else-if="item.image === 'country'">
                <ImageCountry />
              </div>

              <div class="">{{ item.value }}</div>
            </div>
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
                {{ data.createdOrder.phone }}
              </q-item-label>
            </q-item-section>

            <CopyButton :text="data.createdOrder.phone" />
          </q-item>
        </q-list>
      </div>

      <div class="">
        <div v-if="codes.length > 0">
          {{ lang.order_codes }}
        </div>

        <choose-item
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
        </choose-item>

        <div
          v-if="
            codes.length === 0 && status !== 6 && status !== 9 && status !== 8
          "
          class="text-center rounded-10 q-pa-sm bg-item">
          <q-icon name="info" color="primary" size="32px" />

          <div>
            {{ lang.order_notify_wait }}
          </div>
        </div>
      </div>

      <div
        class="text-center font-size-16 text-weight-bold q-pa-md"
        v-if="orderEnd">
        {{ lang.order_status_text[status] }}
      </div>

      <div v-if="orderEnd === false">
        <div class="text-center text-caption">
          {{ lang.order_remained }} {{ data.timeToEnd.full }}
        </div>

        <q-linear-progress
          stripe
          rounded
          size="20px"
          :value="data.timeToEnd.percent"
          color="primary" />
      </div>

      <div class="row q-my-sm q-gutter-y-sm" v-if="orderEnd === false">
        <q-btn
          unelevated
          no-caps
          class="rounded-10 col-12"
          size="md"
          color="primary"
          :label="lang.button_repeat"
          :loading="loadings.second"
          v-if="codes.length > 0 && status !== 3 && status !== 1"
          @click="secondSms" />

        <q-btn
          unelevated
          no-caps
          class="rounded-10 col-12"
          size="md"
          color="primary"
          v-if="codes.length > 0"
          :label="lang.button_confirm"
          :loading="loadings.confirm"
          @click="confirmOrder" />

        <q-btn
          unelevated
          no-caps
          class="rounded-10 col-12"
          size="md"
          color="red"
          v-if="codes.length === 0"
          :label="lang.button_cancel"
          :loading="loadings.cancel"
          @click="cancelOrder" />
      </div>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import config from 'src/config';
import { computed, ref } from 'vue';
import { date } from 'quasar';

import { useStatesStore } from 'stores/states/statesStore';
import { useDataStore } from 'stores/data/dataStore';
import { useLang } from 'src/utils/use/useLang';

import { CountryImage, ServiceImage } from 'src/utils/images';
import { toTimeEnd } from 'src/utils/helpers/time';
import { fetchSMS } from 'boot/queries';

import ChooseItem from 'components/stages/ChooseItem.vue';
import CopyButton from 'components/other/CopyButton.vue';
import OrderCode from 'components/order/OrderCode.vue';
import namesCountry from 'src/utils/names/contries';

const states = useStatesStore();
const data = useDataStore();
const lang = computed(() => useLang());

const loadings = ref({
  second: false,
  confirm: false,
  cancel: false,
});

const time = computed(() =>
  date.formatDate((data.createdOrder?.time ?? 0) * 1000, 'DD.MM.YYYY HH:mm')
);

const status = computed(() => data.createdOrder?.status ?? 8);

const codes = computed(() => {
  let mass;

  if (data.createdOrder?.codes === null) {
    mass = [];
  } else {
    mass = JSON.parse(data.createdOrder?.codes ?? '');
  }

  mass.map((item: string) => {
    if (item?.includes('Code:')) return item.slice(5);
    return item;
  });

  return mass;
});

const country = computed(() =>
  data.user.language === 'ru'
    ? namesCountry[data.createdOrder?.country ?? '0']
    : data.countriesValue.find(
        (item) => item.id === (data.createdOrder?.country ?? '0')
      )?.title_eng
);

const service = computed(
  () =>
    data.servicesValue.find(
      (service) => service.name === data.createdOrder?.service
    )?.longName ?? data.createdOrder?.service
);

const orderEnd = computed(
  () =>
    [0, 6, 8, 9, 10].includes(status.value) ||
    toTimeEnd(data.createdOrder?.time) >= 1
);

const secondSms = () => {
  if (loadings.value.second) return;
  loadings.value.second = true;

  fetchSMS('secondSms', {
    user_id: data.user.id,
    order_id: data.createdOrder?.id ?? 0,
    public_key: config.public_key,
    user_secret_key: data.systemUser.secret_user_key,
  }).then(() => {
    loadings.value.second = false;
  });
};

const cancelOrder = () => {
  if (loadings.value.cancel) return;
  loadings.value.cancel = true;

  fetchSMS('closeOrder', {
    user_id: data.user.id,
    order_id: data.createdOrder?.id ?? 0,
    public_key: config.public_key,
    user_secret_key: data.systemUser.secret_user_key,
  }).then(() => {
    data.endGetOrder();
    loadings.value.cancel = false;
  });
};

const confirmOrder = () => {
  if (loadings.value.confirm) return;
  loadings.value.confirm = true;

  fetchSMS('confirmOrder', {
    user_id: data.user.id,
    order_id: data.createdOrder?.id ?? 0,
    public_key: config.public_key,
    user_secret_key: data.systemUser.secret_user_key,
  }).then(() => {
    data.endGetOrder();
    data.endCounter();
    loadings.value.confirm = false;
  });
};

const updateShow = () => {
  if (orderEnd.value) return;

  data.startCounter();
  data.startGetOrder();
};

const updateHide = () => {
  data.endCounter();
  data.endGetOrder();

  fetchSMS('orders', {
    user_id: data.user.id,
    user_secret_key: data.systemUser.secret_user_key,
    public_key: config.public_key,
  });
};

const ImageCountry = () => CountryImage(data.createdOrder?.country);
const ImageService = () => ServiceImage(data.createdOrder?.service);

const order = computed(() => [
  {
    label: lang.value.order_time,
    value: time.value,
    image: '',
  },
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
    value: ((data.createdOrder?.cost ?? 0) / 100).toFixed(2) + ' ₽',
    image: '',
  },
  {
    label: lang.value.order_status,
    value: lang.value.order_status_text[data.createdOrder?.status ?? 8],
    image: '',
  },
]);
</script>

<style lang="scss" scoped>
.order-dashed {
  position: absolute;
  bottom: 5px;
  width: 100%;
  border-bottom: 2px $grey-5 dotted;
}
</style>
