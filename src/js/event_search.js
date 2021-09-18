import { fetchEvents } from './api_service';
import { eventInput, gallery } from './refs';
import { clearGalleryMarkup, createGalleryMarkup } from './create-markup';
import debounce from 'lodash.debounce';
import { error, info, success } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import { openModal } from './modal';

window.addEventListener('DOMContentLoaded', onLoadPage);
eventInput.addEventListener('input', debounce(onEventSearch, 1000));

export const state = {
  page: 1,
  query: '',
  classification: 'music',
  country: '',
  code: '',
};

export async function onLoadPage() {
  state.page = 1;
  const data = await fetchEvents(state.query, state.page, state.classification, state.country);
  createGalleryMarkup(data);
  gallery.addEventListener('click', e => {
    openModal(e, data);
  });
  info({
    text: `Type a name/genre/place of the event`,
    delay: 2000,
    maxTextHeight: null,
  });

  // addHiddenClass();
}

export async function onEventSearch(e) {
  state.page = 1;
  state.query = e.target.value.trim();
  try {
    const data = await fetchEvents(state.query, state.page, state.classification, state.country);
    clearGalleryMarkup();
    createGalleryMarkup(data);
    incrementPage();
    if (data._embedded.events.length > 1 && e.target.value.length > 3) {
      success({
        text: `Congratulations! Events for your request were found`,
        delay: 1000,
        maxTextHeight: null,
      });
    } else {
      onLoadPage();
    }
  } catch (err) {
    e.target.value = '';
    gallery.innerHTML = 'Oops :(';
    error({
      text: 'Can not find any event for your request',
      delay: 1000,
      maxTextHeight: null,
    });
  }
}

// function addHiddenClass() {
//   firstPagBtn.classList.add('btn-hidden');
//   prevPagBtn.classList.add('btn-hidden');
// }

export function loadNextPage() {
  clearGallery();
  onLoadPage();
  incrementPage();
}

export function loadPrevPage() {
  clearGallery();
  onLoadPage();
  dicrementPage();
}

export function loadCurrentPage() {
  clearGallery();
  onLoadPage();
}

// =======================================

// countryInput.addEventListener('input', onEventSearchCountries);

// async function onCountrytSearch(e) {
//   state.code = e.target.value.trim();
//   const data = await fetchCountries(state.page, state.code);
//   clearGalleryMarkup();
//   createGalleryMarkup(data);
// }

function incrementPage() {
  state.page++;
}

function resetPage() {
  state.page = 1;
}

function dicrementPage() {
  state.page--;
}

function clearGallery() {
  gallery.innerHTML = '';
}
