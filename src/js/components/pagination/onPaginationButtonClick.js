import refs from '../refs/refs';
import debounce from 'lodash.debounce';
import API from '../../API/DiscoveryAPI';
import fetchEvents from '../firstLoad/firstLoad';

const event = new API();

refs.paginationList.addEventListener(
  'click',
  debounce(e => {
    event.page = Number(e.target.textContent) - 1;
    fetchEvents(event);
    scrollPageUp();
  }, 250),
);

function scrollPageUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

refs.paginationList.addEventListener('click', removeCurrentPageOutline);

function removeCurrentPageOutline() {
  const buttons = document.querySelectorAll('.pagination__button');
  for (const button of buttons) {
    if (button.classList.contains('current-page-js')) {
      button.classList.remove('current-page-js');
      break;
    }
  }
}
