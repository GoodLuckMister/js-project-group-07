import api from './discoveryAPI';
import cards from '../renderCard/renderCard';
import refs from '../refs';
import makePaginationList from '../pagination/pagination';
import Preloader from '../preloader/Preloader';
import renderModal from '../modal-fn/modalMarkup';
import { savedSearchRequest } from '../../webStorageApi/storageOfSearchQuery';
import { savedCountry } from '../../webStorageApi/storageOfCounty';

const country = savedCountry || 'US';
const request = savedSearchRequest || 'Concert';

export const event = new api(request, country);

// export const event = new api('Concert', 'US');
const preloader = new Preloader(refs.containerPreload);

export function fetchId(eventId) {
  event
    .fetchDetails(eventId)
    .then(r => renderModal(r))
    .catch(e => console.log('error', e));
}

// event.fetchDetails('G5diZ4VBwFSX2').then(r => console.log(r))

export function fetchEvents(event) {
  preloader.show();

  event
    .fetchApiServiceAll()
    .then(r => {
      cards(r._embedded.events, refs.cardsList);
      preloader.remove();
      makePaginationList(r, event);
    })
    .catch(e => console.log('hello', e));
}

fetchEvents(event);
