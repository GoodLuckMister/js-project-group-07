import api from './discoveryAPI';
import cards from '../renderCard/renderCard';
import refs from '../refs';
import makePaginationList from '../pagination/pagination';


import debounce from 'lodash.debounce';


export const event = new api('Concert', 'US');
event.fetchDetails('G5diZ4VBwFSX2').then(r => console.log(r));

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

refs.paginationList.addEventListener(
  'click',
  debounce(e => {
    event.page = Number(e.target.textContent) - 1;
    fetchEvents(event);
  }, 250),
);


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
