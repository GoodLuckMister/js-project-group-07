import refs from '../components/refs';
import { event } from '../components/API/main';

const STORAGE_COUNTRY_KEY = 'chosenCountry';

export function saveCountry(country) {
  localStorage.setItem(STORAGE_COUNTRY_KEY, country);
}

export const savedCountry = localStorage.getItem(STORAGE_COUNTRY_KEY);

export function clearSavedCountry() {
  localStorage.removeItem(STORAGE_COUNTRY_KEY)
}
