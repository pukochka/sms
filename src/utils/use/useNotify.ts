import { Notify } from 'quasar';
import { useLang } from 'src/utils/use/useLang';
import { useDataStore } from 'stores/data/dataStore';
import { useStatesStore } from 'stores/states/statesStore';

export function useNotify(message: string, activations?: boolean) {
  const data = useDataStore();
  const states = useStatesStore();
  const lang = useLang();

  const activationMessage = `<div class="q-mx-lg">${lang.activations_notify} : ${data.activeOrders.length}</div>`;

  const activationButtons = [
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
        if (data.activeOrders.length > 1) states.openDialog('orders_view');
        else data.setOrder(data.activeOrders[0]);
      },
    },
  ];

  const buttons = activations ? activationButtons : [];

  if (activations && data.activeOrders.length === 0) return;

  Notify.create({
    message: activations ? activationMessage : message,
    timeout: activations ? 60000 : 2000,
    actions: [...buttons],
    classes: 'rounded-10 bg-page q-list--bordered text-color no-shadow',
    position: 'top',
    html: true,
  });
}