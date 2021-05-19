import refs from '../refs/refs';
import modalTemplate from '../../../templates/modal.hbs';

export default function (eventDataId) {
  const modalMarkup = modalTemplate(eventDataId);

  refs.modalEl.innerHTML = modalMarkup;
}
