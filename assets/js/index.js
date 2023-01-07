
const sun = document.querySelector('.sun'),
    theme = document.querySelector('#theme-toggle'),
    navMenu = document.querySelector('.nav-menu'),
    overlay = document.querySelector('.overlay'),
    btnMenuOpen = document.querySelector('.btn-open-menu'),
    btnMenuClose = document.querySelector('.btn-close-menu')



theme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    let icon = document.querySelector('#icon')
    icon.classList.toggle('fa-moon')
    icon.classList.toggle('fa-sun')


})


btnMenuOpen.addEventListener('click', toggleMenu)
btnMenuClose.addEventListener('click', closeMenu)
overlay.addEventListener('click', closeMenu)

function closeMenu() {

    navMenu.classList.remove('nav-menu-open')
    overlay.classList.remove('overlay-active')

}
function toggleMenu() {
    navMenu.classList.toggle('nav-menu-open');
    overlay.classList.toggle('overlay-active')
}

