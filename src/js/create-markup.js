import createGalleryMarkup from './templates/gallery.hbs';

export function createGalleryMarkup(events) {
    const markUp = eventsGallery(events);
    gallery.insertAdjacentHTML('beforeend', markUp);
  }
  