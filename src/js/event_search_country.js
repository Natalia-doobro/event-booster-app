import { countryInput } from './refs';
import { clearGalleryMarkup, createGalleryMarkup } from './create-markup';
import { state } from './event_search';
import countriesList from '../data_countries.json';

countryInput.addEventListener('input', onCountrytSearch);

export async function onCountrytSearch(e) {
  // state.code = e.target.value.trim();
  // if(countriesList.key.includes(e))
  const data = await fetchCountries(state.page, state.code);
  clearGalleryMarkup();
  createGalleryMarkup(data);
}
