<template>
  <q-dialog
    v-model="states.dialogs.order"
    no-shake
    persistent
    position="bottom"
    transition-duration="150">
    <q-card style="width: 100%" class="q-gutter-y-md q-px-md q-pb-md">
      <div class="row items-center justify-between">
        <div :class="[main.titleClasses]" class="text-center">
          {{ main.language.order }} №{{ data.createdOrder?.id }}
        </div>

        <q-btn
          unelevated
          class="rounded-10"
          size="md"
          color="primary"
          icon="close"
          v-haptic
          @click="closeOrder"
          v-close-popup />
      </div>

      <div>
        <div class="row q-gutter-y-sm">
          <div
            class="row col-12 items-end"
            v-for="(item, index) in order"
            :key="index">
            <div :class="[main.orderTitleClass]">{{ item.label }}</div>

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
        <div :class="[main.orderTitleClass]">
          {{ main.language.order_phone }}
        </div>

        <q-list bordered separator class="rounded-10 overflow-hidden">
          <q-item
            style="max-height: 35px !important; min-height: 35px !important"
            class="relative-position"
            :class="[main.itemBackgroundClass]">
            <q-item-section>
              <q-item-label :class="[main.titleClasses]" class="text-center">
                {{ data.createdOrder?.phone }}
              </q-item-label>
            </q-item-section>

            <CopyButton :text="data.createdOrder?.phone" />
          </q-item>
        </q-list>
      </div>

      <div class="">
        <div :class="[main.orderTitleClass]" v-if="codes.length > 0">
          {{ main.language.order_codes }}
        </div>

        <ChooseItem
          v-if="codes.length > 0"
          search=""
          type=""
          stable-height
          :el-height="36"
          :hidden-buttons="true"
          :current-items="codes"
          :visible-items="2" />

        <div
          v-if="
            codes.length === 0 && status !== 6 && status !== 9 && status !== 8
          "
          class="text-center rounded-10 q-pa-sm"
          :class="[main.itemBackgroundClass]">
          <q-icon name="info" color="primary" size="32px" />

          <div :class="[main.textColor]">
            {{ main.language.order_notify_wait }}
          </div>
        </div>
      </div>

      <div
        :class="[main.titleClasses]"
        class="text-center q-pa-md"
        v-if="orderEnd">
        {{ main.language.order_status_text[data.createdOrder?.status ?? 8] }}
      </div>

      <div v-if="orderEnd === false">
        <div class="text-center text-caption" :class="[main.textColor]">
          {{ main.language.order_remained }} {{ data.timeToEnd.full }}
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
          v-haptic
          class="rounded-10 col-12"
          size="md"
          color="primary"
          :label="main.language.button_repeat"
          :loading="loadings.second"
          v-if="codes.length > 0 && status !== 3 && status !== 1"
          @click="secondSms" />

        <q-btn
          unelevated
          no-caps
          v-haptic
          class="rounded-10 col-12"
          size="md"
          color="primary"
          v-if="codes.length > 0"
          :label="main.language.button_confirm"
          :loading="loadings.confirm"
          @click="confirmOrder" />

        <q-btn
          v-haptic
          unelevated
          no-caps
          class="rounded-10 col-12"
          size="md"
          color="red"
          v-if="codes.length === 0"
          :label="main.language.button_cancel"
          :loading="loadings.cancel"
          @click="cancelOrder" />
      </div>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import config from 'src/config';
import { computed, ref, onUpdated } from 'vue';
import { date } from 'quasar';

import { useStatesStore } from 'stores/states/statesStore';
import { useMainStore } from 'stores/main/mainStore';
import { useDataStore } from 'stores/data/dataStore';

import { CountryImage, ServiceImage } from 'src/utils/images';
import { toTimeEnd } from 'src/utils/time';
import { fetchSMS } from 'boot/queries';

import ChooseItem from 'components/stages/ChooseItem.vue';
import CopyButton from 'components/other/CopyButton.vue';

const states = useStatesStore();
const main = useMainStore();
const data = useDataStore();

const loadings = ref({
  second: false,
  confirm: false,
  cancel: false,
  report: false,
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

const country = computed(
  () =>
    data.countriesValue.find((country) => country.id === data.createdOrder?.country)
      ?.title ?? data.createdOrder?.country
);

const service = computed(
  () =>
    data.servicesValue.find(
      (service) => service.name === data.createdOrder?.service
    )?.longName ?? data.createdOrder?.service
);

const orderEnd = computed(
  () =>
    status.value === 8 ||
    status.value === 9 ||
    status.value === 6 ||
    status.value === 0 ||
    status.value === 10 ||
    toTimeEnd(data.createdOrder?.time) >= 1
);

const secondSms = () => {
  if (loadings.value.second) return;
  loadings.value.second = true;

  fetchSMS('secondSms', {
    user_id: data.user?.id ?? 0,
    order_id: data.createdOrder?.id ?? 0,
    public_key: config.public_key,
    user_secret_key: data.systemUser?.secret_user_key ?? '',
  }).then(() => {
    loadings.value.second = false;
  });
};

const cancelOrder = () => {
  if (loadings.value.cancel) return;
  loadings.value.cancel = true;

  fetchSMS('closeOrder', {
    user_id: data.user?.id ?? 0,
    order_id: data.createdOrder?.id ?? 0,
    public_key: config.public_key,
    user_secret_key: data.systemUserValue?.secret_user_key ?? '',
  }).then(() => {
    data.endGetOrder();
    loadings.value.cancel = false;
  });
};

const confirmOrder = () => {
  if (loadings.value.confirm) return;
  loadings.value.confirm = true;

  fetchSMS('confirmOrder', {
    user_id: data.user?.id ?? 0,
    order_id: data.createdOrder?.id ?? 0,
    public_key: config.public_key,
    user_secret_key: data.systemUser?.secret_user_key ?? '',
  }).then(() => {
    data.endGetOrder();
    data.endCounter();
    loadings.value.confirm = false;
  });
};

// const reportOrder = () => {
//   if (loadings.value.report) return;
//   loadings.value.report = true;
//
//   fetchSMS('reportOrderSms', {
//     user_id: data.user?.id ?? 0,
//     order_id: data.createdOrder?.id ?? 0,
//     public_key: config.public_key,
//     user_secret_key: data.systemUser?.secret_user_key ?? '',
//   }).then(() => {
//     loadings.value.report = false;
//   });
// };

const ImageCountry = () => CountryImage(data.createdOrder?.country);
const ImageService = () => ServiceImage(data.createdOrder?.service);

const closeOrder = () => {
  data.endGetOrder();

  fetchSMS('orders', {
    user_id: data.user?.id ?? 0,
    user_secret_key: data.systemUser?.secret_user_key ?? '',
    public_key: config.public_key,
  });
};

onUpdated(() => {
  if (orderEnd.value || states.dialogs.order === false) {
    data.endCounter();
    data.endGetOrder();
  }
});

const order = computed(() => [
  {
    label: main.language.order_time,
    value: time.value,
    image: '',
  },
  {
    label: main.language.order_service,
    value: service.value,
    image: 'service',
  },
  {
    label: main.language.order_country,
    value: country.value,
    image: 'country',
  },
  {
    label: main.language.order_price,
    value: data.createdOrder?.cost + ' ₽',
    image: '',
  },
  {
    label: main.language.order_status,
    value: main.language.order_status_text[data.createdOrder?.status ?? 8],
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
