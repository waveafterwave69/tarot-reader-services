const burgerMenu = document.querySelector('.burger-menu')

burgerMenu.addEventListener('click', () => {
    document.querySelector('.overlay').classList.toggle('hidden')
    document.querySelector('.burger-list').classList.toggle('hidden')
    if (document.querySelector('.overlay').classList.contains('hidden')) {
        document
            .querySelector('.burger-menu__img')
            .setAttribute('src', '../img/menu.png')
    } else {
        document
            .querySelector('.burger-menu__img')
            .setAttribute('src', '../img/close.png')
    }

    document.body.classList.toggle('no-scroll')
})

AOS.init({
    once: true,
})
