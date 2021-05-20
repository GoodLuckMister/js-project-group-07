import listItemsMarkup from '../../../templates/list-items.hbs';
import countries from '../../data/countries';
import refs from '../refs/refs';

const createListItems = listItemsMarkup(countries);
refs.formList.innerHTML = createListItems;
