<template>
  <div class="q-gutter-y-sm" v-if="data.selectedService === null">
    <q-input
      dense
      borderless
      class="rounded-10 q-px-md col-grow bg-item"
      :placeholder="lang.search"
      v-model="data.search.services">
      <template v-slot:append>
        <q-icon name="search" v-if="data.search.services === ''" />

        <q-icon
          v-else
          name="close"
          @click.stop.prevent="data.search.services = ''"
          class="cursor-pointer" />
      </template>
    </q-input>

    <div class="rounded-10">
      <choose-item
        :search="data.search.services"
        :current-items="data.services">
        <template v-slot="{ item }">
          <service-item :item="item"> </service-item>
        </template>
      </choose-item>
    </div>
  </div>

  <service-selected v-else />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useLang } from 'src/utils/use/useLang';

import { useDataStore } from 'stores/data/dataStore';
import { useStatesStore } from 'stores/states/statesStore';

import ChooseItem from 'components/stages/ChooseItem.vue';
import ServiceSelected from 'components/selected/ServiceSelected.vue';
import ServiceItem from 'components/items/ServiceItem.vue';

const data = useDataStore();
const states = useStatesStore();
const lang = computed(() => useLang());
</script>

<style lang="scss" scoped>
.overflow-y-scroll {
  overflow-y: scroll;
}
</style>
