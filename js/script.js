jQuery(document).ready(function () {


    jQuery('.sp-image-link').magnificPopup({
        type: 'image',
        // Delay in milliseconds before popup is removed
        removalDelay: 300,

        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade'
    });


    //slider on main page inside the section
    jQuery('.slider-pro').sliderPro({
        width: 356,
        height: 430,
        responsive: true,
        autoplay: false,
        orientation: 'vertical',
        loop: false,
        arrows: true,
        buttons: true,
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

    //clients page big images slider
    jQuery('.prefooter-slider-wrapper').slick({
        centerMode: true,
        autoplay: true,
        loop: true,
        variableWidth: true,
        centerPadding: '0px',
        slidesToShow: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    arrows: false,
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });

    //top slides content tabs

    function RecolorOfTabs() {

        if (jQuery(window).width() > 767) {

            if (jQuery('.top-slide-content-element:last').hasClass('active')) {
                jQuery('.top-slides-content-elements').addClass('last-element-active');
                jQuery('.top-slide-content-element:last').addClass('last-element-active');
            } else {
                jQuery('.top-slides-content-elements').removeClass('last-element-active');
                jQuery('.top-slide-content-element:last').removeClass('last-element-active');
            }

        } else {

            if (jQuery('.top-slide-content-element:last').hasClass('active')) {
                jQuery('.top-slides-content-elements').addClass('last-element-active');
                jQuery('.top-slide-content-element:last').addClass('last-element-active');
            } else {
                jQuery('.top-slide-content-element:last').removeClass('last-element-active');
                jQuery('.top-slides-content-elements').removeClass('last-element-active');
            }

        }

    }


    // Формування висоти секції в залежності від висоти контенту (мобільна версія)
    function HeightMainSections() {

        if (jQuery(window).width() >= 768) {
            jQuery('.top-slides-content-elements.has-active-child .top-slide-content-element.active,.top-slides-content-elements .top-slide-content-element').css({'height': 'inherit'});
        } else {
            jQuery('.top-slides-content-elements.has-active-child .top-slide-content-element.active,.top-slides-content-elements .top-slide-content-element').css({'height': SectionHeight});
        }

    }




    //ВІДКРИТТЯ СЕКЦІЇ

    jQuery('body').on('click', '.sp-thumbnail', function (e) {
        e.stopPropagation();
    });

    jQuery('.top-slides-content-elements .top-slide-content-element').on('click', function (e) {
        e.stopPropagation();

        if (!jQuery(this).hasClass('active')) {
            jQuery('.top-slides-content-elements .top-slide-content-element').addClass('light-effect');
            setTimeout(function () {
                jQuery('.top-slides-content-elements .top-slide-content-element').removeClass('light-effect');
            }, 1000);
        }

        jQuery('.top-slide-content-element').removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.top-slides-content-elements').addClass('has-active-child delay');

        setTimeout(function () {
            jQuery('.top-slides-content-elements').removeClass('delay');
            jQuery('.read-more-block-mobile').removeClass('rotate');
            jQuery('.top-slide-content-element.active .read-more-block-mobile').addClass('rotate');
        }, 1000);

        RecolorOfTabs();

        var ContentInsideHeight = jQuery('.main-content-inside', this).outerHeight();
        var SectionHeight = ContentInsideHeight + 134;

        if (jQuery(window).width() <= 767) {
            jQuery('.top-slides-content-elements.has-active-child .top-slide-content-element.active').css({'height': SectionHeight});
        } else {
            jQuery('.top-slides-content-elements.has-active-child .top-slide-content-element.active').css({'height': 'inherit'});
        }

        HeightMainSections();


    });

    jQuery('body').on('click', '.sp-arrow', function(e){
        e.stopPropagation();
    });
    jQuery('body').on('click', '.sp-button', function (e) {
        e.stopPropagation();
    });
    jQuery('body').on('click', '.top-slides-content-elements .top-slide-content-element', function (e) {
        e.stopPropagation();
        jQuery('.top-slide-content-element').eq($(this).index() - 1).find('.sp-button').eq(0).trigger('click');
    });
    jQuery('.read-more-block-mobile').on('click', function (e) {
        e.stopPropagation();
        jQuery('.top-slide-content-element-preview-block .content-block .close-button').trigger('click', function () {
        });
    });

    jQuery('.top-slide-content-element-preview-block .content-block .close-button').on('click', function (e) {
        e.stopPropagation();
        jQuery('.top-slide-content-element').removeClass('active');
        jQuery('.top-slides-content-elements').removeClass('has-active-child');
        jQuery('.top-slides-content-elements').addClass('delay');
        setTimeout(function () {
            jQuery('.top-slides-content-elements').removeClass('delay');
        }, 1000);
        jQuery('.top-slide-content-element').removeClass('light-effect');
        jQuery('.top-slides-content-elements').removeClass('last-element-active');
        setTimeout(function () {
            jQuery('.read-more-block-mobile').removeClass('rotate');
        }, 1000);
    });


    //MENU START

    function ActivationMobileMenu() {

        if (jQuery('.mobile-btn-wrapper').hasClass('active')) {
            jQuery('.mobile-btn-wrapper').removeClass('active');
            setTimeout(function () {
                jQuery('.header-navigation-items').removeClass('active');
            }, 400);
        } else {
            jQuery('.mobile-btn-wrapper').addClass('active');
            setTimeout(function () {
                jQuery('.header-navigation-items').addClass('active');
            }, 400);
        }

    }

    jQuery('.mobile-btn-wrapper').on('click', function () {

        ActivationMobileMenu();

    });
	

    //MENU END


    //show video in absolute man block
    jQuery('.absolute-block-img .video-button-play', this).on('click',function (e) {
        e.stopPropagation();
        jQuery('.absolute-block-img').hide();
        jQuery('.main-content-element-video','.absolute-man-block').show();
        jQuery('.main-content-element-video .youtube .video-button-play','.absolute-man-block').trigger('click',function (e) {
            e.stopPropagation();
        });
    });

    
function NoteTabletContentWidth() {

    var Notebook = jQuery('.main-content-element-picture-notebook-img-block .notebook-img');
    var NotebookContent = jQuery('.main-content-element-picture.notebook .main-content-element-picture-notebook-img-block .wrapper');
    var NoteWidth = jQuery(Notebook).width();
    var NoteHeight = jQuery(Notebook).height();
    jQuery(NotebookContent).width(NoteWidth / 1.38).height(NoteHeight / 1.35);

    var Tablet = jQuery('.main-content-element-picture.tablet .main-content-element-picture-tablet-img-block .tablet-img');
    var TabletContent = jQuery('.main-content-element-picture.tablet .main-content-element-picture-tablet-img-block .wrapper');
    var TabletWidth = jQuery(Tablet).width();
    var TabletHeight = jQuery(Tablet).height();
    jQuery(TabletContent).width(TabletWidth / 1.34).height(TabletHeight / 1.25);

}

    jQuery(window).resize(function () {
        NoteTabletContentWidth();
    }).resize();

});