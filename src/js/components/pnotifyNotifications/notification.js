import { info, Stack } from '@pnotify/core';
import '@pnotify/core/dist/Angeler.css';
import '@pnotify/core/dist/PNotify.css';
import refs from '../refs/refs';

export default function showNotification() {
  info({
    text: 'Sorry, no matches found.',
    styling: 'angeler',
    mode: 'dark',
    delay: 2000,
    animation: 'fade',
    width: '350px',
    animateSpeed: 'slow',
    stack: new Stack({
      dir1: 'down',
      firstpos1: 250,
      context: refs.header,
    }),
  });
}
