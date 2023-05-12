<template>
  <q-item
    clickable
    @click="data.selectCountry(props.item)"
    style="height: 52px"
    class="relative-position country-item">
    <q-item-section avatar>
      <div class="icon-sms">
        <Image />
      </div>
    </q-item-section>

    <q-item-section>
      <q-item-label :class="[main.textClasses]">
        {{ title }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-item-label
        class="text-center text-weight-bold"
        :class="[main.textColor]">
        {{ item.cost.toFixed(2) }} ₽
      </q-item-label>

      <q-item-label class="text-primary text-weight-bold" caption>
        {{ item.count }} {{ main.language.items }}
      </q-item-label>
    </q-item-section>

    <transition name="button">
      <q-btn
        v-haptic
        class="absolute-right border-left-10 q-px-lg country-item"
        v-if="selected"
        unelevated
        square
        size="md"
        color="primary"
        :label="main.language.buy"
        :loading="loading"
        @click="createOrder" />
    </transition>
  </q-item>
</template>

<script lang="ts" setup>
import config from 'src/config';
import namesCountry from 'src/utils/names/contries';

import { withDefaults, computed, ref } from 'vue';
import { defaultCountryItem } from 'stores/defaults';

import { useDataStore } from 'stores/data/dataStore';
import { useMainStore } from 'stores/main/mainStore';
import { CountryImage } from 'src/utils/images';

import { fetchSMS } from 'boot/queries';

const props = withDefaults(defineProps<Props>(), {
  item: () => defaultCountryItem,
});

const data = useDataStore();
const main = useMainStore();

const loading = ref(false);

const title = computed(() =>
  data.userValue?.language === 'ru'
    ? namesCountry[props.item?.id]
    : props.item?.title_eng
);

const selected = computed(() => data.selectedCountry?.id === props.item.id);

const Image = () => CountryImage(props.item?.id);

const createOrder = () => {
  loading.value = true;

  fetchSMS('createOrder', {
    country: props.item.id,
    user_id: data.user?.id ?? 0,
    public_key: config.public_key,
    user_secret_key: data.systemUserValue?.secret_user_key ?? '',
  }).then(() => {
    loading.value = false;

    data.search.countries = '';
    data.search.services = '';
  });
};

interface Props {
  item?: SMSCountry;
}
</script>

<style lang="scss" scoped></style>
