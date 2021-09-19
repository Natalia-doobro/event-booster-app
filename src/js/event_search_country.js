import { countryInput } from './refs';
import { fetchEvents } from './api_service';
import { clearGalleryMarkup, createGalleryMarkup } from './create-markup';
import { state } from './event_search';
import countriesList from '../data_countries.json';
import { debounce } from 'lodash';


