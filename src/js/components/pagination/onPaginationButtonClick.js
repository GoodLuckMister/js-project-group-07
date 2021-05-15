import refs from '../refs';
import debounce from 'lodash.debounce';
import api from '../API/discoveryAPI';
import { fetchEvents } from '../API/main';

const eventsApi = new api();

refs.paginationList.addEventListener(
  'click',
  debounce(e => {
    eventsApi.page = Number(e.target.textContent) - 1;
    fetchEvents(eventsApi);
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

const string = `hello hello ${'hello'}`;
const a = 1;
