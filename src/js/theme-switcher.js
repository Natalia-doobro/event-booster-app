const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const btnChange = document.querySelector('#theme-switch-toggle');
btnChange.addEventListener('change', themeChange);


const bodyRef = document.body;
const containerRef = document.querySelector('.container');
const headerRef = document.querySelector('.header-bg');
const footerRef = document.querySelector('.footer-section');

const fixTheme = localStorage.getItem('theme');

if (!fixTheme) {
    localStorage.setItem('theme', Theme.DARK)
    bodyRef.classList.add('dark-theme');
}

function themeChange() {
    if (btnChange.checked !== true) {
        bodyRef.classList.add('dark-theme');
        bodyRef.classList.remove('light-theme');
        headerRef.classList.add('dark-theme');
        headerRef.classList.remove('light-theme');
        footerRef.classList.add('dark-theme');
        footerRef.classList.remove('light-theme');
        localStorage.setItem('theme', Theme.DARK);
    } else { 
        bodyRef.classList.add('light-theme');
        bodyRef.classList.remove('dark-theme');
        headerRef.classList.add('light-theme');
        headerRef.classList.remove('dark-theme');
        footerRef.classList.add('light-theme');
        footerRef.classList.remove('dark-theme');
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

if (fixTheme === Theme.LIGHT) {
    bodyRef.classList.add('light-theme');
    bodyRef.classList.remove('dark-theme');
    headerRef.classList.add('light-theme');
    headerRef.classList.remove('dark-theme');
    footerRef.classList.add('light-theme');
        footerRef.classList.remove('dark-theme');
     btnChange.checked = true; 
} else if (fixTheme === Theme.DARK) {
    bodyRef.classList.add('dark-theme');
    bodyRef.classList.remove('light-theme');
    headerRef.classList.add('dark-theme');
    headerRef.classList.remove('light-theme');
    footerRef.classList.add('dark-theme');
        footerRef.classList.remove('light-theme');
      
}

