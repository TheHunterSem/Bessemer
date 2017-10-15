$(document).ready(function () {

    $('.sp-image-link').magnificPopup({
        type: 'image',
        // Delay in milliseconds before popup is removed
        removalDelay: 300,

        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade'
    });

    $('.slider-pro').sliderPro({
        width: 356,
        height: 430,
        responsive: true,
        autoplay: false,
        orientation: 'vertical',
        loop: false,
        arrows: true,
        buttons: false,
        thumbnailsPosition: 'right',
        thumbnailPointer: false,
        thumbnailArrows: true,
        thumbnailWidth: 93,
        thumbnailHeight: 113,
        breakpoints: {
            1023: {
                arrows: false,
                buttons: true,
                orientation: 'horizontal',
                thumbnailWidth: 0,
                thumbnailHeight: 0
            },
            320: {
                arrows: false,
                buttons: true,
                orientation: 'horizontal',
                thumbnailWidth: 0,
                thumbnailHeight: 0,
                width: 280,
                height: 340
            }
        }
    });

    //top slides content tabs

    function RecolorOfTabs() {

        if( $(window).width() < 1023 ) {


            if( $('.top-slide-content-element:last').hasClass('active')) {
                $('.top-slides-content-elements').addClass('last-element-active');
                $('.top-slide-content-element:last').removeClass('last-element-active');
            } else {
                $('.top-slides-content-elements').removeClass('last-element-active');
            }

        } else {

            if($('.top-slide-content-element:last').hasClass('active')) {
                $('.top-slide-content-element').addClass('last-element-active');
                $('.top-slide-content-element:last').removeClass('last-element-active');
            } else {
                $('.top-slide-content-element').removeClass('last-element-active');
            }

        }
    }

    $('.top-slide-content-element').on('click', function () {
        $('.top-slide-content-element').removeClass('active');
        $(this).addClass('active');
        $('.top-slides-content-elements').addClass('has-active-child delay');
        RecolorOfTabs();
    });

    $('.top-slide-content-element-preview-block .content-block .close-button .plus-icon').on('click', function (e) {
        e.stopPropagation();
        $('.top-slide-content-element').removeClass('active');
        $('.top-slides-content-elements').removeClass('has-active-child');
        setTimeout(function () {
            $('.top-slides-content-elements').removeClass('delay');
        }, 1300 );

    });


    //MENU START

    function ActivationMobileMenu() {

        if($('.mobile-btn-wrapper').hasClass('active')) {
            $('.mobile-btn-wrapper').removeClass('active');
            setTimeout(function () {
                $('.header-navigation-items').removeClass('active');
            }, 400);
        } else {
            $('.mobile-btn-wrapper').addClass('active');
            setTimeout(function () {
                $('.header-navigation-items').addClass('active');
            }, 400);
        }

    }

    $('.mobile-btn-wrapper').on('click', function () {

        ActivationMobileMenu();

    });

    /*function fixedHeader() {
        var
            boss = $(window),
            y = boss.scrollTop();
        if (y > (70)) {
            $('.mfp-bg, .mfp-wrap').addClass('fixed');
        } else {
            $('.mfp-bg, .mfp-wrap').removeClass('fixed');
        }
    }
    $(window).on('scroll', function() {
        fixedHeader();
    });*/

    //MENU START

});