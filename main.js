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
AOS.init();

hljs.initHighlightingOnLoad();

$('.hero__scroll').on('click', function (e) {
    $('html, body').animate({
        scrollTop: $(window).height()
    }, 1200);
});

$(document).ready(function () {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    // If element is scrolled into view, fade it in
    $(window).scroll(function () {
        $('.scroll-animations .animated').each(function () {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('fadeInLeft');
            }
        });
    });
});
