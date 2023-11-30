

const darkModeToggle = document.getElementById('dark-toggle');
darkModeToggle.style.visibility="visible";
darkmode=false;
let darkmode = localStorage.getItem('darkmode') === 'true';

darkModeToggle.addEventListener('click', () => {
    if (!darkmode) {
        document.body.style.setProperty('--text-color', 'white');
        document.body.style.setProperty('--body-bg-color', 'black');
        document.body.style.setProperty('--nav-bg-color', 'color(display-p3 0.15 0.5 0.7)');
        document.body.style.setProperty('--form-bg-color', '#c0a080');
    } else {
        document.body.style.setProperty('--text-color', 'black');
        document.body.style.setProperty('--body-bg-color', 'white');
        document.body.style.setProperty('--nav-bg-color', 'color(display-p3 0.15 0.5 0.9)');
        document.body.style.setProperty('--form-bg-color', '#f5f5d');
    }
    darkmode=!darkmode;
    localStorage.setItem('darkmode', darkmode);
});
