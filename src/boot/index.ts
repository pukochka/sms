import { boot } from 'quasar/wrappers';
import { createPinia } from 'pinia';
import haptic from './directives/hapic';

export default boot(({ app }) => {
  const pinia = createPinia();

  app.use(pinia);
  app.directive('haptic', haptic);
});
