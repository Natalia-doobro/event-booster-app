import fetchEventsByName from './api_service';
import { eventInput, countryInput, gallery } from './refs';
import { createGalleryMarkup } from './create-markup';

eventInput.addEventListener('input', onEventSearch);

const state = {
  page: 1,
  query: '',
};

async function onEventSearch(e) {
  state.page = 1;
  // if (!e.currentTarget.elements.query.value.trim()) {
  //   return;
  // }
  state.query = eventInput.value.trim();
  const data = await fetchEvents(state.query, state.page);
  createGalleryMarkup(data);
}

// =======================================

countryInput.addEventListener('input', onEventSearchCountries);
async function onEventSearchCountries(e) {
  const dataCountries = await fetchEvents(e);
  console.log(e);
}
