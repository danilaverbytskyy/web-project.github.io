$(document).ready(function() {


    //First slider
    $("#wwu-slider-1").slick({
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
    $("#wwu-slider-2").slick({
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
                breakpoint:600,
                settings: {slidesToShow: 2}
            }
        ]
    });

    $(".faq-num div:first").addClass("active");
    $(".faq-num p:not(:first)").hide();
    $(".faq-num h3").click(function () {
        if (!$(this).parent().hasClass("active")) {
            $(".faq-num p:visible").slideUp("fast");
            $(this).next("p").slideToggle("fast");
            $(".faq-num div").removeClass("active");
            $(this).parent().toggleClass("active");
        }
        else {
            $(".faq-num p:visible").slideUp("fast");
            $(".faq-num div").removeClass("active");
        }
    });
});