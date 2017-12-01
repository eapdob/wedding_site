$(function () {
    // set current year to footer copyright
    var year = new Date().getFullYear();
    var copyright = $(".footer__copyright");
    var text = copyright.text();
    text = year + " " + text;
    copyright.html(text);


    // slider
    $(".hero__slider").owlCarousel({
        items: 1,
        nav: true,
        navText: [],
        dots: true
    });

    // atelleir popup
    $(".atelier__img").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });
});

$(window).on("load", function () {
    // masonry gallery
    var container = $(".gallery__collection");
    container.imagesLoaded(function () {
        container.masonry({
            itemSelector: ".gallery__item",
            columnWidth: ".gallery__item"
        });
    });
});