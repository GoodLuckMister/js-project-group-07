import refs from '../components/refs';

const STORAGE_COUNTRY_KEY = 'chosenCountry';

refs.form.elements.country.addEventListener('input', saveCountry);

export function saveCountry() {
  localStorage.setItem(STORAGE_COUNTRY_KEY, refs.form.elements.country.value);
}

export const savedCountry = localStorage.getItem(STORAGE_COUNTRY_KEY);
