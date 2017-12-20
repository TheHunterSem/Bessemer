(function () {
    $(function () {
        /*  Globals
        -------------------------------------------------- */

        var PROPERTIES = ['translateX', 'translateY', 'opacity', 'rotate', 'scale', 'height', 'width', 'margin-top', 'margin-left', 'top', 'left'],

            $window = $(window),
            $body = $('body'),
            wrappers = [],
            currentWrapper = null,
            scrollTimeoutID = 0,
            bodyHeight = 100,
            windowHeight = 500,
            windowWidth = 0,
            prevKeyframesDurations = 0,
            scrollTop = 12,
            relativeScrollTop = 0,
            currentKeyframe = 0,
            keyframes = [
                {
                    'wrapper': '.main-content-elements',
                    'duration': '2000%',
                    'animations': [

                        // 1 screen
                        {
                            'selector': '#anim1 .main-content-element-picture',
                            'opacity': [1, 0],
                            'start': 3,
                            'end': 11
                        },
                        {
                            'selector': '#anim1 .red-text-block',
                            'top': [60, 'other'],
                            'height': ['initial', 0],
                            'start': 3,
                            'end': 9
                        },
                        {
                            'selector': '#anim1',
                            'margin-top': [0, 'initial'],
                            'start': 9,
                            'end': 13
                        },


                        // 2 screen
                        {
                            'selector': '#anim2 .text-block',
                            'margin-top': [0, 'initial'],
							'opacity': [0.75, 0],
                            'start': 13,
                            'end': 21
                        },						
                        {
                          'selector'    : '#anim2 .video-button-play',
                          'opacity' 	  : [0, 1],
                          'start'		  : 18,
                          'end'		 	 : 22
                        },				
                        {
                          'selector'    : '#anim2 .youtube',
                          'opacity' 	  : [0.25, 1],
                          'start'		  : 18,
                          'end'		 	 : 21
                        },
                        {
                            'selector': '#anim2 .main-content-element-video',
                            'height': ['initial', 0],
                            'opacity': [1, 0.3],
                            'start': 23,
                            'end': 30
                        },


                        // 3 screen
                        {
                            'selector': '#anim3 .notebook-img',
                            'opacity': [0.1, 1],
                            'start': 28,
                            'end': 31
                        },
						

							/// inner images
							{
								'selector': '#anim3 .column:nth-child(1) .item-element:nth-child(1)',
								'margin-top': [40, 0],
								'height': [0, 'initial'],
								'start': 26,
								'end': 30
							},
							{
								'selector': '#anim3 .column:nth-child(1) .item-element:nth-child(2)',
								'margin-top': [60, 10],
								'height': [0, 'initial'],
								'start': 26,
								'end': 30
							},
							{
								'selector': '#anim3 .column:nth-child(1) .item-element:nth-child(3)',
								'margin-top': [80, 10],
								'height': [0, 'initial'],
								'start': 26,
								'end': 30
							},
							
							{
								'selector': '#anim3 .column:nth-child(2) .item-element:nth-child(1)',
								'margin-top': [60, 0],
								'height': [0, 'initial'],
								'start': 26,
								'end': 30
							},
							{
								'selector': '#anim3 .column:nth-child(2) .item-element:nth-child(2)',
								'margin-top': [60, 10],
								'height': [0, 'initial'],
								'start': 26,
								'end': 30
							},
							
							{
								'selector': '#anim3 .column:nth-child(3) .item-element:nth-child(1)',
								'margin-top': [80, 0],
								'height': [0, 'initial'],
								'start': 26,
								'end': 30
							},
							{
								'selector': '#anim3 .column:nth-child(3) .item-element:nth-child(2)',
								'margin-top': [80, 10],
								'height': [0, 'initial'],
								'start': 26,
								'end': 30
							},
							{
								'selector': '#anim3 .column:nth-child(3) .item-element:nth-child(3)',
								'margin-top': [80, 10],
								'height': [0, 'initial'],
								'start': 26,
								'end': 30
							},
							
							{
								'selector': '#anim3 .column:nth-child(4) .item-element:nth-child(1)',
								'margin-top': [120, 0],
								'height': [0, 'initial'],
								'start': 26,
								'end': 30
							},
							{
								'selector': '#anim3 .column:nth-child(4) .item-element:nth-child(2)',
								'margin-top': [120, 10],
								'height': [0, 'initial'],
								'start': 26,
								'end': 30
							},
							{
								'selector': '#anim3 .column:nth-child(4) .item-element:nth-child(3)',
								'margin-top': [120, 10],
								'height': [0, 'initial'],
								'start': 26,
								'end': 30
							},
							
							{
								'selector': '#anim3 .column:nth-child(5) .item-element:nth-child(1)',
								'margin-top': [140, 0],
								'height': [0, 'initial'],
								'start': 26,
								'end': 30
							},
							{
								'selector': '#anim3 .column:nth-child(5) .item-element:nth-child(2)',
								'margin-top': [140, 10],
								'height': [0, 'initial'],
								'start': 26,
								'end': 30
							},
							{
								'selector': '#anim3 .column:nth-child(5) .item-element:nth-child(3)',
								'margin-top': [140, 10],
								'height': [0, 'initial'],
								'start': 26,
								'end': 30
							},
						
						
                        {
                            'selector': '#anim3 .main-content-element-picture.notebook',
                            'height': ['initial', 0],
                            'start': 33,
                            'end': 40
                        },						
                        {
                            'selector': '#anim3 .main-content-element-picture-notebook-img-block',
                            'opacity': [1, 0.35],
                            'start': 34,
                            'end': 42
                        },	


                        // 4 screen
                        {
                            'selector': '#anim4 .main-content-element-picture-tablet-img-block, #anim4 .absolute-block-img .name-wrapper',
                            'opacity': [1, 0],
                            'start': 42,
                            'end': 48
                        },
                        {
                            'selector': '#anim4 .absolute-man-block',
                            'width': ['initial', '82%'],
                            'height': ['initial', '40%'],
                            'margin-left': [0, '-45%'],
                            'margin-top': [0, '-27%'],
                            'start': 48,
                            'end': 57
                        },

                        {
                            'selector': '#anim4 .absolute-man-block .video-button-play ',
                            'opacity':[0, 1],
                             'start': 52,
                             'end': 56
                        },
						
                        {
                            'selector': '#anim4 .main-content-element-picture.tablet',
                            'height': ['initial', 0],
                            'opacity': [1, 0.4],
                            'start': 58,
                            'end': 65
                        },
						
						// 5 screen
                        {
                            'selector': '#anim5',
                            'height': ['initial', 0],
                            'start': 69,
                            'end': 76
                        },
						
						// 6 screen
                        {
                            'selector': '#anim6 .main-content-element-video',
                            'opacity': [0.35, 1],
                            'start': 75,
                            'end': 78
                        },
                        {
                            'selector': '#anim6 .video-button-play',
                            'opacity': [0.1, 1],
                            'start': 73,
                            'end': 79
                        },
                        {
                            'selector': '#anim6',
                            'margin-top': [0, 'other'],
                            'start': 80,
                            'end': 84
                        }
						
					]
                }
            ]

        /*  Construction
           -------------------------------------------------- */
        init = function () {
            scrollIntervalID = setInterval(updatePage, 1);
            setupValues();
            $window.resize(throwError)
            if (isTouchDevice) {
                $window.resize(throwError)
            }
        }

        setupValues = function () {
            scrollTop = $window.scrollTop();
            windowHeight = $window.height();
            windowWidth = $window.width();
            convertAllPropsToPx();
            buildPage();
        }

        buildPage = function () {
            var i, j, k;
            for (i = 0; i < keyframes.length; i++) { // loop keyframes
                bodyHeight += keyframes[i].duration;
                if ($.inArray(keyframes[i].wrapper, wrappers) == -1) {
                    wrappers.push(keyframes[i].wrapper);
                }
                for (j = 0; j < keyframes[i].animations.length; j++) { // loop animations
                    Object.keys(keyframes[i].animations[j]).forEach(function (key) { // loop properties
                        value = keyframes[i].animations[j][key];
                        if (key !== 'selector' && value instanceof Array === false) {
                            var valueSet = [];
                            valueSet.push(getDefaultPropertyValue(key), value);
                            value = valueSet;
                        }
                        keyframes[i].animations[j][key] = value;
                    });
                }
            }
            $body.height(bodyHeight);
            $window.scroll(0);
            currentWrapper = wrappers[0];
            $(currentWrapper).show();
        }

        convertAllPropsToPx = function () {
            var i, j, k;
            for (i = 0; i < keyframes.length; i++) { // loop keyframes
                keyframes[i].duration = convertPercentToPx(keyframes[i].duration, 'y');
                for (j = 0; j < keyframes[i].animations.length; j++) { // loop animations
                    Object.keys(keyframes[i].animations[j]).forEach(function (key) { // loop properties
                        value = keyframes[i].animations[j][key];
                        if (key !== 'selector') {
                            if (value instanceof Array) { // if its an array
                                for (k = 0; k < value.length; k++) { // if value in array is %
                                    if (typeof value[k] === "string") {
                                        if (key === 'translateY') {
                                            value[k] = convertPercentToPx(value[k], 'y');
                                        } else {
                                            value[k] = convertPercentToPx(value[k], 'x');
                                        }
                                    }
                                }
                            } else {
                                if (typeof value === "string") { // if single value is a %
                                    if (key === 'translateY') {
                                        value = convertPercentToPx(value, 'y');
                                    } else {
                                        value = convertPercentToPx(value, 'x');
                                    }
                                }
                            }
                            keyframes[i].animations[j][key] = value;
                        }
                    });
                }
            }
        }

        getDefaultPropertyValue = function (property) {
            switch (property) {
                case 'translateX':
                    return 0;
                case 'translateY':
                    return 0;
                case 'scale':
                    return 1;
                case 'rotate':
                    return 0;
                case 'opacity':
                    return 1;
                case 'height':
                    return 'initial';
                case 'width':
                    return 'initial';
                case 'margin-top':
                    return 'initial';
                case 'margin-left':
                    return 'initial';
                case 'top':
                    return 'initial';
                case 'left':
                    return 'initial';
                case 'start':
                    return 0;
                case 'end':
                    return 100;
                default:
                    return null;
            }
        }

        /*  Animation/Scrolling
        -------------------------------------------------- */
        updatePage = function () {
            window.requestAnimationFrame(function () {
                setScrollTops();
                if (scrollTop > 0 && scrollTop <= (bodyHeight - windowHeight)) {
                    animateElements();
                    setKeyframe();
                }
            });
        }

        setScrollTops = function () {
            scrollTop = $window.scrollTop();
            relativeScrollTop = scrollTop - prevKeyframesDurations;
        }

        animateElements = function () {
            var animation, translateY, translateX, scale, rotate, opacity;
            for (var i = 0; i < keyframes[currentKeyframe].animations.length; i++) {
                animation = keyframes[currentKeyframe].animations[i];
                translateY = calcPropValue(animation, 'translateY');
                translateX = calcPropValue(animation, 'translateX');
                scale = calcPropValue(animation, 'scale');
                rotate = calcPropValue(animation, 'rotate');
                opacity = calcPropValue(animation, 'opacity');

                $(animation.selector).css({
                    'transform': 'translate3d(' + translateX + 'px, ' + translateY + 'px, 0) scale(' + scale + ') rotate(' + rotate + 'deg)',
                    'opacity': opacity
                });

                if (animation['width']) {
                    $(animation.selector).css({'width': calcPropValue(animation, 'width')});
                }
                if (animation['height']) {
                    $(animation.selector).css({'height': calcPropValue(animation, 'height')});
                }
                if (animation['margin-top']) {
                    $(animation.selector).css({'margin-top': calcPropValue(animation, 'margin-top')});
                }
                if (animation['margin-left']) {
                    $(animation.selector).css({'margin-left': calcPropValue(animation, 'margin-left')});
                }
                if (animation['top']) {
                    $(animation.selector).css({'top': calcPropValue(animation, 'top')});
                }
                if (animation['left']) {
                    $(animation.selector).css({'left': calcPropValue(animation, 'left')});
                }
            }
        }

        calcPropValue = function (animation, property) {
            var value = animation[property];
            var start = animation['start'];
            var end = animation['end'];
            var relativePos = (relativeScrollTop / keyframes[currentKeyframe].duration * 100);

            if (start) {
                start = start[1]-1;
            } else {
                start = 0;
            }
            if (end) {
                end = end[1]-1;
            } else {
                end = 100;
            }

            if (value && value[1] == 'initial') {
                value[1] = $(animation.selector).data('property');
            } else if (value && value[0] == 'initial') {
                value[0] = $(animation.selector).data('property');
            }
			
            if (value && value[1] == 'other') {
                value[1] = $(animation.selector).data('other');
            } else if (value && value[0] == 'other') {
                value[0] = $(animation.selector).data('other');
            }

            if (relativePos < end) {
                if (value) {
                    if (relativePos >= start) {
                        if (value && value[1] == 'height') {
                            value[1] = -1 * $(animation.selector).height();
                        }

                        value = easeInOutQuad(relativeScrollTop - (keyframes[currentKeyframe].duration * start / 100).toFixed(0), value[0], (value[1] - value[0]), (keyframes[currentKeyframe].duration * (end - start) / 100).toFixed(0));
                    } else {
                        value = value[0];
                    }
                } else {
                    value = getDefaultPropertyValue(property);
                }
            } else {
				if (value) {
					if (value[1] == 'height'){
						value = -1 * $(animation.selector).height();
					}else{
						value = value[1];
					}
				}
            }
            return value;
        }

        easeInOutQuad = function (t, b, c, d) {
            //sinusoadial in and out
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        };

        setKeyframe = function () {
            if (scrollTop > (keyframes[currentKeyframe].duration + prevKeyframesDurations)) {
                prevKeyframesDurations += keyframes[currentKeyframe].duration;
                currentKeyframe++;
                showCurrentWrappers();
            } else if (scrollTop < prevKeyframesDurations) {
                currentKeyframe--;
                prevKeyframesDurations -= keyframes[currentKeyframe].duration;
                showCurrentWrappers();
            }
        }

        showCurrentWrappers = function () {
            var i;
            if (keyframes[currentKeyframe].wrapper != currentWrapper) {
                //$(currentWrapper).hide();
                $(currentWrapper).css('opacity', 0);
                $(keyframes[currentKeyframe].wrapper).show();
                currentWrapper = keyframes[currentKeyframe].wrapper;
            }
        }

        /*  Helpers
        -------------------------------------------------- */

        convertPercentToPx = function (value, axis) {
            if (typeof value === "string" && value.match(/%/g)) {
                if (axis === 'y') value = (parseFloat(value) / 100) * windowHeight;
                if (axis === 'x') value = (parseFloat(value) / 100) * windowWidth;
            }
            return value;
        }

        throwError = function () {
            $body.addClass('page-error')
        }

        isTouchDevice = function () {
            return 'ontouchstart' in window // works on most browsers
                || 'onmsgesturechange' in window; // works on ie10
        }
		
		if ($(window).width() > 1000){			
			init();

			var wow = new WOW(
			  {
				boxClass:     'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset:       0,          // distance to the element when triggering the animation (default is 0)
				mobile:       true,       // trigger animations on mobile devices (default is true)
				live:         true,       // act on asynchronously loaded content (default is true)
				callback:     function(box) {
				  // the callback is fired every time an animation is started
				  // the argument that is passed in is the DOM node being animated
				},
				scrollContainer: null // optional scroll container selector, otherwise use window
			  }
			);
			wow.init();			
		} else {
            keyframes = [
                {
                    'wrapper': '.main-content-elements',
                    'duration': '2000%',
                    'animations': [

                        // 1 screen
                        {
                            'selector': '#anim1',
                            'opacity': [1, 0.3],
                            'start': 1,
                            'end': 3
                        },
                        {
                            'selector': '#anim2 .text-block',
                            'opacity': [0.3, 1],
                            'start': 2,
                            'end': 3
                        },
                        {
                            'selector': '#anim2 .main-content-element-video',
                            'opacity': [0.3, 1],
                            'start': 4,
                            'end': 6
                        },
                        {
                            'selector': '#anim2',
                            'opacity': [1, 0.3],
                            'start': 7,
                            'end': 9
                        },
                        {
                            'selector': '#anim3 .main-content-element-picture.notebook',
                            'opacity': [0.3, 1],
                            'start': 9,
                            'end': 11
                        },
                        {
                            'selector': '#anim3',
                            'opacity': [1, 0.3],
                            'start': 11,
                            'end': 13
                        },
                        {
                            'selector': '#anim4 .main-content-element-picture.tablet',
                            'opacity': [0.3, 1],
                            'start': 13,
                            'end': 15
                        },
                        {
                            'selector': '#anim4',
                            'opacity': [1, 0.3],
                            'start': 16,
                            'end': 17
                        },
                        {
                            'selector': '#anim5 .prefooter-content-element-items.bigimages',
                            'opacity': [0.3, 1],
                            'start': 17,
                            'end': 19
                        },
                        {
                            'selector': '#anim5',
                            'opacity': [1, 0.3],
                            'start': 19,
                            'end': 21
                        },
                        {
                            'selector': '#anim6 .main-content-element-video',
                            'opacity': [0.3, 1],
                            'start': 22,
                            'end': 23
                        },
                        {
                            'selector': '#anim6',
                            'opacity': [1, 0.3],
                            'start': 25,
                            'end': 26
                        },
                        {
                            'selector': '#anim7',
                            'opacity': [0.3, 1],
                            'start': 26,
                            'end': 28
                        }
                    ]
                }
            ];
            //init();

            var ArrSelectors = [
                '#anim1',
                '#anim2 .text-block',
                '#anim2 .main-content-element-video',
                '#anim2',
                '#anim3 .main-content-element-picture.notebook',
                '#anim3',
                '#anim4 .main-content-element-picture.tablet',
                '#anim4',
                '#anim5 .prefooter-content-element-items.bigimages',
                '#anim5',
                '#anim6 .main-content-element-video',
                '#anim6',
                '#anim7'
            ];

            var heights = [];
            var centers = [];

            $(ArrSelectors).each(function(index, value){
                var $this = $(value);

                var height = $this.height();
                var centerY = height / 2;
                centers.push(centerY);
                heights.push(height);
            });
            // console.log('Элемент : ' + ArrSelectors);
            // console.log('Высота : ' + heights);
            // console.log('Центр : ' + centers);

        }

    })
}).call(this);