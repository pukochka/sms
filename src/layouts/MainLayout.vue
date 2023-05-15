<template>
  <q-layout view="lHh lpR lFf">
    <q-inner-loading
      :showing="states.loadings.init || states.loadings.error"
      transition-show="none"
      transition-hide="fade"
      class="z-max bg-page">
      <q-spinner-facebook size="80px" color="primary" />
    </q-inner-loading>

    <q-header class="bg-page" bordered>
      <q-toolbar>
        <q-btn
          flat
          no-caps
          class="rounded-10 q-mr-sm"
          icon="menu"
          color="primary"
          @click="states.toggleDrawer">
          <q-badge
            v-if="data.activeOrders.length > 0"
            align="middle"
            rounded
            floating
            color="orange"
            :label="data.activeOrders.length"
            text-color="white" />
        </q-btn>

        <q-tab-panels
          v-model="states.tab"
          animated
          class="col-grow bg-page"
          transition-next="slide-up"
          transition-prev="slide-down">
          <q-tab-panel
            v-for="(title, index) in titles"
            :name="title.name"
            :key="index"
            class="q-pa-sm">
            <div class="text-h6 text-weight-bold text-center text-color">
              {{ title.label }}
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="states.drawer" side="left" behavior="mobile" bordered>
      <drawer-template></drawer-template>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <create-order-button></create-order-button>

    <q-footer class="bg-page row no-wrap" bordered>
      <q-btn
        v-for="(tab, index) in tabs"
        :key="index"
        flat
        no-caps
        square
        stack
        color="primary"
        class="col text-weight-bold"
        :icon="tab.icon"
        :label="tab.label"
        @click="tab.action" />
    </q-footer>

    <OrderView />

    <OrderTemplate />
  </q-layout>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue';
import { useLang } from 'src/utils/use/useLang';

import { useStatesStore } from 'stores/states/statesStore';
import { useDataStore } from 'stores/data/dataStore';

import OrderView from 'components/order/OrderView.vue';
import OrderTemplate from 'components/order/OrderTemplate.vue';
import DrawerTemplate from 'layouts/DrawerTemplate.vue';
import CreateOrderButton from 'components/other/CreateOrderButton.vue';

import {
  mdiMessage,
  mdiAnimation,
  mdiLabelPercent,
} from '@quasar/extras/mdi-v7';

const states = useStatesStore();
const data = useDataStore();
const lang = computed(() => useLang());

const canPay = computed(() => data.canPay);

watch(canPay, (val) => {
  if (!val) data.endCountries();
});

const country = computed(() => data.selectedCountry ?? {});

watch(states.dialogs, (val) => {
  if (val.order) data.endCountries();
  else if (val.orders_view) data.endCountries();
  else if (!val.order && !val.orders_view && canPay.value) {
    data.startCountries();
  }
});

const clickOutside = (e: any) => {
  if (
    Array.from(e?.target?.offsetParent?.classList ?? [])?.indexOf(
      'country-item'
    ) === -1 &&
    Array.from(e?.target?.classList)?.indexOf('country-item') === -1
  ) {
    data.selectedCountryValue = null;
  }
};

watch(country, (val) => {
  if (val.toString() !== '{}')
    document.addEventListener('click', clickOutside, false);
  else document.removeEventListener('click', clickOutside, false);
});

const tabs = computed(() => [
  {
    label: lang.value.service,
    icon: mdiMessage,
    action: () => states.toggleTab('service'),
  },
  {
    label: lang.value.multiService,
    icon: mdiAnimation,
    action: () => states.toggleTab('multi-service'),
  },
  // {
  //   label: lang.value.rent,
  //   icon: mdiLabelPercent,
  //   action: () => states.toggleTab('rent'),
  // },
]);

const titles = computed(() => [
  {
    name: 'service',
    label: lang.value.service,
  },
  {
    name: 'multi-service',
    label: lang.value.multiService,
  },
  // {
  //   name: 'rent',
  //   label: lang.value.rent,
  // },
]);
</script>
