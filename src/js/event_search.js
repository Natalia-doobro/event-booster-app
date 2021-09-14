import{ fetchPopularEvents, fetchEventsByName} from './api_service';
import {eventInput, countryInput, gallery} from './refs';
import {createGalleryMarkup} from './create-markup'
import debounce from 'lodash.debounce';

window.addEventListener('DOMContentLoaded', onLoadPage);
eventInput.addEventListener('input', debounce(onEventSearch, 500));


export const state = {
  target: 'events',
  page: 1,
  country: 202,
  query: '',
};


export async function onLoadPage() {    
  const data = await fetchPopularEvents(state.page, state.country);
  createGalleryMarkup(data);  
  }
 
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



  

export async function onEventSearch(e) {
  state.page = 1;
  state.query = e.target.value.trim();
  const data = await fetchEventsByName(state.target, state.query, state.page);
  createGalleryMarkup(data);
  incrementPage();
}

// =======================================

countryInput.addEventListener('input', onEventSearchCountries);

async function onEventSearchCountries(e) {
  const dataCountries = await fetchEvents(e);
  console.log(e);
}


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