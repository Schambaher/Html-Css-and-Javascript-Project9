$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            }
        },
        dotsClass: 'hero-owl-dots',
        dotClass: 'hero-owl-dot'
    });
});