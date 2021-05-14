import refs from '../refs';
import createLogoMarkup from './logoMarkup';
import renderCountriesDatalist from './renderCountriesDatalist';

createLogoMarkup();

refs.form.elements.country.addEventListener('focus', renderCountriesDatalist);
