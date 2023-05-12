import { Notify } from 'quasar';

import { useMainStore } from 'stores/main/mainStore';
import { useDataStore } from 'stores/data/dataStore';
import { useStatesStore } from 'stores/states/statesStore';

export function hasActivation() {
  const main = useMainStore();
  const data = useDataStore();
  const states = useStatesStore();

  if (data.active_order.length > 0) {
    Notify.create({
      icon: 'warning',
      message: `<div class="${main.textColor} q-mx-lg">${main.language.activations_notify} : ${data.active_order.length}</div>`,
      position: 'top-right',
      textColor: 'primary',
      html: true,
      timeout: 60000,
      classes: main.backgroundClass,
      actions: [
        {
          label: main.language.button_dismiss,
          color: 'red',
          class: 'rounded-10',
          noCaps: true,
        },
        {
          label: main.language.button_open,
          color: 'primary',
          class: 'rounded-10 q-ml-sm',
          noCaps: true,
          flat: false,
          unelevated: true,
          handler() {
            if (data.active_order.length > 1) states.openDialog('orders_view');
            else data.setOrder(data.active_order[0]);
          },
        },
      ],
    });
  }
}
