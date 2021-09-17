import axios from 'axios';

axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json?';

export async function fetchEventsByName(query, page) {
  const {
    data: {
      _embedded: { events },
    },
  } = await axios.get(
    `size=20&keyword=${query}&page=${page}&sort=random&apikey=1twKLyrauG3OZrFZiN9ApTE1ANWFyZTo`,
  );
  return events;
}

export async function fetchPopularEvents(page, classification) {
  const {
    data: {
      _embedded: { events },
    },
  } = await axios.get(
    `size=20&page=${page}&sort=relevance,desc&classificationName=${classification}&&apikey=1twKLyrauG3OZrFZiN9ApTE1ANWFyZTo`,
  );
  return events;
}

// ==== запрос стран для второго инпута =============

export async function fetchCountries(page, country) {
  const {
    data: {
      _embedded: { events },
    },
  } = await axios.get(
    `size=20&page=${page}&sort=relevance,desc&countryCode=${country}&apikey=1twKLyrauG3OZrFZiN9ApTE1ANWFyZTo`,
  );
  return events;
}
