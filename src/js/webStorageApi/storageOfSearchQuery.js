import refs from '../components/refs';

const STORAGE_REQUEST_KEY = 'searchRequest';

export function saveSearchRequest(){
    sessionStorage.setItem(STORAGE_REQUEST_KEY, refs.form.elements.search.value);
    
    console.log('savedSearchRequest', savedSearchRequest);
    console.log(STORAGE_REQUEST_KEY, refs.form.elements.country.value);
}

export const savedSearchRequest = sessionStorage.getItem(STORAGE_REQUEST_KEY);


console.log(refs.form.elements.country);