fetch(
  'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=y0yYLqXgtKWQACxMls2Nd9iuExOsMHTV',
)
  .then(response => response.json())
  .then(r => console.log(r));
fetch(
  'https://app.ticketmaster.com/discovery/v2/events/vvG1VZG5LseKSl/images.json?countryCode=US&apikey=y0yYLqXgtKWQACxMls2Nd9iuExOsMHTV',
)
  .then(response => response.json())
  .then(r => console.log(r));
