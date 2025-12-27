const personSwiper = new Swiper('.person-section', {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    speed: 600,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    grabCursor: true,
    allowTouchMove: true,

    breakpoints: {
        0: {

        },
        576: {

        },
        768: {

        },
        992: {

        },
        1200: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 4,
        },
    },
})