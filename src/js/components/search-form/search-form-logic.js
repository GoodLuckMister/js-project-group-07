import refs from '../refs';
import {fetchEvents} from '../API/main';
import { event } from '../API/main';

export default function onSearch(e) {
  event.query = e.target.value;
  event.location = refs.form.elements.country.value;
  fetchEvents(event);
}


