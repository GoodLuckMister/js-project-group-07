import API from '../../API/DiscoveryAPI';
import Preloader from '../preloader/Preloader';
import makePaginationList from '../pagination/pagination';
import cards from '../renderCard/renderCard';
import refs from '../refs/refs';
import { savedSearchRequest } from '../../webStorageApi/storageOfSearchQuery';
import { savedCountry } from '../../webStorageApi/storageOfCounty';

const country = savedCountry || 'US';
const request = savedSearchRequest || 'Concert';

const firstLoad = new API(request, country);
const preloader = new Preloader();

export default function fetchEvents(event) {
  preloader.show();

  event
    .fetchApiServiceAll()
    .then(r => {
      cards(r._embedded.events, refs.cardsList);
      makePaginationList(r, event);
    })
    .catch(e => console.log('hello', e))
    .finally(() => preloader.remove());
}

fetchEvents(firstLoad);
