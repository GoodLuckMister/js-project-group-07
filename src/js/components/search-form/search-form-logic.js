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
      if (!r._embedded) {
        preloader.remove();
        return showNotification();
      }
      cards(r._embedded.events, refs.cardsList);
      makePaginationList(r, event);
      preloader.remove();
    })
    .catch(e => console.log('hello', e));
}
