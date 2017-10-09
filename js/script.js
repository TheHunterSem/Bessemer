$(document).ready(function () {

    $('.sp-image-link').magnificPopup({
        type:'image'
    });

    //top slides content tabs

    $('.top-slide-content-element').on('click', function () {
        $('.top-slide-content-element').removeClass('active');
        $(this).addClass('active');
        $('.top-slides-content-elements').addClass('has-active-child');
        $('.slider-pro').sliderPro({
            width: 356,
            height: 430,
            autoplay: false,
            orientation: 'vertical',
            loop: false,
            arrows: true,
            buttons: false,
            thumbnailsPosition: 'right',
            thumbnailPointer: false,
            thumbnailArrows: true,
            thumbnailWidth: 93,
            thumbnailHeight: 113
        });
    });

    $('.top-slide-content-element-preview-block .content-block .close-button .plus-icon').on('click', function (e) {
        e.stopPropagation();
        $('.top-slide-content-element').removeClass('active');
        $('.top-slides-content-elements').removeClass('has-active-child');
    });

});