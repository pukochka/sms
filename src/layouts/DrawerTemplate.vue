<template>
  <div class="q-gutter-y-sm q-py-md">
    <div class="row justify-center q-pt-lg">
      <div :class="[main.titleClasses]">
        {{ data.systemUser?.user.first_name }}
        {{ data.systemUser?.user.last_name }}
      </div>
    </div>

    <q-list :dark="main.isDark" padding separator>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" name="account_balance_wallet"></q-icon>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ main.language.balance }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-item-label>{{ money }} ₽</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple @click="openOrdersView">
        <q-item-section avatar>
          <q-icon color="primary" name="list_alt"></q-icon>
        </q-item-section>

        <q-item-section>
          <q-item-label class="row q-gutter-x-sm items-center">
            <div class="">{{ main.language.activations }}</div>
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-item-label
            class="q-px-sm rounded-10"
            :class="[
              main.textColor +
                (data.active_order.length > 0 ? ' bg-orange-14' : ''),
            ]">
            {{ data.orders.length }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-expansion-item>
        <template v-slot:header>
          <q-item-section avatar>
            <q-icon color="primary" name="language"></q-icon>
          </q-item-section>

          <q-item-section>
            {{ main.language.change_language }}
          </q-item-section>

          <q-item-section side class="text-uppercase">
            {{ data.user?.language }}
          </q-item-section>
        </template>

        <q-list separator>
          <q-item clickable v-ripple @click="setLanguage('ru')">
            <q-item-section avatar>
              <q-avatar
                size="24px"
                color="primary"
                v-if="data.user?.language === 'ru'">
                <q-icon name="check" color="white" size="20px" />
              </q-avatar>
            </q-item-section>

            <q-item-section class="text-center"> Русский </q-item-section>

            <q-item-section avatar>
              <div class="icon-sms">
                <ImageCountryRUS />
              </div>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="setLanguage('eng')">
            <q-item-section avatar>
              <q-avatar
                size="24px"
                color="primary"
                v-if="data.user?.language === 'eng'">
                <q-icon name="check" color="white" size="20px" />
              </q-avatar>
            </q-item-section>

            <q-item-section class="text-center"> English </q-item-section>

            <q-item-section avatar>
              <div class="icon-sms">
                <ImageCountryENG />
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from 'stores/main/mainStore';
import { useDataStore } from 'stores/data/dataStore';

import { fetchSMS } from 'boot/queries';
import { useStatesStore } from 'stores/states/statesStore';

import { CountryImage } from 'src/utils/images';
import { computed } from 'vue';

const main = useMainStore();
const data = useDataStore();
const states = useStatesStore();

const setLanguage = (lang: 'ru' | 'eng') => {
  fetchSMS('setLanguage', {
    user_id: data.user?.id ?? 0,
    language: lang,
    user_secret_key: data.systemUser?.secret_user_key ?? '',
  });
};

const money = computed(() => ((data.systemUser?.money ?? 0) / 100).toFixed(2));

const ImageCountryRUS = () => CountryImage('0');
const ImageCountryENG = () => CountryImage('12');

const openOrdersView = () => {
  states.toggleDrawer();

  states.openDialog('orders_view');
};
</script>

<style lang="scss" scoped></style>
