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

export function openModal(e,data) {
  if (e.target.nodeName !== '.event-card') {
    modal.classList.add('is-open');
    body.classList.add('is-hidden');
    const src = data._embedded.events
    const result = src.filter((el) => el.id === e.target.id);
    createModalMarkup(result[0]);
    console.log(result);

  }
}
export function closeModal(el) {
  el.preventDefault();
  modal.classList.remove('is-open');
  body.classList.remove('is-hidden');
}
export function closeModalByOverlay(e) {
  e.preventDefault();
  modal.classList.remove('is-open');
  body.classList.remove('is-hidden');
}