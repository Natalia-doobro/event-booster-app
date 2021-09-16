import { fetchEventsByName, fetchPopularEvents } from './api_service';
import { countryInput, eventInput, galleryCard } from './refs';
import { createGalleryMarkup } from './create-markup';
import debounce from 'lodash.debounce';
import { creatModalContentMarkup } from './create_modal_markup';

window.addEventListener('DOMContentLoaded', onLoadPage);
eventInput.addEventListener('input', debounce(onEventSearch, 500));
countryInput.addEventListener('input', onEventSearchCountries);

const state = {
  target: 'events',
  page: 1,
  country: 202,
  query: '',
};

console.log(galleryCard);

async function onLoadPage() {
  state.page = 1;
  const data = await fetchPopularEvents(state.page, state.country);
  createGalleryMarkup(data);

  //как должно быть//
  // galleryCard.addEventListener('click', (el) => {
  //    creatModalContentMarkup(el);
  //   console.log(el);
  //  });

//как выглдяит костыль//
  document.querySelector('.event-card').addEventListener('click', (el) => {
    creatModalContentMarkup(el);
    console.log(el);
  });
  // доступаеться к этой лишке только если я пишу ввод на прямую//
}



export default async function onEventSearch(e) {
  state.page = 1;
  state.query = e.target.value.trim();
  const data = await fetchEventsByName(state.target, state.query, state.page);
  createGalleryMarkup(data);
  // creatModalContentMarkup(data)
}

async function onEventSearchCountries(e) {
  const dataCountries = await fetchEvents(e);
  console.log(e);
}
