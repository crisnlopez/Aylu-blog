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

addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const windowWidth = window.innerWidth;

    if ((windowWidth > 1029) && (scrolled !== 0)) {
        $header.classList.add('flotante')
    }  else {
        $header.classList.remove('flotante')
    }
})

// Masonry
const elem = document.querySelector('.gallery-container');

imagesLoaded( elem, () => {
    const msnry = new Masonry( elem, {
      // options
      itemSelector: '.gallery__item',
      columnWidth: 320,
      gutter: 15,
      isFitWidth: true,
      horizontalOrder: true
    });
})