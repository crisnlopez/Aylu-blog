// Elementos --Nav--
addEventListener('DOMContentLoaded', () => {
    const $btn_menu = document.getElementById('btn-menu');
    const $nav_list = document.getElementsByClassName('nav-lista');
    const $header = document.querySelector('header')

    $btn_menu.addEventListener('click', () => {
        $nav_list[0].classList.toggle('mostrar');
    })

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        (scrolled !== 0) 
        ? console.info('no estas en top')
        : console.info('estas en top')
    })
})