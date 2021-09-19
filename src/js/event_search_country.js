import { countryInput, eventInputCounry } from './refs';
import { clearGalleryMarkup, createGalleryMarkup } from './create-markup';
import { state } from './event_search';
import countriesList from '../data_countries.json';
import listCountriesTpl from '../templation/list-countries.hbs';
import { before } from 'lodash';

const markupCountryList = listCountriesTpl(countriesList);

// console.log(markupCountryList);
eventInputCounry.insertAdjacentHTML('beforeend', markupCountryList);

countryInput.addEventListener('input', debounce(onCountrytSearch, 1000));

function inputHandler() {
  const keys = Object.keys(countriesList);
  const country = keys.find(key => {
    if (key.includes(countryInput.value)) {
      return key;
    }
  });

  state.code = countriesList[country];
  return state.code;
}

export async function onCountrytSearch(e) {
  inputHandler();
  const data = await fetchEvents(state.query, state.page, state.classification, state.code);
  clearGalleryMarkup();
  createGalleryMarkup(data);
}
