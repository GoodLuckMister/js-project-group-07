import refs from '../refs/refs';
import debounce from '../../../../node_modules/lodash.debounce';
import onSearch from './search-form-logic';

refs.form.elements.search.addEventListener('input', debounce(onSearch, 1000));
