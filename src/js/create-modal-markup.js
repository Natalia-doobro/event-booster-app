import ModalMarkUp from '../templation/modal.hbs';
import { modalGallery } from './refs';

export function createModalMarkup(embedded) {
  const markUp = ModalMarkUp(embedded);
  modalGallery.insertAdjacentHTML('beforeend', markUp);
}

export function clearModalMarkup() {
  modalGallery.innerHTML = '';
}