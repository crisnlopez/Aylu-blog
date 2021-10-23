// Elementos --Nav--
const $header = document.querySelector('header')
const $nav_list = document.getElementsByClassName('nav-lista');
const $btn_menu = document.getElementById('btn-menu');

// Declaración de funciones
const mostrarSaludo = () => {
    const fecha = new Date();
    const hora = fecha.getHours();

    if (hora >= 6 && hora < 12) {
        document.getElementById('txt-saludo').innerHTML = 'Buenos dias!';
        document.getElementById('txt-pregunta').innerHTML = 'Qué vas a ver hoy?';
    } else if (hora >= 12 && hora < 20) {
        document.getElementById('txt-saludo').innerHTML = 'Buenas tardes';
        document.getElementById('txt-pregunta').innerHTML = 'Qué estás viendo hoy?';
    } else {
        document.getElementById('txt-saludo').innerHTML = 'Buenos noches';
        document.getElementById('txt-pregunta').innerHTML = 'Qué viste hoy?';
    }
}

// Eventos
addEventListener('DOMContentLoaded', () => {
    mostrarSaludo();

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