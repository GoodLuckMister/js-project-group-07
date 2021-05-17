import refs from '../components/refs';

const STORAGE_COUNTRY_KEY = 'chosenCountry';

refs.form.elements.country.addEventListener('input', saveCountry);

export function saveCountry() {
localStorage.setItem(STORAGE_COUNTRY_KEY, refs.form.elements.country.value);
console.log('savedCountry', savedCountry);
console.log(STORAGE_COUNTRY_KEY, refs.form.elements.country.value);
console.log(refs.form.elements.country);
}


export const savedCountry = localStorage.getItem(STORAGE_COUNTRY_KEY);
