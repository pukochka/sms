import namesCountry from 'src/utils/names/contries';
import { useDataStore } from 'stores/data/dataStore';
import { products } from 'src/utils/names/products';

export function findServiceName(name?: string) {
  return products[name ?? ''] ?? name;
}

export function findCountryName(name?: string) {
  const data = useDataStore();

  return data.user.language === 'eng'
    ? namesCountry[name ?? 'ru']?.name_en || ''
    : namesCountry[name ?? 'ru']?.name_ru || '';
}

export function findCountryImage(name?: string) {
  const data = useDataStore();

  return (
    data.countries.value.find((country) => country.org_id === name)?.image ?? ''
  );
}

export function findServiceImage(name?: string) {
  const data = useDataStore();

  return (
    data.services.value.find((country) => country.name === name)?.image ?? ''
  );
}
