import refs from '../refs';
import cards from '../renderCard/renderCard';
import { event } from '../API/main';
import showNotification from './notification';
import makePaginationList from '../pagination/pagination';
import { saveSearchRequest } from '../../webStorageApi/storageOfSearchQuery';
import { saveCountry, savedCountry } from '../../webStorageApi/storageOfCounty';
import Preloader from '../preloader/Preloader';

// export default function onSearch(e) {
//   event.query = e.target.value.trim();
//   event.location = savedCountry;
//   event
//     .fetchApiBySearch()
//     .then(r => {
//       if (!r._embedded) {
//         return showNotification();
//       }
//       cards(r._embedded.events, refs.cardsList);
//       makePaginationList(r, event);
//       saveSearchRequest();
//     }}}

let preloader = new Preloader(refs.containerPreload);

export default function onSearch(e) {
  event.query = e.target.value.trim();
  event.location = savedCountry || event.location;
  preloader.show();

  event
    .fetchApiBySearch()
    .then(r => {
      preloader.remove();
      if (!r._embedded) {
        return showNotification();
      }
      cards(r._embedded.events, refs.cardsList);
      preloader.remove();
      makePaginationList(r, event);
      saveSearchRequest();
    })
    .catch(e => console.log('hello', e));
}

refs.form.elements.country.addEventListener('focus', onInputFocus);
refs.formList.addEventListener('click', chooseCountryFromList);
refs.form.elements.country.addEventListener('click', onInputClick);
refs.form.elements.country.addEventListener('blur', onInputBlur);

function onInputFocus(e) {
  if (e.target.value === '') {
    refs.formList.classList.toggle('shown');
  }
}

function chooseCountryFromList(e) {
  refs.formListItems.forEach(el => {
    if (e.target === el) {
      const countryCode = e.target.dataset.code;
      const countryName = e.target.textContent.trim();
      event.location = countryCode;
      refs.form.elements.country.value = countryName;
    }
  });
}

function onInputBlur(e) {
  setTimeout(() => {
    refs.formList.classList.remove('shown');
  }, 500);
}

function onInputClick(e) {
  if (e.target.value === '') {
    return;
  }
  refs.formList.classList.toggle('shown');
}
