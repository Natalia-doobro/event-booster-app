const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const bodyRef = document.body;
const containerRef = document.querySelector('.container');
const headerRef = document.querySelector('.header-bg');

const btnChange = document.querySelector('#theme-switch-toggle');
btnChange.addEventListener('change', themeChange);

const fixTheme = localStorage.getItem();

if (!fixTheme) {
    bodyRef.classList.add('dark-theme');
    localStorage.setItem('current-theme', Theme.DARK)
}

function themeChange() {
    if (btnChange.checked!==true) {
        bodyRef.classList.add('dark-theme');
        bodyRef.classList.remove('light-theme');
        headerRef.classList.add('dark-theme');
        headerRef.classList.remove('light-theme');
        localStorage.setItem('current-theme', Theme.DARK);
    } else { 
        bodyRef.classList.add('light-theme');
        bodyRef.classList.remove('dark-theme');
        headerRef.classList.add('light-theme');
        headerRef.classList.remove('dark-theme');
        localStorage.setItem('current-theme', Theme.LIGHT);
    }
}

if (fixTheme === Theme.LIGHT) {
    bodyRef.classList.add('light-theme');
    bodyRef.classList.remove('dark-theme');
} else if (fixTheme === Theme.DARK) {
    bodyRef.classList.add('dark-theme');
    bodyRef.classList.remove('light-theme');
    btnChange.checked = true;    
}

