import namesCountry from 'src/utils/names/contries';
import { useDataStore } from 'stores/data/dataStore';

export {};

/**
 * Занимает много места в сторе
 *
 * */

const props = {
  multi: { id: 'org_id', name: 'name_en' },
  default: { id: 'id', name: 'title_eng' },
};

const notCompare = function (a: any, b: any): any {
  return;
};

const compare = function (a: any, b: any): any {
  return Number(a.cost) - Number(b.cost);
};

// Сокращенный фильтр по названию
String.prototype.short = function (search: string) {
  return (
    this.toString().toLowerCase().indexOf(search.toString().toLowerCase()) === 0
  );
};

// Сокращение для цен
String.prototype.comma = function (value?: string) {
  return (value ?? '') + ((Number(this) ?? 0) / 100).toFixed(2) + ' ₽';
};
Number.prototype.comma = function (value?: string) {
  return (value ?? '') + ((Number(this) ?? 0) / 100).toFixed(2) + ' ₽';
};

Array.prototype.serviceFilter = function (search: string, price?: boolean) {
  const compareFn = price ? compare : notCompare;

  return this.filter((service) =>
    service.longName?.toString()?.short(search)
  ).sort(compareFn);
};

Array.prototype.countryFilter = function (
  search: string,
  multi?: boolean,
  price?: boolean
) {
  const data = useDataStore();

  const compareFn = price ? compare : notCompare;

  // Проблема с однообразием данных с сервера
  const keys = multi ? props.multi : props.default;

  return this.filter((country) =>
    (data.user.language === 'eng'
      ? country[keys.name]
      : namesCountry[country[keys.id]]
    )?.short(search)
  ).sort(compareFn);
};
