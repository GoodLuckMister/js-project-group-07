import refs from '../refs'

export function onModalClose(event) {
    const closeModalBtn = document.querySelector('button[data-action="close-modal');
    const modalOverlay = document.querySelector('.modal__overlay');
    
    if (event.target === closeModalBtn) {
        closeModal();
    };

    if (event.target === modalOverlay) {
        closeModal();
    };
};

export function onEscKeyPress(event) {
    if (event.code === 'Escape') {
        closeModal();
    }
};


function closeModal(event) {
    window.removeEventListener('keydown', onEscKeyPress);
        refs.modalEl.classList.remove('is-open');
        refs.modalEl.innerHTML = '';
}