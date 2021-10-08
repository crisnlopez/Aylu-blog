// Elementos --Nav--
addEventListener('DOMContentLoaded', () => {
    const $btn_menu = document.getElementById('btn-menu');
    const $nav_list = document.getElementsByClassName('nav-lista');

    $btn_menu.addEventListener('click', () => {
        $nav_list[0].classList.toggle('mostrar');
    })
})

