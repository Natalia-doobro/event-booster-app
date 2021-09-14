import { fetchPopularEvents, fetchEventsByName } from './api_service';
import { eventInput, countryInput, gallery } from './refs';
import { createGalleryMarkup, clearGalleryMarkup } from './create-markup';
import debounce from 'lodash.debounce';
import { alert, info, success, error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

window.addEventListener('DOMContentLoaded', onLoadPage);
eventInput.addEventListener('input', debounce(onEventSearch, 1000));

const state = {
  page: 1,
  country: 202,
  query: '',
  classification: '',
};

async function onLoadPage() {
  state.classification = 'music';
  state.page = 1;
  const data = await fetchPopularEvents(state.page, state.classification, state.country);
  createGalleryMarkup(data);
  info({
    text: `Type a name/genre/place of the event`,
    delay: 2000,
    maxTextHeight: null,
  });
}

async function onEventSearch(e) {
  state.page = 1;
  state.query = e.target.value.trim();

  try {
    const data = await fetchEventsByName(state.query, state.page);
    clearGalleryMarkup();
    createGalleryMarkup(data);
    if (e.target.value.length > 1) {
      success({
        text: `Congratulations! Events for your request were found`,
        delay: 1000,
        maxTextHeight: null,
      });
    } else {
      onLoadPage();
    }
  } catch (err) {
    gallery.innerHTML = 'Oops :(';
    e.target.value = '';
    error({
      text: 'Can not find any event for your request',
      delay: 1000,
      maxTextHeight: null,
    });
  }
}

// =======================================

countryInput.addEventListener('input', onEventSearchCountries);

async function onEventSearchCountries(e) {
  const dataCountries = await fetchEvents(e);
  console.log(e);
}
