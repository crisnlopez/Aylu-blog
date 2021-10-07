addEventListener('DOMContentLoaded', () => {
    const $btn_menu = document.querySelector('#btn-menu')
    if($btn_menu) {
        $btn_menu.addEventListener('click', () => {
            const $nav_list = document.querySelector('.nav-lista')
            $nav_list.classList.toggle('mostrar') 
        })
    }
})