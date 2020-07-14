$(document).ready(function () {
    $('.gallerys').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });
});


$(function () {
    $('a.smooth-scroll').click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");

        $('html,body').animate({
            scrollTop: $(section).offset ().top - 64
        }, 1250, "easeInOutExpo")
    })
})

$(function () {
    $("#solfas-testimonial").owlCarousel({
        items: 3,
        autoPlay: true,
        smartSpeed: 400,
        look: true,
        autoPlayHoverPause: true,
    });
});


