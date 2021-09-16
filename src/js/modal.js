import { closeMdl, galleryCard, modal } from './refs';


galleryCard.addEventListener('click', openModal);
closeMdl.addEventListener('click', closeModal);

// modalOverlay.addEventListener('click', closeModalByOverlay);

export function openModal(e) {
  if (e.target.classList.contains('event-card')) {
    modal.classList.add('is-open');
  }
}

export function closeModal() {
  modal.classList.remove('is-open');

}

// export function closeModalByOverlay(el) {
//   el.preventDefault();
//   modal.classList.remove('is-open');
//   modalImg.src = '';
//
//
// }