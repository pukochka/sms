import namesCountry from 'src/utils/names/contries';
import { useDataStore } from 'stores/data/dataStore';
import { products } from 'src/utils/names/products';

export function findServiceName(name?: string) {
  return products[name ?? '-1'] ?? name;
}

export function findCountryName(name?: string) {
  const data = useDataStore();

  return data.user.language === 'ru'
    ? namesCountry[name ?? '0']
    : data.countries.value.find((item) => item.id === (name ?? '0'))?.title_eng;
}
