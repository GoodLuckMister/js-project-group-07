import refs from '../refs';
import renderModal from '../modal-fn/modalMarkup';
// import onEscKeyPress from '../modal-fn/close-modal';
// import onModalClose from '../modal-fn/close-modal';
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
    
    // const eventDataId = fetchId(eventId);
    // fetchId(eventId).then(eventDataId => renderModal(eventDataId)).cath(e => console.log('error', e));
    fetchId(eventId);
    // console.log(eventId);
    // console.log(eventDataId);
    
    
    // event.fetchDetails(eventId).then(r => console.log(r));
    // const eventDataId = fetchId(eventId);
    // renderModal(eventDataId);
    
    window.addEventListener('keydown', onEscKeyPress);
    
    refs.modalEl.addEventListener('click', onModalClose);
    refs.modalEl.addEventListener('click', onShowMore);
    
    
    // console.log(refs.modalCloseBtn);
    // console.log(event.target.id);
   
}



function onShowMore(event) {
    const showMoreBtn = document.querySelector('button[data-action="show-more"]');
    const modalContent = document.querySelector('.modal-content__event-promoter-info')

    if (event.target === showMoreBtn) {
        modalContent.classList.add('is-unhidden')
    }
}


function onModalClose(event) {
    const closeModalBtn = document.querySelector('button[data-action="close-modal');
    // const modalOverlay = document.querySelector('.modal__overlay');
    
    if (event.target === closeModalBtn) {
        window.removeEventListener('keydown', onEscKeyPress);
        refs.modalEl.classList.remove('is-open');
        modalContent.classList.remove('is-unhidden');
        refs.modalEl.removeEventListener('click', onShowMore);
        refs.modalEl.innerHTML = '';
    };
    
    
};

function onEscKeyPress(event) {
    if (event.code === 'Escape') {
        // onModalClose(event)
        window.removeEventListener('keydown', onEscKeyPress);
        refs.modalEl.classList.remove('is-open');
        modalContent.classList.remove('is-unhidden');
        refs.modalEl.removeEventListener('click', onShowMore);
        refs.modalEl.innerHTML = '';
    }
};


function onModalOverlayClick(event) {
    if (event.currentTarget === event.target) {
        // onModalClose()
        window.removeEventListener('keydown', onEscKeyPress);
        refs.modalEl.classList.remove('is-open');
        refs.modalEl.innerHTML = '';
    }
}

// сonst modalOverlayEl = document.querySelector('.modal__overlay'); 
// refs.modalEl.firstChild.addEventListener('click', (event) => {
// refs.modalEl.firstChild.addEventListener('click', (event) => {
//     if (event.currentTarget === event.target) {
//         // onModalClose()
//         window.removeEventListener('keydown', onEscKeyPress);
//         refs.modalEl.classList.remove('is-open');
//         refs.modalEl.innerHTML = '';
//     }
// });