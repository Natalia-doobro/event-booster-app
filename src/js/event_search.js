import { fetchEvents } from './api_service';
import { eventInput, gallery } from './refs';
import { clearGalleryMarkup, createGalleryMarkup } from './create-markup';
import debounce from 'lodash.debounce';
import { error, info, success } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import { openModal } from './modal';
import { myPagination, container, options} from './pagination.js';
// import { Pagination } from 'tui-pagination';

window.addEventListener('DOMContentLoaded', onLoadPage);
// eventInput.addEventListener('input', debounce(onEventSearch, 1000));

export const state = {
  page: 1,
  query: '',
  classification: 'music',
  country: '',
  code: '',
  
};

export async function onLoadPage() {

  // state.page = 1;
  const data = await fetchEvents(state.query, state.page, state.classification, state.country);
  clearGalleryMarkup();
  createGalleryMarkup(data);
  
  gallery.addEventListener('click', e => {
    openModal(e, data);
  });

  info({
    text: `Type a name/genre/place of the event`,
    delay: 2000,
    maxTextHeight: null,
  });
  const pageSize = data.page.size;
  const totalPages = data.page.totalPages;
  const totalEl = data.page.totalElements;
  console.log(myPagination);
  myPagination._options.totalItems = totalEl;
  console.log(myPagination._options.totalItems);
  myPagination._options.itemsPerPage = pageSize;
  console.log(myPagination._options.itemsPerPage);
    
  console.log(totalPages);
  console.log(totalEl);
  
  eventInput.addEventListener('input', debounce(onEventSearch, 1000));  
}




// export function getLastPage() {
//   const lastPage = Math.ceil(totalEl / totalPages);
//   return !lastPage ? 1 : lastPage;
// }
// _getLastPage: function() {
//   var lastPage = Math.ceil(this._options.totalItems / this._options.itemsPerPage);

//   return !lastPage ? 1 : lastPage;
// },


export async function onEventSearch(e) {
  state.page = 1;
  state.query = e.target.value.trim();
  // resetPage();
  console.log(state.page);
  try {
    const data = await fetchEvents(state.query, state.page, state.classification, state.country);
    clearGalleryMarkup();
    createGalleryMarkup(data);
    console.log(state.page);
    // incrementPage();
    if (data._embedded.events.length > 1 && e.target.value.length > 3) {
      success({
        text: `Congratulations! Events for your request were found`,
        delay: 1000,
        maxTextHeight: null,
      });
    } 
    // else {
    //   onLoadPage();
    // }
  } catch (err) {
    e.target.value = '';
    gallery.innerHTML = 'Oops :(';
    error({
      text: 'Can not find any event for your request',
      delay: 1000,
      maxTextHeight: null,
    });
  }
}



// =======================================

// countryInput.addEventListener('input', onEventSearchCountries);

// async function onCountrytSearch(e) {
//   state.code = e.target.value.trim();
//   const data = await fetchCountries(state.page, state.code);
//   clearGalleryMarkup();
//   createGalleryMarkup(data);
// }



