<template>
  <q-dialog
    v-model="states.dialogs.rent_build"
    transition-duration="150"
    position="bottom"
    @hide="update">
    <q-card style="width: 100%" class="q-gutter-y-md q-px-md q-pb-md">
      <div class="row justify-between items-center no-wrap">
        <div class="text-h6 text-weight-bold">{{ lang.rent }}</div>

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

            <div v-html="item.value"></div>
          </div>
        </div>
      </div>

      <div>
        <div class="text-center q-pb-sm">{{ lang.rent_period }}</div>

        <q-select
          outlined
          dense
          behavior="dialog"
          class="sms-input"
          transition-show="slide-down"
          transition-hide="slide-up"
          :loading="loading.price"
          v-model="selected"
          :options="timeValues"
          @update:model-value="updateValue" />
      </div>

      <div class="row q-my-sm q-gutter-y-sm">
        <q-btn
          unelevated
          no-caps
          class="rounded-10 col-12"
          size="md"
          color="primary"
          :disable="loading.price"
          :loading="loading.create"
          :label="lang.create_order"
          @click="createOrder" />
      </div>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import config from 'src/config';
import { computed, ref } from 'vue';

import { useLang } from 'src/utils/use/useLang';
import { useStatesStore } from 'stores/states/statesStore';
import { useDataStore } from 'stores/data/dataStore';

import { CountryImage, ServiceImage } from 'src/utils/images';

import { fetchSMS } from 'boot/queries';
import { findCountryName, findServiceName } from 'src/utils/names/find';

const states = useStatesStore();
const data = useDataStore();
const lang = computed(() => useLang());

const selected = ref({ value: 4, label: lang.value.rentTime['4'] });
const loading = ref({
  create: false,
  price: false,
});

// Полифилы)
const price = computed(() =>
  data.rentPrice === -1
    ? data?.services.selectedRent?.cost.comma()
    : data.rentPrice.comma()
);

const timeValues = computed(() =>
  Object.entries(lang.value.rentTime).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  })
);

const country = computed(() =>
  findCountryName(data.countries.selectedRent?.id)
);
const service = computed(() =>
  findServiceName(data.services.selectedRent?.name)
);

const createOrder = () => {
  loading.value.create = true;

  fetchSMS('createRentOrder', {
    public_key: config.public_key,
    user_secret_key: data.systemUser.secret_user_key,
    user_id: data.user.id,
    service: data.services.selectedRent?.name ?? '',
    country: data.countries.selectedRent?.id ?? '',
    time: selected.value.value ?? 4,
  }).then(() => {
    loading.value.create = false;
    states.closeDialog('rent_build');
  });
};

const ImageCountry = () => CountryImage(data.countries?.selectedRent?.id);
const ImageService = () => ServiceImage(data?.services.selectedRent?.name);

const update = () => {
  data.rentPrice = -1;
  selected.value = { label: lang.value.rentTime['4'], value: 4 };
};

const updateValue = (value: { value: number }) => {
  loading.value.price = true;

  fetchSMS('getTimePrice', {
    public_key: config.public_key,
    user_secret_key: data.systemUser.secret_user_key,
    service: data.services.selectedRent?.name ?? '',
    country: data.countries.selectedRent?.id ?? '',
    time: value?.value ?? 4,
  }).then(() => {
    loading.value.price = false;
  });
};

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
    value: price.value,
    image: '',
  },
]);
</script>

<style lang="scss" scoped></style>
