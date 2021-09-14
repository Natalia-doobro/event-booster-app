import { closeMdl, gallery, modal, modalImg, modalOverlay } from './refs';

gallery.addEventListener('click', openModal);
closeMdl.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModalByOverlay);



export function openModal(e) {
  if (e.target.classList.contains('event-image')) {
    modal.classList.add('is-open');
    modalImg.src = e.target.parentNode.parentNode.dataset.url;
  }
}

export function closeModal(el) {
  el.preventDefault();
  modal.classList.remove('is-open');
  modalImg.src = '';

}

export function closeModalByOverlay(el) {
  el.preventDefault();
  modal.classList.remove('is-open');
  modalImg.src = '';


}