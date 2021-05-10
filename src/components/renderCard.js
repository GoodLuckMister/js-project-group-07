import cadrsListTemplate from '../templates/card.hbs';

export default  function renderCard(item, element) {
    const cardMarkup = cadrsListTemplate(item);
    
    element.insertAdjacentHTML('afterbegin', cardMarkup)
}

