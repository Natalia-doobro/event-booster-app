import{ fetchEventsByName} from './api_service';
import {eventInput, countryInput, gallery} from './refs';
import {createGalleryMarkup} from './create-markup'
import debounce from 'lodash.debounce';


eventInput.addEventListener('input', debounce(onEventSearch, 500));

const state = {
  target: 'events',
  page: 1,
  country: 202,
  query: '',
};


async function onEventSearch(e) {
  state.page = 1;
  state.query = e.target.value.trim();
  const data = await fetchEvents(state.target, state.query, state.page);
  createGalleryMarkup(data);
}

// =======================================

countryInput.addEventListener('input', onEventSearchCountries);

async function onEventSearchCountries(e) {
  const dataCountries = await fetchEvents(e);
  console.log(e);
}
