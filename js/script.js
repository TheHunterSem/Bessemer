$(document).ready(function () {

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

});