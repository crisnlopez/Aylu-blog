// Validación del formulario
(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();

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
