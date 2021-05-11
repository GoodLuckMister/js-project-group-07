const BASIC_URL = 'https://app.ticketmaster.com/discovery/v2/';
const KEY = 'y0yYLqXgtKWQACxMls2Nd9iuExOsMHTV'

export default class ApiService {
  constructor(keyword = '', country = 'US') {
    this.page = 1;
    this.country = country;
    this.keyword = keyword;
  }
  async fetchApiServiceAll() {
    const url = `${BASIC_URL}events.json?keyword=${this.keyword}&countryCode=${this.country}&page=${this.page}&apikey=${KEY}`;
    return await fetch(url)
      .then(response => response.json())
      .catch(error => console.error(error));
  }

  incrementPage() {
    this.page += 1;
  }
  decrementPage() {
    this.page -= 1;
  }
  resetPage() {
    return (this.page = 1);
  }
  get query() {
    return this.keyword;
  }
  set query(newKeyword) {
    this.keyword = newKeyword;
    resetPage();
  }
  get location() {
    return this.country;
  }
  set location(newCountry) {
    this.country = newCountry;
  }
}
