import refs from '../refs/refs';
import { event } from './search-form-logic';
import { saveCountry } from '../../webStorageApi/storageOfCounty';

refs.form.elements.country.addEventListener('focus', onInputFocus);
refs.formList.addEventListener('click', chooseCountryFromList);
refs.form.elements.country.addEventListener('click', onInputClick);
refs.form.elements.country.addEventListener('blur', onInputBlur);

function onInputFocus(e) {
  if (e.target.value === '') {
    refs.formList.classList.toggle('shown');
    togglePointerFromFormOverflow();
  }
}

function chooseCountryFromList(e) {
  refs.formListItems.forEach(el => {
    if (e.target === el) {
      const countryCode = e.target.dataset.code;
      const countryName = e.target.textContent.trim();
      event.location = countryCode;
      refs.form.elements.country.value = countryName;
      saveCountry(country);
    }
  });
}

function onInputBlur(e) {
  setTimeout(() => {
    refs.formList.classList.remove('shown');
  }, 500);
  togglePointerFromFormOverflow();
}

function onInputClick(e) {
  if (e.target.value === '') {
    return;
  }
  refs.formList.classList.toggle('shown');
  togglePointerFromFormOverflow();
}

function togglePointerFromFormOverflow() {
  setTimeout(() => {
    refs.formOverflow.classList.toggle('pointer-open-js');
  }, 500);
}
