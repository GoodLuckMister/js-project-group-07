import refs from '../components/refs';
import { event } from '../components/API/main';

const STORAGE_COUNTRY_KEY = 'chosenCountry';

export function saveCountry() {
  localStorage.setItem(STORAGE_COUNTRY_KEY, event.location);
}

export const savedCountry = localStorage.getItem(STORAGE_COUNTRY_KEY);
