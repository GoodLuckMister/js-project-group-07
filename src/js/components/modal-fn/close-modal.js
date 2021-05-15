import refs from '../refs'

refs.modalCloseBtn.addEventListener('click', onModalClose);

function onModalClose(event) {
    window.removeEventListener('keydown', onEscKeyPress);
    modalEl.classList.remove('is-open');
};

function onEscKeyPress(event) {
    if (event.code === 'Escape') {
        onModalClose(event)
    }
};

refs.modalOverlay.addEventListener('click', (event) => {
    if (event.currentTarget === event.target) {
        onModalClose()
    }
});