const toggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
        navMenu.classList.remove('open');
    }
});
