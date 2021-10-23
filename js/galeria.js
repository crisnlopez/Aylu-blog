// Elementos --Nav--
const $header = document.querySelector('header')
const $nav_list = document.getElementsByClassName('nav-lista');
const $btn_menu = document.getElementById('btn-menu');

// Eventos
addEventListener('DOMContentLoaded', () => {

    $btn_menu.addEventListener('click', () => {
        $nav_list[0].classList.toggle('mostrar');
    })
})