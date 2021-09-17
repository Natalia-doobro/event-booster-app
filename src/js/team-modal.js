import teamModalTpl from '../templation/teamModal.hbs';
import teamData from '../data/team.js';

// $('.hover').mouseleave(function () {
//   $(this).removeClass('hover');
// });

const openTeamModal = document.querySelector('.footer-link');
const teamModal = document.querySelector('.modal-team');
// const scrollUp = document.querySelector('.scroll-up');

openTeamModal.addEventListener('click', e => {
  e.preventDefault();

  const teamModalMarkup = teamModalTpl(teamData);
  document.querySelector('.modal-team').innerHTML = teamModalMarkup;

  const btnCloseModal = document.querySelector('.close');
  document.body.style.overflow = 'hidden';
//   scrollUp.style.display = 'none';
  teamModal.classList.remove('is-hidden');
  teamModal.classList.add('is-open');

  btnCloseModal.addEventListener('click', () => {
    document.body.style.overflow = 'visible';
    // scrollUp.style.display = 'block';
    teamModal.classList.remove('is-open');
    teamModal.classList.add('is-hidden');
  });
});