$(document).ready(function () {

    //top slides content tabs

    $('.top-slide-content-element').on('click', function () {
        $('.top-slide-content-element').removeClass('active');
        $(this).addClass('active');
        $('.top-slides-content-elements').addClass('has-active-child');
    });

});