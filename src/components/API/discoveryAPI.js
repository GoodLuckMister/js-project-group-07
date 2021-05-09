// fetch(
//   'https://app.ticketmaster.com/discovery/v2/events.json?keyword=&countryCode=GB&page=2&apikey=y0yYLqXgtKWQACxMls2Nd9iuExOsMHTV',
// )
//   .then(response => response.json())
//   .then(r => console.log(r._embedded.events))
//   .catch(error => console.log('hello', error));

export default class ApiService {
  constructor(keyword = '', country = 'US') {
    this.key = 'y0yYLqXgtKWQACxMls2Nd9iuExOsMHTV';
    this.page = 0;
    this.country = country;
    this.keyword = keyword;
  }
  async fetchApiServiceAll() {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${this.keyword}&countryCode=${this.country}&page=${this.page}&apikey=${this.key}`;
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
