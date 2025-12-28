const btnClose = document.querySelector('.btn-close')
const openMenuBtn = document.querySelector('.btn-open-menu')
const hiddenMenu = document.querySelector('.hidden-menu-left')

openMenuBtn.addEventListener('click', () => {
    hiddenMenu.classList.add('open')
})

btnClose.addEventListener('click', () => {
    hiddenMenu.classList.remove('open')
})

// Xu ly khi click vao vung k phai menu thi cung dong menu
document.addEventListener('click', (e) => {
    if (!hiddenMenu.contains(e.target) && !openMenuBtn.contains(e.target)) {
        hiddenMenu.classList.remove('open')
    }
})