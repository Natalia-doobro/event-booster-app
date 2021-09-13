import axios from 'axios';

axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';

export default async function fetchEventsByName(query, page) {
  const {
    data: {
      _embedded: { events },
    },
  } = await axios.get(
    `events.json?size=20&keyword=${query}&page=${page}&apikey=1twKLyrauG3OZrFZiN9ApTE1ANWFyZTo`,
  );
  return events;
}

// =======================================================

import countriesListTpl from '../templates/listCountries.hbs';

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';
const API_KEY = '1twKLyrauG3OZrFZiN9ApTE1ANWFyZTo';

fetch(`${BASE_URL}/events.json?apikey=${API_KEY}`)
  .then(resonse => resonse.json())
  .then(countries => {
    console.log(countries._embedded.events);
    const markup = countriesListTpl(countries);
    console.log(markup);
  })
  .catch(err => console.log(err));
