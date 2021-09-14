import axios from 'axios';

axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json?';

export async function fetchEventsByName(query, page){
  const {data: {_embedded: {events}}} = await axios.get(`size=20&keyword=${query}&page=${page}&apikey=1twKLyrauG3OZrFZiN9ApTE1ANWFyZTo`)
  return events; 
}

export async function fetchPopularEvents(page, classification, country){
  const {data: {_embedded: {events}}} = await axios.get(`size=20&page=${page}&sort=random&classificationName=${classification}&marketId=${country}&apikey=1twKLyrauG3OZrFZiN9ApTE1ANWFyZTo`)
 return events;
}