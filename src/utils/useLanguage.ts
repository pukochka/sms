import { useDataStore } from 'stores/data/dataStore';
import ruScheme from 'src/utils/lang/ru';
import enScheme from 'src/utils/lang/en';

export function useLanguage() {
  const data = useDataStore();

  const language = data.userValue?.language ?? 'ru';

  return language === 'ru' ? ruScheme : enScheme;
}
