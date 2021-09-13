import{ fetchPopularEvents, fetchEventsByName} from './api_service';
import {eventInput, countryInput, gallery} from './refs';
import {createGalleryMarkup} from './create-markup'
import debounce from 'lodash.debounce';

window.addEventListener('DOMContentLoaded', onLoadPage);
eventInput.addEventListener('input', debounce(onEventSearch, 500));

const state = {
  target: 'events',
  page: 1,
  country: 202,
  query: '',
};

async function onLoadPage() {
  console.log('hello');
    state.page = 1;
    const data = await fetchPopularEvents( state.page, state.country);
    createGalleryMarkup(data);
    
  }

async function onEventSearch(e) {
  state.page = 1;
  state.query = e.target.value.trim();
  const data = await fetchEventsByName(state.target, state.query, state.page);
  createGalleryMarkup(data);
}

// =======================================

countryInput.addEventListener('input', onEventSearchCountries);

async function onEventSearchCountries(e) {
  const dataCountries = await fetchEvents(e);
  console.log(e);
}
