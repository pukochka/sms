<template>
  <ItemsLoading v-model="states.loadings.services" />

  <div class="q-gutter-y-sm" v-if="data.selectedService === null">
    <q-input
      dense
      borderless
      class="rounded-10 q-px-md col-grow bg-item"
      :placeholder="lang.search"
      v-model="data.search.services">
      <template v-slot:append>
        <q-icon v-haptic name="search" v-if="data.search.services === ''" />

        <q-icon
          v-haptic
          v-else
          name="close"
          @click.stop.prevent="data.search.services = ''"
          class="cursor-pointer" />
      </template>
    </q-input>

    <div class="rounded-10">
      <ChooseItem
        :type="'service'"
        :search="data.search.services"
        :current-items="data.services" />
    </div>
  </div>

  <div v-else class="row">
    <ServiceSelected />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useLang } from 'src/utils/use/useLang';

import { useDataStore } from 'stores/data/dataStore';
import { useStatesStore } from 'stores/states/statesStore';

import ChooseItem from 'components/stages/ChooseItem.vue';
import ItemsLoading from 'components/other/ItemsLoading.vue';
import ServiceSelected from 'components/selected/ServiceSelected.vue';

const data = useDataStore();
const states = useStatesStore();
const lang = computed(() => useLang());
</script>

<style lang="scss" scoped>
.overflow-y-scroll {
  overflow-y: scroll;
}
</style>
