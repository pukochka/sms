import { findCountryName, findServiceName } from 'src/utils/names/find';

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
    findServiceName(service?.name ?? '')
      ?.toString()
      ?.short(search)
  ).sort(compareFn);
};

Array.prototype.countryFilter = function (search: string, multi?: boolean) {
  return this.filter((country) =>
    findCountryName(country?.org_id ?? '')?.short(search)
  );
};
