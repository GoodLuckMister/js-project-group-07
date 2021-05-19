// import refs from '../components/refs/refs';
// import { event } from '../components/search-form/search-form-logic';

const STORAGE_COUNTRY_KEY = 'chosenCountry';

export function saveCountry(country) {
  localStorage.setItem(STORAGE_COUNTRY_KEY, country);
}

export const savedCountry = localStorage.getItem(STORAGE_COUNTRY_KEY);
