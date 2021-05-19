export default function onShowMore (event) {
    const showMoreBTN = document.querySelector('button[data-action="show-more"]')
    const moreAboutText = document.querySelector('.modal-content__event-promoter-info');

    if (event.target === showMoreBTN) {
        console.log(showMoreBTN);
        moreAboutText.classList.add('is-unhidden');
    }
}



