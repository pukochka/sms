<template>
  <q-dialog
    v-model="states.dialogs.rent_continue"
    transition-duration="150"
    position="bottom" @hide="selected = 4">
    <q-card style="width: 100%" class="q-gutter-y-md q-px-md q-pb-md">
      <div class="row justify-between items-center no-wrap">
        <div class="text-h6 text-weight-bold">{{ lang.rent_continue }}</div>

        <q-btn
          unelevated
          class="rounded-10"
          size="md"
          color="primary"
          icon="close"
          v-close-popup />
      </div>

      <div class="row q-gutter-y-sm">
        <div class="row col-12 items-end">
          <div>{{ lang.prolong_price }}</div>

          <div class="col-grow q-mx-sm relative-position">
            <div class="order-dashed"></div>
          </div>

          <div class="row items-end q-gutter-x-sm">
            <div class="">{{ price }}</div>
          </div>
        </div>
      </div>

      <div>
        <div class="text-center q-pb-sm">{{ lang.rent_continue_prolong }}</div>

        <q-tabs
          dense
          v-model="selected"
          class="select-rent bg-primary rounded-10 overflow-hidden text-white">
          <q-tab
            v-for="item in time"
            :key="item"
            :name="item"
            :label="item"
            class="col rounded-10" />
        </q-tabs>
      </div>

      <div class="row q-my-sm q-gutter-y-sm">
        <q-btn
          unelevated
          no-caps
          class="rounded-10 col-12"
          size="md"
          color="primary"
          :loading="loading"
          :label="lang.prolong_rent"
          @click="continueRent" />
      </div>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

import { useLang } from 'src/utils/use/useLang';
import { useStatesStore } from 'stores/states/statesStore';
import { fetchSMS } from 'boot/queries';
import config from 'src/config';
import { useDataStore } from 'stores/data/dataStore';

const states = useStatesStore();
const data = useDataStore();
const lang = computed(() => useLang());

const selected = ref(4);
const loading = ref(false);

const time = [4, 12, 24, 48, 72];

const price = computed(() => data.prolongPrice.comma());

const continueRent = () => {
  loading.value = true;

  fetchSMS('continueRent', {
    public_key: config.public_key,
    user_secret_key: data.systemUser.secret_user_key,
    user_id: data.user.id,
    time: selected.value,
    order_id: data.createdRent?.id ?? 0,
  }).then(() => {
    loading.value = false;
    states.closeDialog('rent_continue');
  });
};
</script>

<style lang="scss" scoped></style>
