import { closeMdl, modal } from './refs';
import { clearModalMarkup, createModalMarkup } from './create-modal-markup';

// gallery.addEventListener('click', openModal);
closeMdl.addEventListener('click', (el, data) => {
  closeModal(el);
  clearModalMarkup(data);
});

// modalOverlay.addEventListener('click', closeModalByOverlay);


export function openModal(e, data) {
  if (e.target.nodeName !== '.event-card') {
    modal.classList.add('is-open');
    const result = data.filter((el) => el.id === e.target.id);
    createModalMarkup(result[0]);
    console.log(result);

  }

}
export function closeModal(el) {
  el.preventDefault();
  modal.classList.remove('is-open');


}

// export function closeModalByOverlay(el) {
//   el.preventDefault();
//   modal.classList.remove('is-open');
//   modalImg.src = '';
//
//
// }