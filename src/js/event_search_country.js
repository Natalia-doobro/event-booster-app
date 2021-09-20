import { fetchEvents } from './api_service';
import { countryInput, eventInputCounry, btnArrow, countryItem } from './refs';
import { clearGalleryMarkup, createGalleryMarkup } from './create-markup';
import { state } from './event_search';
import countriesList from '../data_countries.json';
import listCountriesTpl from '../templation/list-countries.hbs';
import { add, debounce } from 'lodash';

const markupCountryList = listCountriesTpl(countriesList);
eventInputCounry.insertAdjacentHTML('beforeend', markupCountryList);

/* добавляет класс  скрывает-отображает список стран*/
countryInput.addEventListener('click', countryListVisio);
btnArrow.addEventListener('click', countryListVisio);
window.addEventListener('click', countryListVisioWindow);

function countryListVisio(e) {
  e.stopPropagation();
  eventInputCounry.classList.remove('is-open');
  countryInput.classList.add('input-open');
  // btnArrow.classList.add('icon--rotate');
}

function countryListVisioWindow() {
  eventInputCounry.classList.add('is-open');
  countryInput.classList.remove('input-open');
  // btnArrow.classList.remove('icon--rotate');
}

// countryItem.addEventListener('click', addTextInput);

// function addTextInput() {
//   countryInput.value = countryItem.textContent;
// }

countryInput.addEventListener('input', debounce(onCountrytSearch, 1000));

export async function onCountrytSearch(e) {
  inputHandler();
  const data = await fetchEvents(state.query, state.page, state.classification, state.code);
  clearGalleryMarkup();
  createGalleryMarkup(data);
}

export function inputHandler() {
  countriesList.find(element => {
    if (element.name == countryInput.value) {
      state.code = element.code;
    }
  });

  return state.code;
}

