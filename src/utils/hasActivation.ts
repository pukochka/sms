import { Notify } from 'quasar';

import { useDataStore } from 'stores/data/dataStore';
import { useStatesStore } from 'stores/states/statesStore';
import { useLang } from 'src/utils/use/useLang';

export function hasActivation() {
  const data = useDataStore();
  const states = useStatesStore();
  const lang = useLang();

  if (data.active_order.length > 0) {
    Notify.create({
      icon: 'warning',
      message: `<div class="q-mx-lg">${lang.activations_notify} : ${data.active_order.length}</div>`,
      position: 'top-right',
      textColor: 'primary',
      html: true,
      timeout: 60000,
      actions: [
        {
          label: lang.button_dismiss,
          color: 'red',
          class: 'rounded-10',
          noCaps: true,
        },
        {
          label: lang.button_open,
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
