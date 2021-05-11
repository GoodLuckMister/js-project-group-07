import api from './discoveryAPI';
import cards from '../renderCard/renderCard';
import refs from '../refs'

refs.form.addEventListener('submit', onSearch);
const event = new api('Concert', 'US');

function onSearch(e) {
  e.preventDefault();

  event.query = e.target.elements.search.value;
    event.location = e.target.elements.country.value;

  event
  .fetchApiServiceAll()
  .then(r => {
    console.log(r._embedded.events);
    return cards(r._embedded.events, refs.cardsList);
  })
  .catch(e => console.log('hello', e));
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
