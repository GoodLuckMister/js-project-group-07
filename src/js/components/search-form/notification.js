import { notice } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import "@pnotify/core/dist/PNotify.css";

export default function showNotification () {
  notice({
      text: 'No mathes found',
      delay: 2000
})  
};