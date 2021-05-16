import refs from '../refs';
import modalTemplate from '../../../templates/modal.hbs';

export default function renderModal(item) {
    const modalMarkup = modalTemplate(item);
  
    refs.modalEl.innerHTML = modalMarkup;
  }