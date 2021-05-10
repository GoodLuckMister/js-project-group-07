export default class ApiService {
  constructor(keyword = '', country = 'US') {
    this.key = 'y0yYLqXgtKWQACxMls2Nd9iuExOsMHTV';
    this.url = 'https://app.ticketmaster.com/discovery/v2/events.json?';
    this.page = 1;
    this.country = country;
    this.keyword = keyword;
  }
  async fetchApiServiceAll() {
    const url = `${this.url}keyword=${this.keyword}&countryCode=${this.country}&page=${this.page}&apikey=${this.key}`;
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
    return (this.page = 0);
  }
}
