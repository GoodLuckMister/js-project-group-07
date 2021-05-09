fetch(
  'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&page=2&apikey=y0yYLqXgtKWQACxMls2Nd9iuExOsMHTV',
)
  .then(response => response.json())
  .then(r => console.log(r._embedded.events));

class ApiService {
  constructor() {
    this.key = 'y0yYLqXgtKWQACxMls2Nd9iuExOsMHTV';
    this.page = 0;
    this.searchQuery = '';
  }
  async fetchApiServiceAll() {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&page=${this.page}&apikey=${this.key}`;
    return await fetch(url)
      .then(response => response.json())
      .then(r => r);
  }
}
