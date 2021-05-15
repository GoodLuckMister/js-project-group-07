import refs from '../refs';
import renderModal from '../modal-fn/modalMarkup';

export default function onEventClick(event) {
    event.preventDefault(),
    window.addEventListener('keydown', onEscKeyPress);
    refs.modalEl.classList.add('is-open');
    // renderModal(event.target);
}