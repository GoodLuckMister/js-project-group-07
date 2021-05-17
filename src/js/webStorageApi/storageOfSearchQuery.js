import refs from '../components/refs';

const STORAGE_REQUEST_KEY = 'searchRequest';

export function saveSearchRequest() {
  sessionStorage.setItem(STORAGE_REQUEST_KEY, refs.form.elements.search.value);
}

export const savedSearchRequest = sessionStorage.getItem(STORAGE_REQUEST_KEY);
