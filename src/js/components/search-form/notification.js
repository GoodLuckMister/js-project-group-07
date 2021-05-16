import { info } from '@pnotify/core';
import '@pnotify/core/dist/Angeler.css';
import "@pnotify/core/dist/PNotify.css";


export default function showNotification() {
  info({
    text: 'No mathes found',
    styling: 'angeler',
    mode: 'dark',
    delay: 2000,
    animation: 'fade',
    animateSpeed: 'slow',
  })
};