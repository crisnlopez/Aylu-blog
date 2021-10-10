// Elementos --Nav--
const $btn_menu = document.getElementById('btn-menu');
const $nav_list = document.getElementsByClassName('nav-lista');
const $header = document.querySelector('header')

addEventListener('DOMContentLoaded', () => {
    $btn_menu.addEventListener('click', () => {
        $nav_list[0].classList.toggle('mostrar');
    })
})

addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const windowWidth = window.innerWidth;

    if ((windowWidth > 1029) && (scrolled !== 0)) {
        $header.classList.add('flotante')
    }  else {
        $header.classList.remove('flotante')
    }
})