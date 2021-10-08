// Elementos --Nav--
const $main = document.querySelector('main')
const $header = document.querySelector('header')
const $btn_menu = document.getElementById('btn-menu')
const $nav_list = document.getElementsByClassName('nav-lista')

// Funciones
const onOfMenu = () => $nav_list[0].classList.toggle('mostrar')
const headerSticky = () => $header.classList.toggle('header-sticky')

// llamado de funciones
$main.addEventListener('scroll', headerSticky())
$btn_menu.addEventListener('click', onOfMenu)

