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
            960: {
                arrows: false,
                buttons: true,
                orientation: 'horizontal',
                thumbnailWidth: 0,
                thumbnailHeight: 0
            },
            890: {
                width: 280,
                height: 340,
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

        if( $(window).width() > 767 ) {

            if( $('.top-slide-content-element:last').hasClass('active')) {
                $('.top-slides-content-elements').addClass('last-element-active');
                $('.top-slide-content-element:last').addClass('last-element-active');
            } else {
                $('.top-slides-content-elements').removeClass('last-element-active');
                $('.top-slide-content-element:last').removeClass('last-element-active');
            }

        } else {

            if($('.top-slide-content-element:last').hasClass('active')) {
                $('.top-slides-content-elements').addClass('last-element-active');
                $('.top-slide-content-element:last').addClass('last-element-active');
            } else {
                $('.top-slide-content-element:last').removeClass('last-element-active');
                $('.top-slides-content-elements').removeClass('last-element-active');
            }

        }

    }

/*    var ContentInsideHeight = $('.top-slide-content-element').outerHeight();

    console.log(ContentInsideHeight);*/

   /* function FindContentHeight() {
        var ElementToFind = $('.top-slides-content-elements.has-active-child .top-slide-content-element.active');
        $(ElementToFind).each(function (index, elem) {
            $(this).find('.main-content-inside').outerHeight();
        });
    }*/


    $('.top-slide-content-element').on('click', function () {
        if(!$(this).hasClass('active')){
            $('.top-slides-content-elements .top-slide-content-element').addClass('light-effect');
            setTimeout(function () {
                $('.top-slides-content-elements .top-slide-content-element').removeClass('light-effect');
            }, 1000);
        }
        $('.top-slide-content-element').removeClass('active');
        $(this).addClass('active');
        $('.top-slides-content-elements').addClass('has-active-child delay');
        RecolorOfTabs();
        setTimeout(function () {
            $('.read-more-block-mobile').removeClass('rotate');
        }, 1000);
        setTimeout(function () {
            $('.top-slide-content-element.active .read-more-block-mobile').addClass('rotate');
        }, 1000);
    });

    $('.read-more-block-mobile').on('click', function (e) {
        e.stopPropagation();
        $('.top-slide-content-element-preview-block .content-block .close-button').trigger('click',function () {
        });

    });

    $('.top-slide-content-element-preview-block .content-block .close-button').on('click', function (e) {
        e.stopPropagation();
        $('.top-slide-content-element').removeClass('active');
        $('.top-slides-content-elements').removeClass('has-active-child');
        setTimeout(function () {
            $('.top-slides-content-elements').removeClass('delay');
        }, 1000 );
        $('.top-slide-content-element').removeClass('light-effect');
        $('.top-slides-content-elements').removeClass('last-element-active');
        setTimeout(function () {
            $('.read-more-block-mobile').removeClass('rotate');
        }, 1000);
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


    //MENU START

});