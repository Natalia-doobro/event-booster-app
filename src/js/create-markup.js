import galleryMarkUp from '../templation/gallery.hbs';
import { eventInput, countryInput, gallery } from './refs';

export function createGalleryMarkup(events) {
  const markUp = galleryMarkUp(events);
  gallery.insertAdjacentHTML('beforeend', markUp);
}

export function clearGalleryMarkup() {
  gallery.innerHTML = '';
}

// ==== запрос стран для второго инпута =============

export async function fetchCountries(page, country) {
  const {
    data: {
      _embedded: { events },
    },
  } = await axios.get(
    `size=20&page=${page}&sort=random&countryCode=${country}&apikey=1twKLyrauG3OZrFZiN9ApTE1ANWFyZTo`,
  );
  return events;
}
