import api from './discoveryAPI';

let event = new api('Concert', 'US');
event
  .fetchApiServiceAll()
  .then(r => console.log(r._embedded.events))
  .catch(e => console.log('hello', e));

const bodyRef = document.querySelector('body');
bodyRef.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    event.incrementPage();
    event.fetchApiServiceAll().then(r => console.log(r._embedded.events));
  }
  if (e.key === 'ArrowLeft') {
    event.decrementPage();
    event.fetchApiServiceAll().then(r => console.log(r._embedded.events));
  }
});
