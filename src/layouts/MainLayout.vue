<template>
  <q-layout view="lHh lpR lFf">
    <q-header bordered :class="[main.backgroundClass]">
      <q-toolbar>
        <q-btn
          flat
          color="primary"
          no-caps
          round
          icon="menu"
          @click="states.toggleDrawer">
          <q-badge
            v-if="data.active_order.length > 0"
            floating
            rounded
            color="orange"
            text-color="black" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="states.drawer" side="left" behavior="mobile" bordered>
      <drawer-template></drawer-template>
    </q-drawer>

    <q-page-container :class="[main.backgroundClass]">
      <router-view />
    </q-page-container>

    <OrderView />

    <OrderTemplate />

    <NotifyMessage />

    <InitLoading />
  </q-layout>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue';
import { useMainStore } from 'stores/main/mainStore';
import { useStatesStore } from 'stores/states/statesStore';
import { useDataStore } from 'stores/data/dataStore';

import OrderView from 'components/order/OrderView.vue';
import OrderTemplate from 'components/order/OrderTemplate.vue';
import NotifyMessage from 'components/dialogs/NotifyMessage.vue';
import DrawerTemplate from 'layouts/DrawerTemplate.vue';
import InitLoading from 'components/other/InitLoading.vue';

const main = useMainStore();
const states = useStatesStore();
const data = useDataStore();

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
</script>
