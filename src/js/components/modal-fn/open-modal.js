import refs from '../refs/refs';
import fetchId from '../fetchByID/fetByID';
import { onEscKeyPress } from '../modal-fn/close-modal';
import { onModalClose } from '../modal-fn/close-modal';

import onShowMore from '../modal-fn/showMore';

export default function (event) {
  event.preventDefault();

  if (event.target.nodeName === 'UL') {
    return;
  }
  refs.modalEl.classList.add('is-open');
  window.scrollTo({
    top: 150,
    left: 0,
    behavior: 'smooth',
  });
  const eventId = event.target.id;
  fetchId(eventId);
  window.addEventListener('keydown', onEscKeyPress);
  refs.modalEl.addEventListener('click', onModalClose);
  refs.modalEl.addEventListener('click', onShowMore);
}
