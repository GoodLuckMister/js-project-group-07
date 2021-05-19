import refs from '../refs';
import { onEscKeyPress } from '../modal-fn/close-modal';
import { onModalClose } from '../modal-fn/close-modal';
import { fetchId } from '../API/main';
import onShowMore from '../modal-fn/showMore'

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
    refs.modalEl.addEventListener('click', onShowMore);

}

