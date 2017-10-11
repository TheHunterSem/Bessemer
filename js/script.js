$(document).ready(function () {

    $('.sp-image-link').magnificPopup({
        type:'image'
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
            }
        }
    });

    //top slides content tabs

    $('.top-slide-content-element').on('click', function () {
        $('.top-slide-content-element').removeClass('active');
        $(this).addClass('active');
        $('.top-slides-content-elements').addClass('has-active-child');
    });

    $('.top-slide-content-element-preview-block .content-block .close-button .plus-icon').on('click', function (e) {
        e.stopPropagation();
        $('.top-slide-content-element').removeClass('active');
        $('.top-slides-content-elements').removeClass('has-active-child');
    });


    //MENU START

    $('.mobile-btn-wrapper').click(function () {
        if($('.mobile-btn-wrapper').hasClass('active')) {
            $('.mobile-btn-wrapper').removeClass('active');
        } else {
            $('.mobile-btn-wrapper').addClass('active');
        }
        if($('.header-navigation-items').hasClass('active')) {
            $('.header-navigation-items').removeClass('active');
        } else {
            $('.header-navigation-items').addClass('active');
        }
    });

    function fixedHeader() {
        var
            boss = $(window),
            y = boss.scrollTop();
        if (y > (70)) {
            $('.header-navigation-items.active, .mfp-bg, .mfp-wrap').addClass('fixed');
        } else {
            $('.header-navigation-items.active, .mfp-bg, .mfp-wrap').removeClass('fixed');
        }
    }
    $(window).on('scroll', function() {
        fixedHeader();
    });

    //MENU START

});