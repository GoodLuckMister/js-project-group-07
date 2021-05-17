import refs from '../refs';


export default function renderCountriesDatalist() {
  
  refs.form.insertAdjacentHTML('beforeend', ' <datalist id="countries"><option value="UA">Ukraine</option><option value="PL">Poland</option><option value="DE">Germany</option><option value="BE">Belgium</option><option value="US">United States Of America</option><option value="CA">Canada</option><option value="CN">China</option><option value="GE">Georgia</option><option value="GB">Great Britain</option><option value="IT">Italy</option><option value="RU">Russian Federation</option><option value="ES">Spain</option><option value="SE">Sweden</option><option value="TR">Turkey</option></datalist>');
 
}