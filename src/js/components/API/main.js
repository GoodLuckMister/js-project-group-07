import api from './discoveryAPI';
import cards from '../renderCard/renderCard';
import refs from '../refs';
import makePaginationList from '../pagination/pagination';
import debounce from 'lodash.debounce';

// refs.form.addEventListener('input', onSearch);

refs.form.addEventListener('input', debounce(onSearch, 500));

const event = new api('Concert', 'US');

function fetchEvents(event) {
  event
    .fetchApiServiceAll()
    .then(r => {
      console.log(r._embedded.events);

      cards(r._embedded.events, refs.cardsList);
      makePaginationList(r, event);
    })
    .catch(e => console.log('hello', e));
}

function onSearch(e) {
  event.query = e.currentTarget.elements.search.value;
  event.location = e.currentTarget.elements.country.value;
  fetchEvents(event);
}

fetchEvents(event);

refs.paginationList.addEventListener('click', debounce(e => {
  event.page = Number(e.target.textContent) - 1;
  fetchEvents(event);
}, 250));

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
