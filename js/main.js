(function ($) {

"use strict";

    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });


   // WOW active

    if ($(".wow").length) {

        var wow = new WOW({

            boxClass: 'wow',      // animated element css class (default is wow)

            animateClass: 'animated', // animation css class (default is animated)

            offset: 20,          // distance to the element when triggering the animation (default is 0)

            mobile: true,       // trigger animations on mobile devices (default is true)

            live: true,       // act on asynchronously loaded content (default is true)

        });

        wow.init();

    }

    //One Page Nav

    if ($(".header-area").length) {

         var top_offset = $('.header-area').height() - 10;

         $('.main-menu nav ul').onePageNav({

             currentClass: 'active',

             scrollOffset: top_offset,

         });

    }

    //  AOS Animation

    if ($("[data-aos]").length) {

        AOS.init({

            duration: 1000,

            mirror: true

        });

    }

    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop();

        if (scroll < 245) {

            $("#header-sticky").removeClass("sticky-bar");

        } else {

            $("#header-sticky").addClass("sticky-bar");

        }

    });


        /* ==== 11. ScrollUp ==== */
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        zIndex: 8888,
        animation: 'fade'
    });


    jQuery(window).on("load", function() {  
        //preloader
        $('.preloader').fadeOut(1000);
    });




})(jQuery);