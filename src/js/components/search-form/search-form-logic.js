import refs from '../refs/refs';
import cards from '../renderCard/renderCard';
import showNotification from '../pnotifyNotifications/notification';
import makePaginationList from '../pagination/pagination';
// import { saveSearchRequest } from '../../webStorageApi/storageOfSearchQuery';
// import { savedCountry } from '../../webStorageApi/storageOfCounty';
import Preloader from '../preloader/Preloader';
import API from '../../API/DiscoveryAPI';

export const event = new API();

const preloader = new Preloader();

export default function onSearch(e) {
  event.query = e.target.value.trim();

  if (event.query === '') {
    return;
  }

  preloader.show();

  event
    .fetchApiServiceAll()
    .then(r => {
      checkFetch(r, e);
      cards(r._embedded.events, refs.cardsList);
      makePaginationList(r, event);
    })
    .catch(e => console.log('hello', e))
    .finally(() => preloader.remove());
}

function checkFetch(r, e) {
  if (!r._embedded) {
    preloader.remove();
    event.query = '';
    e.target.value = '';
    return showNotification();
  }
}
