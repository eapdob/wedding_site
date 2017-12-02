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

    // ateleir popup
    $(".atelier__img").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
        },
        mainClass: "mfp-fade"
    });

    // gallery popup
    $(".gallery__img").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
        },
        mainClass: "mfp-fade"
    });


    $(".dress__title").animated("fadeInUp", "fadeOutDown");
    $(".atelier__title").animated("fadeInLeft", "fadeOutLeft");
    $(".review__title").animated("fadeInUp", "fadeOutDown");
    $(".gallery__title").animated("fadeInUp", "fadeOutDown");
    $(".booking__title").animated("fadeInUp", "fadeOutDown");
    // $(".dress__title").waypoint(function(direction) {
    //     if (direction === "down") {
    //         console.log("down");
    //         $($(this)[0]['element']).addClass("animated bounceInDown").css("opacity", "1");
    //     } else {
    //         console.log("up");
    //     }
    // }, {
    //     offset: '80%'
    // });
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