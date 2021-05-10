import cardsListTemplate from '../../../templates/card.hbs';

export default function renderCard(item, element) {
  const cardMarkup = cardsListTemplate(item);

  element.innerHTML = cardMarkup;
}
