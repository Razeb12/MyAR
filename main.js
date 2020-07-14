

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


