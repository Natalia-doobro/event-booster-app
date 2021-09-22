import { body, closeMdl, modal, modalOverlay } from './refs';
import { clearModalMarkup, createModalMarkup } from './create-modal-markup';

closeMdl.addEventListener('click', (e) => {
  closeModal(e);
  clearModalMarkup(e);
});
modalOverlay.addEventListener('click', (e) => {
  clearModalMarkup(e);
  closeModalByOverlay(e);
});


export function openModal(e, data) {
  if (e.target.nodeName === 'LI') {
    modal.classList.add('is_open');
    body.classList.add('is_hidden');
    const src = data._embedded.events;
    const result = src.filter((el) => el.id === e.target.id);
    if (result.length > 0) {
      createModalMarkup(result[0]);
    }
  }
}
export function closeModal(el) {
  el.preventDefault();
  modal.classList.remove('is_open');
  body.classList.remove('is_hidden');

}
export function closeModalByOverlay(e) {
  e.preventDefault();
  modal.classList.remove('is_open');
  body.classList.remove('is_hidden');
}

