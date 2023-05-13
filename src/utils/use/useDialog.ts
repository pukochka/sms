import { Dialog } from 'quasar';
import { useLang } from './useLang';

export function useDialog(message: string, error?: boolean) {
  const lang = useLang();

  const buttons = error
    ? {
        ok: {
          noCaps: true,
          label: 'OK',
          class: 'rounded-10',
          unelevated: true,
          color: 'primary',
        },
      }
    : {
        ok: {
          noCaps: true,
          label: lang.confirm,
          class: 'rounded-10',
          color: 'red',
          unelevated: true,
        },
        cancel: {
          noCaps: true,
          label: lang.cancel,
          class: 'rounded-10',
          color: 'primary',
          unelevated: true,
        },
      };

  return Dialog.create({
    title: lang.errors.titles.notify,
    message: message,
    class: 'rounded-10',
    html: true,
    ...buttons,
  });
}
