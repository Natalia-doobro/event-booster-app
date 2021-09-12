import galleryMarkUp from './templation/gallery.hbs';
import {eventInput, countryInput, gallery} from './refs';

export function createGalleryMarkup(events) {
    const markUp = galleryMarkUp(events);
    gallery.insertAdjacentHTML('beforeend', markUp);
  }
  