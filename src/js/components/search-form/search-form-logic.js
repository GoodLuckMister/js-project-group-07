import refs from '../refs';
import cards from '../renderCard/renderCard';
import { event } from '../API/main';
import showNotification from '../pnotifyNotifications/notification';
import makePaginationList from '../pagination/pagination';
import { saveSearchRequest } from '../../webStorageApi/storageOfSearchQuery';
import { savedCountry, clearSavedCountry } from '../../webStorageApi/storageOfCounty';
import Preloader from '../preloader/Preloader';

const preloader = new Preloader(refs.containerPreload);


export default function onSearch(e) {
  event.query = e.target.value.trim();
  event.location = savedCountry || event.location;
  preloader.show();

  event
    .fetchApiBySearch()
    .then(r => {
      if (!r._embedded) {
        clearSavedCountry();
        return showNotification();
      }
      cards(r._embedded.events, refs.cardsList);
      makePaginationList(r, event);
      saveSearchRequest();
    })
    .catch(e => console.log('hello', e))
    .finally(preloader.remove());
}

