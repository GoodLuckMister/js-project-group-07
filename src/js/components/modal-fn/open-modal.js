import refs from '../refs';
import renderModal from '../modal-fn/modalMarkup';
import { onEscKeyPress } from '../modal-fn/close-modal';
import { onModalClose } from '../modal-fn/close-modal';
import { fetchId } from '../API/main';
import { event } from '../API/main';

export default function onEventClick(event) {
    event.preventDefault();
    
    refs.modalEl.classList.add('is-open');
    window.scrollTo({
        top: 150,
        left: 0,
        behavior: 'smooth'
    });
    const eventId = event.target.id;
    fetchId(eventId);
    window.addEventListener('keydown', onEscKeyPress);
    refs.modalEl.addEventListener('click', onModalClose);
}

function onModalOverlayClick(event) {
    if (event.currentTarget === event.target) {
        window.removeEventListener('keydown', onEscKeyPress);
        refs.modalEl.classList.remove('is-open');
        refs.modalEl.innerHTML = '';
    }
}