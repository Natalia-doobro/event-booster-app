// import createGalleryMarkup from './templates/gallery.hbs';
import {eventInput, countryInput, gallery} from './refs';

export function createGalleryMarkup(events) {
    const markUp = eventsGallery(events);
    gallery.insertAdjacentHTML('beforeend', markUp);
  }
  