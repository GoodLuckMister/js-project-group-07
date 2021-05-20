import refs from '../refs/refs';
import createLogoMarkup from './logoMarkup';
import onEventClick from '../modal-fn/open-modal';
import './makeCountryList';

createLogoMarkup();

refs.cardsList.onkeydown = onEventKeydown;

function onEventKeydown(e) {
  if (e.keyCode === 13) {
    onEventClick(e);
  }
}
