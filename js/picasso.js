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
                    'duration': '1700%',
                    'animations': [

                        // 1 screen
                        {
                            'selector': '#anim1 .main-content-element-picture',
                            'opacity': [1, 0.5],
                            'start': 5,
                            'end': 10
                        },
                        {
                            'selector': '#anim1 .red-text-block',
                            'height': ['initial', 0],
                            'start': 2,
                            'end': 7
                        },
                        {
                            'selector': '#anim1',
                            'margin-top': [0, 'initial'],
                            'start': 10,
                            'end': 13
                        },


                        // 2 screen
                        {
                            'selector': '#anim2 .text-block',
                            'margin-top': [0, 'initial'],
                            'start': 15,
                            'end': 18
                        },
                        {
                          'selector'    : '#anim2 .video-button-play',
                          'opacity' 	  : [0.25, 1],
                          'start'		  : 16,
                          'end'		 	 : 19
                        },
                        {
                            'selector': '#anim2 .main-content-element-video',
                            'height': ['initial', 250],
                            'opacity': [1, 0.3],
                            'start': 21,
                            'end': 24
                        },
                        {
                            'selector': '#anim2',
                            'margin-top': [0, 'height'],
                            'start': 25,
                            'end': 30
                        },


                        // 3 screen
                        {
                            'selector': '#anim3 .notebook-img',
                            'opacity': [0.1, 1],
                            'start': 29,
                            'end': 33
                        },
						

							/// inner images
							{
								'selector': '#anim3 .column:nth-child(1) .item-element:nth-child(1)',
								'margin-top': [40, 0],
								'height': [65, 'initial'],
								'start': 29,
								'end': 33
							},
							{
								'selector': '#anim3 .column:nth-child(1) .item-element:nth-child(2)',
								'margin-top': [60, 10],
								'height': [65, 'initial'],
								'start': 29,
								'end': 33
							},
							{
								'selector': '#anim3 .column:nth-child(1) .item-element:nth-child(3)',
								'margin-top': [80, 10],
								'height': [65, 'initial'],
								'start': 29,
								'end': 33
							},
							
							{
								'selector': '#anim3 .column:nth-child(2) .item-element:nth-child(1)',
								'margin-top': [60, 0],
								'height': [65, 'initial'],
								'start': 30,
								'end': 34
							},
							{
								'selector': '#anim3 .column:nth-child(2) .item-element:nth-child(2)',
								'margin-top': [60, 10],
								'height': [65, 'initial'],
								'start': 30,
								'end': 34
							},
							
							{
								'selector': '#anim3 .column:nth-child(3) .item-element:nth-child(1)',
								'margin-top': [80, 0],
								'height': [65, 'initial'],
								'start': 31,
								'end': 35
							},
							{
								'selector': '#anim3 .column:nth-child(3) .item-element:nth-child(2)',
								'margin-top': [80, 10],
								'height': [65, 'initial'],
								'start': 31,
								'end': 35
							},
							{
								'selector': '#anim3 .column:nth-child(3) .item-element:nth-child(3)',
								'margin-top': [80, 10],
								'height': [65, 'initial'],
								'start': 31,
								'end': 35
							},
							
							{
								'selector': '#anim3 .column:nth-child(4) .item-element:nth-child(1)',
								'margin-top': [120, 0],
								'height': [65, 'initial'],
								'start': 31,
								'end': 35
							},
							{
								'selector': '#anim3 .column:nth-child(4) .item-element:nth-child(2)',
								'margin-top': [120, 10],
								'height': [65, 'initial'],
								'start': 31,
								'end': 35
							},
							{
								'selector': '#anim3 .column:nth-child(4) .item-element:nth-child(3)',
								'margin-top': [120, 10],
								'height': [65, 'initial'],
								'start': 31,
								'end': 35
							},
							
							{
								'selector': '#anim3 .column:nth-child(5) .item-element:nth-child(1)',
								'margin-top': [140, 0],
								'height': [65, 'initial'],
								'start': 31,
								'end': 35
							},
							{
								'selector': '#anim3 .column:nth-child(5) .item-element:nth-child(2)',
								'margin-top': [140, 10],
								'height': [65, 'initial'],
								'start': 31,
								'end': 35
							},
							{
								'selector': '#anim3 .column:nth-child(5) .item-element:nth-child(3)',
								'margin-top': [140, 10],
								'height': [65, 'initial'],
								'start': 31,
								'end': 35
							},
						
						
                        {
                            'selector': '#anim3 .main-content-element-picture.notebook',
                            'height': ['initial', 300],
                            'start': 37,
                            'end': 41
                        },						
                        {
                            'selector': '#anim3 .main-content-element-picture-notebook-img-block',
                            'opacity': [1, 0.35],
                            'start': 37,
                            'end': 41
                        },
                        {
                            'selector': '#anim3',
                            'margin-top': [0, 'height'],
                            'start': 44,
                            'end': 49
                        },			


                        // 4 screen
                        {
                            'selector': '#anim4 .main-content-element-picture-tablet-img-block',
                            'opacity': [1, 0],
                            'start': 49,
                            'end': 53
                        },
                        {
                            'selector': '#anim4 .absolute-man-block',
                            'width': ['initial', '50%'],
                            'height': ['initial', '50%'],
                            'margin-left': [0, '-30%'],
                            'margin-top': [0, '-20%'],
                            'opacity':[1],
                            'start': 51,
                            'end': 55
                        },
						
                        {
                            'selector': '#anim4 .main-content-element-picture.tablet',
                            'height': ['initial', 250],
                            'opacity': [1, 0.4],
                            'start': 60,
                            'end': 65
                        },
                        {
                            'selector': '#anim4',
                            'margin-top': [0, 'height'],
                            'start': 67,
                            'end': 69
                        },
						
						// 5 screen
                        {
                            'selector': '#anim5',
                            'height': ['initial', 300],
                            'start': 73,
                            'end': 77
                        },
                        {
                            'selector': '#anim5',
                            'margin-top': [0, 'height'],
                            'start': 77,
                            'end': 80
                        },
						
						// 6 screen
                        {
                            'selector': '#anim6 .main-content-element-video',
                            'opacity': [0.35, 1],
                            'start': 79,
                            'end': 82
                        },
                        {
                            'selector': '#anim6 .text-block',
                            'margin-top': [0, 'height'],
                            'start': 84,
                            'end': 87
                        },
                        {
                            'selector': '#anim6 .youtube',
                            'height': ['initial', 400],
                            'opacity': [1, 0.35],
                            'start': 89,
                            'end': 93
                        },
                        {
                            'selector': '#anim6',
                            'margin-top': [0, 'height'],
                            'start': 92,
                            'end': 95
                        },
						
                        {
                            'selector': '#anim7',
                            'margin-top': [0, 'initial'],
                            'start': 93,
                            'end': 95
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
                start = start[1];
            } else {
                start = 0;
            }
            if (end) {
                end = end[1];
            } else {
                end = 100;
            }

            if (value && value[1] == 'initial') {
                value[1] = $(animation.selector).data('property');
            } else if (value && value[0] == 'initial') {
                value[0] = $(animation.selector).data('property');
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
		
		//if ($(window).width() > 900){
			init();
		//}

    })
}).call(this);