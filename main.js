$(document).ready(function() {
    //First slider
    $(".wwu-slider-1").slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10%',
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {slidesToShow: 3}
            },
            {
                breakpoint: 600,
                settings: {slidesToShow: 2}
            }
        ]
    });

    //Second slider
    $(".wwu-slider-2").slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10%',
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {slidesToShow: 3}
            },
            {
                breakpoint: 600,
                settings: {slidesToShow: 2}
            }
        ]
    });
})


