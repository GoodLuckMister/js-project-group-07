import refs from '../refs';
// import {fetchEvents} from '../API/main';
import { event } from '../API/main';
import showNotification from './notification';

export default function onSearch(e) {
  event.query = e.target.value.trim();
  event.location = refs.form.elements.country.value;
  event.fetchApiBySearch()
    .then(r => {
      if (!r._embedded) {
       return showNotification();
      }
      cards(r._embedded.events, refs.cardsList);
      makePaginationList(r, event)
    })
    .catch(e => console.log('hello', e));
}


