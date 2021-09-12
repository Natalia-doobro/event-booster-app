import{ fetchPopularEvents} from './api_service';
import {createGalleryMarkup} from './create-markup';

window.addEventListener('DOMContentLoaded', onLoadPage);

async function onLoadPage() {
    state.page = 1;
    const data = await fetchPopularEvents( state.page, state.country);
    createGalleryMarkup(data);
  }