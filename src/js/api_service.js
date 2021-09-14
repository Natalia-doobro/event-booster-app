import axios from 'axios';

axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';

export async function fetchEventsByName(target, query, page){
  const {data: {_embedded: {events}}} = await axios.get(`${target}.json?size=20&keyword=${query}&page=${page}&apikey=1twKLyrauG3OZrFZiN9ApTE1ANWFyZTo`)
  return events; 
}

export async function fetchPopularEvents(page, country){
  const {data: {_embedded: {events}}} = await axios.get(`events.json?size=20&page=${page}&sort=random&marketId=${country}&apikey=1twKLyrauG3OZrFZiN9ApTE1ANWFyZTo`)
  return events;
}


