

$(document).ready(function () {
    $('#solfas-testimonial').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });
});




$(function () {
    $("#solfas-testimonial").owlCarousel({
        items: 3,
        autoPlay: true,
        smartSpeed: 400,
        look: true,
        autoPlayHoverPause: true,
    });
});

$(function () {
    $('a.smooth-scroll').click(function (event) {
        event.preventDefault();
        var section = $(this).attri("href");
        $('html,body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});
