import modalContent from '../templation/modal.hbs';
import { modalGallery } from './refs';

export function creatModalContentMarkup(events) {
  const markup = modalContent(events);
  modalGallery.insertAdjacentHTML('afterbegin', markup);

}
