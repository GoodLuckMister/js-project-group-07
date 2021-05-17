import refs from '../refs';
import cards from '../renderCard/renderCard';
import { event } from '../API/main';
import showNotification from './notification';
import makePaginationList from '../pagination/pagination';
import { saveSearchRequest } from '../../webStorageApi/storageOfSearchQuery';
import {savedCountry} from '../../webStorageApi/storageOfCounty'


export default function onSearch(e) {
  event.query = e.target.value.trim();
  event.location = savedCountry;

  
  event
  .fetchApiBySearch()
  .then(r => {
    if (!r._embedded) {
      return showNotification();
    }
    cards(r._embedded.events, refs.cardsList);
    makePaginationList(r, event);
    saveSearchRequest();

import Preloader from '../preloader/Preloader';

let preloader = new Preloader(refs.containerPreload);

export default function onSearch(e) {
  event.query = e.target.value.trim();
  event.location = refs.form.elements.country.value;
  preloader.show();
  event
    .fetchApiBySearch()
    .then(r => {
      if (!r._embedded) {
        return showNotification();
      }
      cards(r._embedded.events, refs.cardsList);
      preloader.remove();
      makePaginationList(r, event);

    })
    .catch(e => console.log('hello', e));
}
