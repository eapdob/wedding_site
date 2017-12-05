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

    // animation section title
    $(".dress__title").animated("fadeInUp", "fadeOutDown");
    $(".atelier__title").animated("fadeInLeft", "fadeOutLeft");
    $(".review__title").animated("fadeInUp", "fadeOutDown");
    $(".gallery__title").animated("fadeInUp", "fadeOutDown");
    $(".booking__title").animated("fadeInUp", "fadeOutDown");

    // window resizing
    $(window).on("resize", function() {
        // change to mobile menu
        if ($(window).width() < 992) {
            $(".header__nav").appendTo($(".mobileMenu"));
        } else {
            $(".header__nav").appendTo($(".desktopMenu"));
        }
        $(".sandwich").removeClass("active");
        $(".mobileMenu").removeClass("active");
        $(".hero__title, .hero__btn, .hero .owl-next, .hero .owl-prev").removeClass("opacify");
    });
    $(window).trigger("resize");

    // mobile menu click
    $(".toggleMenu").on("click", function() {
        if ($(".mobileMenu").css("opacity") === "1") {
            $(".sandwich").removeClass("active");
            $(".mobileMenu").removeClass("active");
            $(".hero__title, .hero__btn, .hero .owl-next, .hero .owl-prev").removeClass("opacify");
        } else {
            $(".sandwich").addClass("active");
            $(".mobileMenu").addClass("active");
            $(".hero__title, .hero__btn, .hero .owl-next, .hero .owl-prev").addClass("opacify");
        }
    });

    // smooth scroll
    $(".menu .menu__item a").mPageScroll2id();

    // disable menu
    $(".menu .menu__item a").on("click", function() {
        $(".sandwich").removeClass("active");
        $(".mobileMenu").removeClass("active");
        $(".hero__title, .hero__btn, .hero .owl-next, .hero .owl-prev").removeClass("opacify");
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