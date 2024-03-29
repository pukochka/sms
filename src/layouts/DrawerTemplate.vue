<template>
  <div class="q-gutter-y-sm q-py-md">
    <div class="text-center text-h6 text-weight-bold q-py-md">
      {{ data.systemUser.user.first_name }}
      {{ data.systemUser.user.last_name }}
    </div>

    <q-list separator bordered class="rounded-10 overflow-hidden q-ma-sm">
      <q-item
        clickable
        v-ripple
        v-for="(item, index) in content"
        :key="index"
        :id="item.menu"
        @click="item.action"
        class="q-py-xs">
        <q-item-section avatar>
          <q-icon size="28px" color="primary" :name="item.icon"></q-icon>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ item.label }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-item-label :class="[item.class]">{{ item.value }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <div class="text-center text-primary q-pa-sm">
      <!--      <q-btn-->
      <!--        unelevated-->
      <!--        size="md"-->
      <!--        class="col rounded-10"-->
      <!--        padding="10px"-->
      <!--        color="primary"-->
      <!--        label="Пополнить баланс"-->
      <!--        @click="openReplenish" />-->
      {{ hint }}
    </div>

    <q-menu fit target="#change-lang" class="rounded-10 no-shadow">
      <q-list separator bordered class="rounded-10">
        <q-item clickable v-ripple @click="setLanguage('ru')">
          <q-item-section avatar>
            <q-avatar
              size="24px"
              color="primary"
              v-if="data.user.language === 'ru'">
              <q-icon name="check" color="white" size="20px" />
            </q-avatar>
          </q-item-section>

          <q-item-section class="text-center"> Русский </q-item-section>

          <q-item-section avatar>
            <ImageCountryRUS />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="setLanguage('eng')">
          <q-item-section avatar>
            <q-avatar
              size="24px"
              color="primary"
              v-if="data.user.language === 'eng'">
              <q-icon name="check" color="white" size="20px" />
            </q-avatar>
          </q-item-section>

          <q-item-section class="text-center"> English </q-item-section>

          <q-item-section avatar>
            <ImageCountryENG />
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useLang } from 'src/utils/use/useLang';

import { useDataStore } from 'stores/data/dataStore';
import { useStatesStore } from 'stores/states/statesStore';

import { CountryImage } from 'src/utils/images';

import { fetchSMS } from 'boot/queries';
import {
  mdiOrderBoolAscending,
  mdiWallet,
  mdiLabelPercent,
  mdiStar,
} from '@quasar/extras/mdi-v7';

const data = useDataStore();
const states = useStatesStore();
const lang = computed(() => useLang());

const money = computed(() => (data.systemUser?.money ?? 0).comma());
const languageText = computed(() =>
  data.userValue.language === 'ru' ? 'Русский' : 'English'
);

const hint = computed(() =>
  data.activeRents.length && data.activeOrders.length
    ? lang.value.active_rent_activations
    : data.activeOrders.length
    ? lang.value.active_orders_activations
    : data.activeRents.length
    ? lang.value.active_orders_rent
    : ''
);

const setLanguage = (lang: 'ru' | 'eng') => {
  fetchSMS('setLanguage', {
    user_id: data.user?.id ?? 0,
    user_secret_key: data.systemUser?.secret_user_key ?? '',
    language: lang,
  });
};

const ImageCountryRUS = () => CountryImage('0');
const ImageCountryENG = () => CountryImage('12');

const openOrders = () => {
  states.toggleDrawer();

  states.openDialog('orders_view');
};

const openRent = () => {
  states.toggleDrawer();

  states.openDialog('rent');
};

const openFavorites = () => {
  states.toggleDrawer();

  states.toggleFavorites();
};

const openReplenish = () => {
  states.toggleDrawer();

  states.openDialog('replenish');
};

const content = computed((): Content[] => [
  {
    label: lang.value.balance,
    icon: mdiWallet,
    value: money.value,
    menu: 'replenish',
  },
  {
    label: lang.value.activations,
    icon: mdiOrderBoolAscending,
    value: data.ordersValue.length,
    class: data.activeOrders.length > 0 ? ' bg-orange rounded-10 q-pa-xs' : '',
    action: openOrders,
  },
  {
    label: lang.value.rents,
    icon: mdiLabelPercent,
    value: data.rentsValue.length,
    class: data.activeRents.length > 0 ? ' bg-orange rounded-10 q-pa-xs' : '',
    action: openRent,
  },
  {
    label: lang.value.favorites,
    icon: mdiStar,
    value: data.favorites?.length,
    class: data.activeRents.length > 0 ? ' bg-orange rounded-10 q-pa-xs' : '',
    action: openFavorites,
  },
  {
    label: lang.value.change_language,
    icon: 'language',
    value: languageText.value,
    menu: 'change-lang',
  },
]);

interface Content {
  label: string;
  icon: string;
  value: string | number;
  action?: () => void;
  class?: string;
  menu?: string;
}
</script>

<style lang="scss" scoped></style>
