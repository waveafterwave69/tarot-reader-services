const imgLeft = document.querySelector('.img-left')

if (window.innerWidth < 1750) {
    imgLeft.style.transform = 'rotate(270deg)'
    imgLeft.style.opacity = '0.6'
}

// menu

const burgerMenu = document.querySelector('.burger-menu')

burgerMenu.addEventListener('click', () => {
    document.querySelector('.overlay').classList.toggle('hidden')
    document.querySelector('.burger-list').classList.toggle('hidden')
    if (document.querySelector('.overlay').classList.contains('hidden')) {
        document
            .querySelector('.burger-menu__img')
            .setAttribute('src', './img/menu.png')
    } else {
        document
            .querySelector('.burger-menu__img')
            .setAttribute('src', './img/close.png')
    }

    document.body.classList.toggle('no-scroll')
})

// AOS

AOS.init({
    once: true,
})

// swiper

if (window.innerWidth > 480) {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.reviews__btn-right',
            prevEl: '.reviews__btn-left',
        },
    })
} else {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.reviews__btn-right-mobile',
            prevEl: '.reviews__btn-left-mobile',
        },
    })
}
