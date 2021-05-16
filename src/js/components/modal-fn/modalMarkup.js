import refs from '../refs';
import modalTemplate from '../../../templates/modal.hbs';


export default function renderModal(eventDataId) {
    
  const modalMarkup = modalTemplate(eventDataId);
  
  refs.modalEl.innerHTML = modalMarkup;
}