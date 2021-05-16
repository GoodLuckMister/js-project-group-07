import refs from '../refs';
import onEventClick from './open-modal';
// import './close-modal';

// function onEventClick(event) {
//     console.log(event.target);
//     console.log('click');
// }

refs.cardsList.addEventListener('click', onEventClick);