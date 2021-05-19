import refs from '../refs'

export function onModalClose(event) {
    const closeModalBtn = document.querySelector('button[data-action="close-modal');
    
    if (event.target === closeModalBtn) {
        window.removeEventListener('keydown', onEscKeyPress);
        refs.modalEl.classList.remove('is-open');
        refs.modalEl.innerHTML = '';
    };
};

export function onEscKeyPress(event) {
    if (event.code === 'Escape') {
        window.removeEventListener('keydown', onEscKeyPress);
        refs.modalEl.classList.remove('is-open');
        refs.modalEl.innerHTML = '';
    }
};

// refs.modalOverlay.addEventListener('click', (event) => {
//     if (event.currentTarget === event.target) {
//         onModalClose()
//     }
// });
