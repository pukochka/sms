<template>
  <div class="rounded-10 relative-position overflow-hidden">
    <div style="height: 364px" v-if="currentItems.length === 0 && searching">
      <div
        class="absolute-full q-pa-md column flex-center text-center rounded-10 q-gutter-y-sm"
        :class="[main.itemBackgroundClass]">
        <q-icon color="primary" name="search" size="32px" />

        <div :class="[main.textClasses]">{{ NotFoundText }}</div>
      </div>
    </div>

    <q-tab-panels
      animated
      class="bg-transparent"
      v-model="panels"
      :transition-duration="100"
      :transition-next="transition"
      :transition-prev="transition"
      :style="{ height: height }">
      <q-tab-panel name="0" class="q-pa-none">
        <q-list class="rounded-10 overflow-hidden" bordered separator>
          <component
            :is="RenderItem"
            v-for="item of items"
            :key="item.name"
            :item="item" />
        </q-list>
      </q-tab-panel>
      <q-tab-panel name="1" class="q-pa-none">
        <q-list class="rounded-10 overflow-hidden" bordered separator>
          <component
            :is="RenderItem"
            v-for="item of items"
            :key="item.name"
            :item="item" />
        </q-list>
      </q-tab-panel>
    </q-tab-panels>
  </div>

  <div
    class="row items-center relative-position rounded-10 overflow-hidden non-selectable q-mt-sm"
    style="height: 36px"
    v-if="hiddenButtons === false || pageCount > 1">
    <q-btn
      flat
      no-caps
      no-wrap
      class="absolute-left"
      size="md"
      color="primary"
      padding="4px 8px"
      icon="navigate_before"
      v-haptic
      v-if="currentStartIndex > 0"
      :label="labelPrev"
      @click="prev" />

    <div
      class="absolute-center fz-18 text-weight-bold"
      :class="[main.textColor]"
      v-if="pageCount > 1">
      {{ currentPage }} {{ main.language.from }} {{ pageCount }}
    </div>

    <q-btn
      flat
      no-caps
      no-wrap
      class="absolute-right"
      size="md"
      color="primary"
      padding="4px 8px"
      icon-right="navigate_next"
      v-haptic
      v-if="
        items.length >= visibleItems &&
        currentItems.length >= currentEndIndex + 1
      "
      :label="labelNext"
      @click="next" />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch, withDefaults } from 'vue';

import { useMainStore } from 'stores/main/mainStore';
import { useQuasar } from 'quasar';

import ServiceItem from '../items/ServiceItem.vue';
import OperatorItem from '../items/OperatorItem.vue';
import CountryItem from '../items/CountryItem.vue';
import OrderItem from '../items/OrderItem.vue';
import OrderCode from '../order/OrderCode.vue';

const main = useMainStore();
const quasar = useQuasar();

const props = withDefaults(defineProps<Props>(), {
  currentItems: () => [],
  search: () => '',
  type: () => '',
  visibleItems: () => 7,
  hiddenButtons: () => false,
  elHeight: () => 52,
  stableHeight: () => false,
  searching: () => true,
});

const panels = ref('0');
const transition = ref('slide-left');

const startIndex = ref(0);
const endIndex = ref(props.visibleItems);

const searchStartIndex = ref(0);
const searchEndIndex = ref(props.visibleItems);

const currentPage = ref(1);

const height = computed(() =>
  items.value.length <= props.visibleItems && props.stableHeight === false
    ? items.value.length * props.elHeight + 2 + 'px'
    : props.visibleItems * props.elHeight + 2 + 'px'
);

const labelNext = computed(() =>
  quasar.screen.width < 350 ? '' : main.language.next
);
const labelPrev = computed(() =>
  quasar.screen.width < 350 ? '' : main.language.prev
);

const pageCount = computed(() =>
  Math.ceil(props.currentItems.length / props.visibleItems)
);

const currentSearch = computed(() => props.search === '');

const currentStartIndex = computed(() =>
  currentSearch.value ? startIndex.value : searchStartIndex.value
);

const currentEndIndex = computed(() =>
  currentSearch.value ? endIndex.value : searchEndIndex.value
);

const items = computed(() =>
  props.currentItems.filter(
    (
      _: SMSCountry | SMSOperator | SMSServices | SMSOrder | string,
      index: number
    ) => index >= currentStartIndex.value && index < currentEndIndex.value
  )
);

const RenderItem = computed(() => {
  if (props.type === 'service') return ServiceItem;
  else if (props.type === 'country') return CountryItem;
  else if (props.type === 'operator') return OperatorItem;
  else if (props.type === 'order') return OrderItem;
  else return OrderCode;
});

const NotFoundText = computed(() => {
  if (props.type === 'service') return main.language.search_service_not_found;
  else if (props.type === 'country')
    return main.language.search_country_not_found;
  else if (props.type === 'operator')
    return main.language.search_operator_not_found;
  else return '';
});

watch(currentSearch, (val) => {
  if (val) {
    searchEndIndex.value = props.visibleItems;
    searchStartIndex.value = 0;
  } else {
    currentPage.value = currentEndIndex.value / props.visibleItems;
  }
});

watch(currentEndIndex, (val) => {
  currentPage.value = val / props.visibleItems;
});

const next = () => {
  if (currentSearch.value) {
    startIndex.value += props.visibleItems;
    endIndex.value += props.visibleItems;
  } else {
    searchStartIndex.value += props.visibleItems;
    searchEndIndex.value += props.visibleItems;
  }

  slide('next');
};
const prev = () => {
  if (currentSearch.value) {
    startIndex.value -= props.visibleItems;
    endIndex.value -= props.visibleItems;
  } else {
    searchStartIndex.value -= props.visibleItems;
    searchEndIndex.value -= props.visibleItems;
  }

  slide('prev');
};

const slide = (side: 'prev' | 'next') => {
  transition.value = side === 'prev' ? 'slide-right' : 'slide-left';

  panels.value =
    panels.value === '0' ? (panels.value = '1') : (panels.value = '0');
};

interface Props {
  currentItems: (SMSServices | SMSOperator | SMSCountry | SMSOrder | string)[];
  search: string;
  type: 'country' | 'service' | 'operator' | '' | 'order';
  visibleItems?: number;
  hiddenButtons?: boolean;
  elHeight?: number;
  stableHeight?: boolean;
  searching?: boolean;
}
</script>

<style lang="scss" scoped></style>
