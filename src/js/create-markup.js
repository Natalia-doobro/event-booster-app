import galleryMarkUp from '../templation/gallery.hbs';
import { eventInput, countryInput, gallery } from './refs';

export function createGalleryMarkup(events) {
  const markUp = galleryMarkUp(events);
  // console.log(markUp);
  gallery.insertAdjacentHTML('beforeend', markUp);
}

export function clearGalleryMarkup() {
  gallery.innerHTML = '';
}

//=== рендер списка стран второго инпута ============

export function createCountriesListMarkup(events) {
  const countriesMarkup = countriesListMarkup(events);
  console.log(countriesMarkup);

  countryInput.insertAdjacentHTML('beforeend', countriesMarkup);
}
