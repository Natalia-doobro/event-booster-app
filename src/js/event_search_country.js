import { fetchEvents } from './api_service';
import { countryInput, eventInputCounry } from './refs';
import { clearGalleryMarkup, createGalleryMarkup } from './create-markup';
import { state } from './event_search';
import countriesList from '../data_countries.json';
import listCountriesTpl from '../templation/list-countries.hbs';
import { debounce } from 'lodash';

const markupCountryList = listCountriesTpl(countriesList);

eventInputCounry.insertAdjacentHTML('beforeend', markupCountryList);

countryInput.addEventListener('input', debounce(onCountrytSearch, 1000));

export async function onCountrytSearch(e) {
  inputHandler();
  const data = await fetchEvents(state.query, state.page, state.classification, state.code);
  clearGalleryMarkup();
  createGalleryMarkup(data);
}

export function inputHandler() {
  countriesList.find(element => {
    if (element.name === countryInput.value) {
      state.code = element.code;
    }
  });

  return state.code;
}
