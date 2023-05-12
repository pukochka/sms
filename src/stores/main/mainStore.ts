import { defineStore } from 'pinia';
import { markRaw } from 'vue';

import config from 'src/config';

import { useLanguage } from 'src/utils/useLanguage';

import CountryChoose from 'components/stages/CountryChoose.vue';
import ServiceChoose from 'components/stages/ServiceChoose.vue';

import { MainStore, Stages } from 'stores/main/models';

export const useMainStore = defineStore('main', {
  state: () =>
    ({
      stagesValue: [
        {
          component: markRaw(ServiceChoose),
          get label() {
            return useLanguage().select_service;
          },
          id: 0,
        },

        {
          component: markRaw(CountryChoose),
          get label() {
            return useLanguage().select_country;
          },
          id: 1,
        },

        // {
        //   component: markRaw(OperatorChoose),
        //   get label() {
        //     return useLanguage().select_operator;
        //   },
        //   id: 2,
        // },
      ],
    } as MainStore),
  getters: {
    isDark: (): boolean => config.is_dark,

    language: () => useLanguage(),

    textColor: () => (config.is_dark ? ' text-white' : ' text-black'),

    titleColor: () => (config.is_dark ? ' text-grey-1' : ' text-black'),

    captionColor: () => ' text-grey-3',

    titleClasses(): string {
      return this.titleColor + ' text-h6 text-weight-bold';
    },
    textClasses(): string {
      return 'fz-18' + this.textColor;
    },

    orderTitleClass: () => (config.is_dark ? ' text-grey-5' : ' text-grey-7'),

    backgroundClass: () => (config.is_dark ? ' bg-dark' : ' bg-white'),

    itemBackgroundClass: () => (config.is_dark ? ' bg-grey-9' : ' bg-grey-3'),

    loadingClass: () => (config.is_dark ? ' bg-dark' : ' bg-white'),

    stages: (state): Stages[] => state.stagesValue,
  },
  actions: {
    useScroll(stage?: number) {
      const current = stage ?? 0;

      const { top } = document
        .getElementById('stage-' + current)
        ?.getBoundingClientRect() ?? { top: 0 };

      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
    },
  },
});
