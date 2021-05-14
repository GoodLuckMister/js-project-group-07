import api from './discoveryAPI';
import cards from '../renderCard/renderCard';
import refs from '../refs';
import makePaginationList from '../pagination/pagination';
import debounce from 'lodash.debounce';
import onSearch from '../search-form/search-form-logic';
import createLogoMarkup from '../markup/logoMarkup';

createLogoMarkup();



refs.form.elements.search.addEventListener('input', debounce(onSearch, 500));
refs.form.elements.country.addEventListener('focus', renderCountriesDatalist);


export const event = new api('Concert', 'US');

export function fetchEvents(event) {
  event
    .fetchApiServiceAll()
    .then(r => {
      console.log(r._embedded.events);

      cards(r._embedded.events, refs.cardsList);
      makePaginationList(r, event);
    })
    .catch(e => console.log('hello', e));
}


fetchEvents(event);
// event.fetchDetails('G5diZ4VBwFSX2');

refs.paginationList.addEventListener('click', debounce(e => {
  event.page = Number(e.target.textContent) - 1;
  fetchEvents(event);
}, 250));

function renderCountriesDatalist() {
  refs.form.insertAdjacentHTML('beforeend', ' <datalist id="countries"><option value="UA">Ukraine</option><option value="PL">Poland</option><option value="DE">Germany</option><option value="BE">Belgium</option><option value="US">United States Of America</option><option value="CA">Canada</option><option value="CN">China</option><option value="GE">Georgia</option><option value="GB">Great Britain</option><option value="IT">Italy</option><option value="RU">Russian Federation</option><option value="ES">Spain</option><option value="SE">Sweden</option><option value="TR">Turkey</option></datalist>');
 
}


// const bodyRef = document.querySelector('body');
// bodyRef.addEventListener('keydown', e => {
//   if (e.key === 'ArrowRight') {
//     event.incrementPage();
//     event.fetchApiServiceAll().then(r => console.log(r._embedded.events));
//   }
//   if (e.key === 'ArrowLeft') {
//     event.decrementPage();
//     event.fetchApiServiceAll().then(r => console.log(r._embedded.events));
//   }
// });
