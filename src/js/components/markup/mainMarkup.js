import refs from '../refs';
import createLogoMarkup from './logoMarkup';
import onEventClick from '../modal-fn/open-modal';

createLogoMarkup();

refs.cardsList.onkeydown = onEventKeydown;
    
    function onEventKeydown (e) {
  if(e.keyCode === 13) { // Кнопка Enter

      onEventClick(e);
  }
};
