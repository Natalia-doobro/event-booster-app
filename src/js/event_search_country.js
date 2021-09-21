import { fetchEvents } from './api_service';
import { countryInput, eventInputCounry, btnArrow, countryItem} from './refs';
import { clearGalleryMarkup, createGalleryMarkup } from './create-markup';
import { error, info, success } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import { state } from './event_search';
import countriesList from '../data_countries.json';
import listCountriesTpl from '../templation/list-countries.hbs';
import { add, debounce } from 'lodash';
import 'select-pure';

const markupCountryList = listCountriesTpl(countriesList);
eventInputCounry.insertAdjacentHTML('beforeend', markupCountryList);

eventInputCounry.addEventListener('change', onCountrytSearch);

export async function onCountrytSearch(e) {
  try {
    const data = await fetchEvents(
      state.query,
      state.page,
      state.classification,
      eventInputCounry.value,
    );
    clearGalleryMarkup();
    createGalleryMarkup(data);
    if (data._embedded.events.length > 1 && e.target.value.length >= 2) {
      success({
        text: `Congratulations! Events for your request were found`,
        delay: 1000,
        maxTextHeight: null,
      });
      
    } 
  } catch (err) {
    clearGalleryMarkup();
    error({
      text: 'Can not find any event for your request',
      delay: 1000,
      maxTextHeight: null,
    });
  }
}
