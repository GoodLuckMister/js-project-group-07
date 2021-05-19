import API from '../../API/DiscoveryAPI';
import Preloader from '../preloader/Preloader';
import makePaginationList from '../pagination/pagination';
import cards from '../renderCard/renderCard';
import refs from '../refs/refs';

const firstLoad = new API();
const preloader = new Preloader();

export default function fetchEvents(event) {
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

fetchEvents(firstLoad);
