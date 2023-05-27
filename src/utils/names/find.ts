import namesCountry from 'src/utils/names/contries';
import { useDataStore } from 'stores/data/dataStore';

export function findServiceName(name?: string) {
  const data = useDataStore();

  return (
    data.services.value.find((service) => service.name === (name ?? ''))
      ?.longName ?? name
  );
}

export function findCountryName(name?: string) {
  const data = useDataStore();

  return data.user.language === 'ru'
    ? namesCountry[name ?? '0']
    : data.countries.value.find((item) => item.id === (name ?? '0'))?.title_eng;
}
