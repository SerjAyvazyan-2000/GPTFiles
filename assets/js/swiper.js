



let reviewsSwiper = new Swiper(".reviews-swiper", {
    spaceBetween: 15,
    slidesPerView: 4,
    // loop:true,

    navigation: {
        nextEl: '.reviews-button-prev',
        prevEl: '.reviews-button-next',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {slidesPerView: 1.1,},
        540: {slidesPerView: 1.3,},
        576: {slidesPerView: 1.6},
        779: {slidesPerView: 2.2},
        954: {slidesPerView: 2.5},
        1139: {slidesPerView: 3},
        1200: {slidesPerView: 4},

    },



});
