import refs from '../refs';
import renderModal from '../modal-fn/modalMarkup';
import onEscKeyPress from '../modal-fn/close-modal';
import { fetchId } from '../API/main';
import { event } from '../API/main';

export default function onEventClick(event) {
    event.preventDefault();
    
    refs.modalEl.classList.add('is-open');
    
    const eventId = event.target.id;
    
    // const eventDataId = fetchId(eventId);
    // fetchId(eventId).then(eventDataId => renderModal(eventDataId)).cath(e => console.log('error', e));
    fetchId(eventId);
    console.log(eventId);
    // console.log(eventDataId);


    // event.fetchDetails(eventId).then(r => console.log(r));
    // const eventDataId = fetchId(eventId);
    // renderModal(eventDataId);
    
    window.addEventListener('keydown', onEscKeyPress);
    
    // console.log(event.target.id);
   
}