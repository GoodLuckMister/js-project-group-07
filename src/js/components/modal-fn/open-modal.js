import refs from '../refs';
import renderModal from '../modal-fn/modalMarkup';
import onEscKeyPress from '../modal-fn/close-modal';
import { fetchId } from '../API/main';
import { event } from '../API/main';

export default function onEventClick(event) {
    event.preventDefault();
    
    // window.addEventListener('keydown', onEscKeyPress);
    refs.modalEl.classList.add('is-open');
    const eventId = event.target.id;
    // event.fetchDetails(eventId).then(r => console.log(r));
    // const eventDataId = fetchId(eventId);
    // renderModal(eventDataId);
    fetchId(eventId).then(eventDataId => renderModal(eventDataId));

    
    // console.log(event.target.id);
    console.log(eventId);
   
}