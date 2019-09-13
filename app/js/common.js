$(document).ready(() => {

    // validate
    $('form').validate();

    // mask
    $(":input").inputmask();

    //select
    $('.js-nice_select, .nice-select__mobile').niceSelect();

    $('.js-select2').select2();

    // $('.js-select2').on('select2:open', function (e) {
    //   $('.nice-select .list').hide();
    // setTimeout(function(){
    //   $('.nice-select .list').slideDown("slow", "easeInOutQuint");
    // }, 300);
    // });

    // tippy
    if ($('[data-tippy-content]').length > 0) {
        tippy('[data-tippy-content]', {
            animation: 'fade',
            duration: 20,
            placement: 'right',
            delay: [100, 100],
        })
    }

    //tabs
    $.fn.tabsPlugin = function (options) {
        var options = $.extend({
            'tabMenu': '.nav-tabs',
            'tabItemMenu': '.item-tab',
            'tabWrap': '.tab-wrap',
            'tabItemContent': '.tab-content',
            'tabAttr': 'data-tab',
            'effectFadeIn': 'fadeIn',
            'effectFadeOut': 'fadeOut'

        }, options);

        var storage = {};
        var methods = {
            init: function () {

                $(options.tabItemMenu).on('click', function () {
                    storage.tabAttr = $(this).attr(options.tabAttr);
                    methods.changeActive(this);

                });
            },

            changeActive: function (ActiveItem) {
                $(ActiveItem).addClass('_active').siblings().removeClass('_active');
                $(ActiveItem)
                    .closest(options.tabMenu)
                    .next(options.tabWrap)
                    .find('[' + options.tabAttr + '="' + storage.tabAttr + '"]')
                    .addClass('_active fadeIn').removeClass('fadeOut')
                    .siblings().removeClass('_active fadeIn').addClass('fadeOut');
            }


        };
        methods.init();
    };

    $('.js_tabs').tabsPlugin();

    $('.js-tab-select').on('change', function (e) {
        const tabEl = this.value;
        $('[data-tab="tab' + tabEl + '"]').click()
        $('.nice-select').niceSelect('update');
    })

    function iframe_resiz() {
        $('iframe').each(function () {
            let
                $this = $(this),
                w = $this.attr('width'),
                actual_w = $this.innerWidth(),
                proportion = $this.attr('height') / w;
            $this.css('height', Math.round(actual_w * proportion) + 'px');
        })
    }

    iframe_resiz();

    $(window).resize(function () {
        iframe_resiz();
    });

    $('.footer__nav-list-title').on('click', function () {

        var topPos = window.pageYOffset;
        var windHeight = window.innerHeight;

        if ($('.footer__nav-list').hasClass('_open') && $(this).hasClass('_active')) {
            $(this).removeClass('_active');
            $('.footer__nav-list').removeClass('_open');
            return;
        }
        if ($('.footer__nav-list').hasClass('_open') && !$(this).hasClass('_active')) {
            $('.footer__nav-list-title').removeClass('_active');
            $(this).addClass('_active');
            $('html').velocity({
                    scrollTop: topPos + windHeight + 200 + "px"
                },
                {
                    duration: 1000,
                });
            return;
        }
        else {
            $(this).addClass('_active');
            $('.footer__nav-list').addClass('_open');
            $('html').velocity({
                    scrollTop: topPos + windHeight + 5000 + "px"
                },
                {
                    duration: 500,
                });
            return;
        }
    });

    let keyImages = new Swiper('.key-images .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 25,
        speed: 900,
        loop: true,
        centeredSlides: true,
        loopedSlides: 2,
        grabCursor: true,
        pagination: {
            el: '.key-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.key-images-next',
            prevEl: '.key-images-prev',
        },
        breakpoints: {
            680: {
                spaceBetween: 20,

            },
        },
        on: {
            slideNextTransitionStart: function () {
                $('.swiper-pagination-bullet').removeClass('slidePrev slideNext');
                $('.swiper-pagination-bullet-active-next-next').nextAll().addClass('swiper-pagination-bullet-active-next-next');
                $('.swiper-pagination-bullet.swiper-pagination-bullet-active').addClass('slideNext');
            },
            slidePrevTransitionStart: function () {
                $('.swiper-pagination-bullet').removeClass('slideNext slidePrev');
                $('.swiper-pagination-bullet-active-prev-prev').prevAll().addClass('swiper-pagination-bullet-active-prev-prev');
                $('.swiper-pagination-bullet.swiper-pagination-bullet-active').addClass('slidePrev');
            },
        },

    });

    let collectionGallery = new Swiper('.gallery-small .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 900,
        grabCursor: true,
        centeredSlides: true,
        loopedSlides: 2,
        loop: true,
        pagination: {
            el: '.gallery-small__pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.gallery-small__next',
            prevEl: '.gallery-small__prev',
        },
        breakpoints: {
            680: {
                spaceBetween: 12,
            }
        },
        on: {
            slideNextTransitionStart: function () {
                $('.swiper-pagination-bullet').removeClass('slidePrev slideNext');
                $('.swiper-pagination-bullet-active-next-next').nextAll().addClass('swiper-pagination-bullet-active-next-next');
                $('.swiper-pagination-bullet.swiper-pagination-bullet-active').addClass('slideNext');
            },
            slidePrevTransitionStart: function () {
                $('.swiper-pagination-bullet').removeClass('slideNext slidePrev');
                $('.swiper-pagination-bullet-active-prev-prev').prevAll().addClass('swiper-pagination-bullet-active-prev-prev');
                $('.swiper-pagination-bullet.swiper-pagination-bullet-active').addClass('slidePrev');
            },
        },
    });

    let allCollectionGallery = new Swiper('.all-collection-gallery', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 900,
        loop: true,
        pagination: {
            el: '.all-collection-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.all-collection-next',
            prevEl: '.all-collection-prev',
        },
        breakpoints: {
            560: {
                spaceBetween: 0,
            }
        },
        on: {
            slideNextTransitionStart: function () {
                $('.swiper-pagination-bullet').removeClass('slidePrev slideNext');
                $('.swiper-pagination-bullet-active-next-next').nextAll().addClass('swiper-pagination-bullet-active-next-next');
                $('.swiper-pagination-bullet.swiper-pagination-bullet-active').addClass('slideNext');
            },
            slidePrevTransitionStart: function () {
                $('.swiper-pagination-bullet').removeClass('slideNext slidePrev');
                $('.swiper-pagination-bullet-active-prev-prev').prevAll().addClass('swiper-pagination-bullet-active-prev-prev');
                $('.swiper-pagination-bullet.swiper-pagination-bullet-active').addClass('slidePrev');
            },
        },
    });

    let otherBlogSlider = new Swiper('.other-blog-slider', {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        speed: 900,
        loop: true,
        navigation: {
            nextEl: '.other-blog-next',
            prevEl: '.other-blog-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 12,
            }
        }
    });
    

    $('.your-class').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        // infinite: true,
        speed: 500,
        dots: true,
        nextArrow: '.arrow-next-slick',
        prevArrow: '.arrow-prev-slick',
        customPaging : function(slider, i) {
            return '<div class="swiper-pagination-bullet"></div>';
        },
    });

    $('.your-class').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('[data-slick-index]').css('visibility', 'hidden');
        $(`[data-slick-index="${currentSlide}"]`).css('visibility', 'visible');
        $(`[data-slick-index="${nextSlide}"]`).css('visibility', 'visible');
    });

    $('.slick-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        // infinite: true,
        speed: 500,
        dots: true,
        nextArrow: '.arrow-next-slick2',
        prevArrow: '.arrow-prev-slick2',
        customPaging : function() {
            return '<div class="swiper-pagination-bullet"></div>';
        },
    });

    $('.slick-2').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('[data-slick-index]').css('visibility', 'hidden');
        $(`[data-slick-index="${currentSlide}"]`).css('visibility', 'visible');
        $(`[data-slick-index="${nextSlide}"]`).css('visibility', 'visible');
    });

    let topSlider = new Swiper('.top-slider', {
        init: false,
        slidesPerView: 1,
        spaceBetween: 25,
        speed: 1500,
        allowTouchMove: false,
        // loopedSlides: 1,
        // loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: false
        },
        pagination: {
            el: '.top-slider-pagination',
            clickable: false,
            dynamicBullets: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '" data-tab="' + index + '"></span>';
            },
        },

        navigation: {
            nextEl: '.top-slider-next',
            prevEl: '.top-slider-prev',
        },
        on: {
            slideNextTransitionStart: function () {
                $('.swiper-pagination-bullet').removeClass('slidePrev slideNext prev_slide next_slide');
                $('.swiper-pagination-bullet-active-next-next').nextAll().addClass('swiper-pagination-bullet-active-next-next');
                $('.swiper-pagination-bullet.swiper-pagination-bullet-active').addClass('slideNext');
            },
            slidePrevTransitionStart: function () {
                $('.swiper-pagination-bullet').removeClass('slideNext slidePrev prev_slide next_slide');
                $('.swiper-pagination-bullet-active-prev-prev').prevAll().addClass('swiper-pagination-bullet-active-prev-prev');
                $('.swiper-pagination-bullet.swiper-pagination-bullet-active').addClass('slidePrev');
            },

            transitionStart: function () {

                // $('.top-slider .swiper-slide').removeClass('prev_slide current init-slide');
                //
                // let currenElSlide = topSlider.slides[topSlider.realIndex];
                // currenElSlide.classList.add('current')
                //
                // let prevElSlide = topSlider.slides[topSlider.realIndex - 1];
                // if (prevElSlide !== undefined) {
                //     prevElSlide.classList.add('prev_slide')
                // }
                //
                // if(topSlider.isBeginning) {
                //     topSlider.slides[topSlider.$wrapperEl[0].childElementCount - 1].classList.add('prev_slide')
                // }
            },
            init: function () {
                let currenElSlide = topSlider.slides[topSlider.realIndex];
                currenElSlide.classList.add('init-slide')
                let prevElSlide = topSlider.slides[topSlider.realIndex - 1];
                if (prevElSlide !== undefined) {
                    prevElSlide.classList.add('prev_slide')
                }

                const slideLen = topSlider.$wrapperEl[0].childElementCount;
                let nav = true;

                $('.top-slider-next').on('click touchend mousedown', function (e) {
                    e.stopPropagation();
                    if (nav) {
                        const slideInd = topSlider.realIndex + 1;
                        if (slideInd !== slideLen) {
                            topSlider.slideNext(0);
                            stopNav();
                            return
                        }
                        if (slideInd == slideLen) {
                            topSlider.slideTo(0, 0);
                            stopNav();
                            return
                        }
                    }
                    $('.top-slider .swiper-slide').removeClass('prev_slide current init-slide');

                    let currenElSlide = topSlider.slides[topSlider.realIndex];
                    currenElSlide.classList.add('current')

                    let prevElSlide = topSlider.slides[topSlider.realIndex - 1];
                    if (prevElSlide !== undefined) {
                        prevElSlide.classList.add('prev_slide')
                    }

                    if (topSlider.isBeginning) {
                        topSlider.slides[topSlider.$wrapperEl[0].childElementCount - 1].classList.add('prev_slide')
                    }
                })
                $('.top-slider-prev').on('click touchend mousedown', function (e) {
                    e.stopPropagation();
                    if (nav) {
                        const slideInd = topSlider.realIndex + 1;
                        if (slideInd !== 1) {
                            topSlider.slidePrev(0);
                            stopNav();
                            return
                        }
                        if (slideInd == 1) {
                            topSlider.slideTo(slideLen, 0);
                            stopNav();
                            return
                        }
                    }
                    $('.top-slider .swiper-slide').removeClass('prev_slide current init-slide');

                    let currenElSlide = topSlider.slides[topSlider.realIndex];
                    currenElSlide.classList.add('current')

                    let prevElSlide = topSlider.slides[topSlider.realIndex - 1];
                    if (prevElSlide !== undefined) {
                        prevElSlide.classList.add('prev_slide')
                    }

                    if (topSlider.isBeginning) {
                        topSlider.slides[topSlider.$wrapperEl[0].childElementCount - 1].classList.add('prev_slide')
                    }
                })

                $('.top-slider-pagination').on('touchend mousedown', '.swiper-pagination-bullet', function (e) {
                    e.stopPropagation();

                    if (nav) {
                        const goSlide = $(this).attr('data-tab');
                        // console.log('goSlide', goSlide)
                        topSlider.slideTo(goSlide, 900);
                        stopNav();


                        $('.top-slider .swiper-slide').removeClass('prev_slide current init-slide');

                        // topSlider.$wrapperEl[0].children[goSlide].childNodes[1].setAttribute('style', 'transition: clip 1.5s ease')
                        topSlider.$wrapperEl[0].children[goSlide].classList.add('current');
                        console.log('Sibling', topSlider.$wrapperEl[0].children[goSlide])


                        // let currenElSlide = topSlider.slides[topSlider.realIndex];
                        // currenElSlide.classList.add('current')

                        // setTimeout(function () {
                        let prevElSlide = topSlider.$wrapperEl[0].children[goSlide - 1];
                        prevElSlide.classList.add('prev_slide')
                        // prevElSlide.childNodes[1].setAttribute('style', 'transition: clip 1.5s ease')
                        console.log(prevElSlide.childNodes[1])
                        // if (prevElSlide !== undefined) {
                        //
                        //     prevElSlide.classList.add('prev_slide')
                        //     prevElSlide.setAttribute('transition', 'none')
                        // }

                        if (topSlider.isBeginning) {
                            topSlider.slides[topSlider.$wrapperEl[0].childElementCount - 1].classList.add('prev_slide')
                        }
                        // }, 900);


                        return;

                    }


                })


                let interval = setInterval(function () {
                    nav = true;
                    // $('.top-slider-next').click();
                },);
                let intervalFlag = true;

                function stopNav() {
                    nav = false;
                    if (intervalFlag) {
                        intervalFlag = false;
                        clearInterval(interval);
                        setTimeout(function () {
                            intervalFlag = true;
                            nav = true;
                            interval = setInterval(function () {
                                // $('.top-slider-next').click();
                            }, 7000);
                        }, 1500);
                    }
                }

            },
        },

    });

    if ($('.top-slider').length > 0) {
        topSlider.init();
    }

    let recommendedSlider = new Swiper('.recommended-slider, .viewed-slider', {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 20,
        speed: 900,
        loop: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 5,
                slidesPerGroup: 5,
            },
            960: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
            720: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            522: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 12,
            },
        }
    });

    let likedSlider = new Swiper('.like-slider', {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
        speed: 900,
        loop: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        breakpoints: {
            1000: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            680: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 12,
            },
        }
    });

    function upBtn() {
        let windowHeight = $(window).innerHeight();
        let bodyHeight = $('.body-wrap').innerHeight();

        if (windowHeight < bodyHeight) {
            $('#up-btn').show();
        }
        else {
            $('#up-btn').hide();
        }
    }

    upBtn();

    $(window).resize(function () {
        upBtn()
    });

    $(window).scroll(function () {
        upBtn()
    });

    if ($('.more-btn').length > 0) {
        $('.more-btn').on('click', function () {

            if ($(this).hasClass('_open')) {
                $(this).removeClass('_open');
                $(this).next().slideToggle(400, upBtn);
                return;
            }
            else {
                $(this).addClass('_open');
                $(this).next().addClass('_open');
                $(this).next().slideToggle(400, upBtn);
                return;
            }
        });
    }

    // snapSlider 1//
    if ($('#slider-snap').length > 0) {
        let snapSlider = document.getElementById('slider-snap');

        var priceSlider = noUiSlider.create(snapSlider, {
            start: [1, 500],
            tooltips: [false, false],
            connect: true,
            step: 1,
            range: {
                'min': [0],
                'max': [5000]
            }
        });
    }
    // snapSlider 1//

    // snapSlider 2//
    if ($('#slider-snap2').length > 0) {
        let snapSlider2 = document.getElementById('slider-snap2');

        var priceSlider2 = noUiSlider.create(snapSlider2, {
            start: [1, 500],
            tooltips: [false, false],
            connect: true,
            padding: 10,
            step: 1,
            range: {
                'min': [0],
                'max': [5000]
            }
        });
    }
    // snapSlider 1//


    $(document).mouseup(function (e) {
        const container = $(".modal-filters , .modal-all__filters");
        if (e.target.className == 'btn-filters btn-filters__dropdown js-modal__check _open' || e.target.className == 'select2-results__option select2-results__option--highlighted' || e.target.className == 'select2-results__option') {
            return
        }
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.js-select2').select2('close');
            container.removeClass('_open');
            $('.js-modal__check').removeClass('_open');
        }
    });

    let flagFilter = true;
    $(".catalog").on("click  mouseover", '.js-modal__check', function (e) {
        e.stopPropagation();
        e.preventDefault();
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if (flagFilter) {
                $('.modal-filters').removeClass('_open');
                $('.js-modal__check').removeClass('_open');
                flagFilter = false;
                return;
            }
            if (!flagFilter) {
                $(this).addClass('_open')
                let modal = $(this).data('modal'),
                    modalEl = $(`#${modal}`),
                    bgFiltersMobile = $('.bg-mobile__filters');
                if ($(window).width() < 710) {
                    bgFiltersMobile.toggleClass('_open');
                }
                $(this).addClass('_open');
                modalEl.addClass('_open');
                modalEl.css('left', $(this).position().left + 'px')
                flagFilter = true;
                return;
            }
        }
        else {
            let modal = $(this).data('modal'),
                modalEl = $(`#${modal}`),
                bgFiltersMobile = $('.bg-mobile__filters');
            if ($(window).width() < 710) {
                bgFiltersMobile.toggleClass('_open');
            }
            $('.modal-filters').removeClass('_open');
            $('.js-modal__check').removeClass('_open');
            $('.js-select2').select2('close');
            $(this).addClass('_open');
            modalEl.addClass('_open');
            modalEl.css('left', $(this).position().left + 'px')
        }
    });
    $(".catalog").on("mouseleave", '.modal-all__filters', function (e) {
        if (e.relatedTarget.className == 'select2-results__option select2-results__option--highlighted' || e.relatedTarget.className == 'select2-results__option' || e.relatedTarget.className == 'select2-dropdown select2-dropdown--below') {
            return
        }
        $('.js-select2').select2('close');
        $('.modal-all__filters').removeClass('_open');
        $('.js-modal__check').removeClass('_open');
    });
    $(".catalog").on("mouseleave", '.js-modal__check', function (e) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return;
        }
        else {
            if (e.toElement.className != "scroll-subcategory") {
                // console.log('if')
                $('.js-select2').select2('close');
                $('.modal-filters').removeClass('_open');
                $('.js-modal__check').removeClass('_open');
                flagFilter = true;
            }
        }
    });
    $(".catalog").on("mouseleave", '.modal-filters', function (e) {
        if (e.target.className == 'btn-filters btn-filters__dropdown js-modal__check _open' || e.target.className == 'select2-results__option select2-results__option--highlighted'|| e.target.className == 'select2-results__option' ) {
            return
        }
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return;
        }
        else {
            if ($(this).hasClass('_open')) {
                $('.modal-filters').removeClass('_open');
                $('.js-modal__check').removeClass('_open');
            }
        }
    });
    // modal all filters close //
    $('.catalog').on('click', '.close-modal__filters, .close-modal__mobile', function () {
        $('.modal-all__filters, .mobile-nav__type--filters ').removeClass('_open');
        $('.bg-modal').removeClass('_open');
        $('.bg-mobile__nav').removeClass('_open')
    });
    // modal all filters close //

    // if (modalEl.hasClass('_open')) {
    //     console.log('_open');
    //
    //     $($(document)).on('click', function (e) {
    //         // e.preventDefault();
    //         console.log(e.target.className);
    //         if (!$(e.target).closest(".modal-filters._open").length) {
    //             console.log('click2');
    //             modalEl.removeClass('_open');
    //         }
    //     });
    // }
    //
    // $(document).mouseup(function (e){ // событие клика по веб-документу
    //     var div = $("#popup"); // тут указываем ID элемента
    //     if (!div.is(e.target) // если клик был не по нашему блоку
    //         && div.has(e.target).length === 0) { // и не по его дочерним элементам
    //         div.hide(); // скрываем его
    //     }
    // });
    // // modal //


    //modal
    let modalClose = new Event('modalClose');

    $(".js_open_modal").on('click', function (e) {
        e.preventDefault();

        const modalDiv = $($(this).attr('data-modal'));
        $('body').addClass('_no-scroll');
        modalDiv.addClass('open');
        modalDiv.parent().addClass('open');
        let modalOpen = new CustomEvent('modalOpen', {'detail': e.target.attributes[1].nodeValue});
        document.getElementsByTagName('body')[0].dispatchEvent(modalOpen);

        $($(modalDiv.parent())).on('click', function (e) {
            // e.preventDefault();
            if (e.target.className === 'modal_close' || e.target.className === 'modal_wrapper open') {
                $('body').removeClass('_no-scroll');
                modalDiv.removeClass('open');
                modalDiv.parent().removeClass('open');
                document.getElementsByTagName('body')[0].dispatchEvent(modalClose);
            }
        });

        $(document).keyup(function (e) {
            if (e.keyCode === 27) {
                if ($('.modal_wrapper').hasClass('open')) {
                    $('body').removeClass('_no-scroll');
                    modalDiv.removeClass('open');
                    modalDiv.parent().removeClass('open');
                    document.getElementsByTagName('body')[0].dispatchEvent(modalClose);
                }
            }
        });
    });

    let slideTo = 0;

    let productGallerySlider = new Swiper('.product-gallery-slider', {
        slidesPerView: 1,
        spaceBetween: 208,
        speed: 900,
        loop: true,
        init: false,
        // loopedSlides: 2,
        // slidesPerGroup: 2,
        centeredSlides: true,
        // grabCursor: true,
        // slideToClickedSlide: true,
        pagination: {
            el: '.gallery-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    ' / ' +
                    '<span class="' + totalClass + '"></span>';
            }
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        breakpoints: {
            1000: {
                spaceBetween: 120,
            },
            780: {
                spaceBetween: 60,
            },
            640: {
                // slidesPerView: 1,
                spaceBetween: 20,
            },
        },
        on: {
            slideNextTransitionStart: function () {
                $('.swiper-pagination-bullet').removeClass('slidePrev slideNext');
                $('.swiper-pagination-bullet-active-next-next').nextAll().addClass('swiper-pagination-bullet-active-next-next');
                $('.swiper-pagination-bullet.swiper-pagination-bullet-active').addClass('slideNext');
            },
            slidePrevTransitionStart: function () {
                $('.swiper-pagination-bullet').removeClass('slideNext slidePrev');
                $('.swiper-pagination-bullet-active-prev-prev').prevAll().addClass('swiper-pagination-bullet-active-prev-prev');
                $('.swiper-pagination-bullet.swiper-pagination-bullet-active').addClass('slidePrev');
            },
            // transitionEnd: function () {
            //     console.log('productGallerySlider.realIndex transitionEnd', productGallerySlider.realIndex + 1)
            //     slideTo = productGallerySlider.realIndex;
            //     mobileProductSlider.slideTo(slideTo, 600, true);
            // },
            // init: function () {
            //     $('.modal_close').on('click',  function () {
            //         console.log('productGallerySlider.realIndex', slideTo)
            //         mobileProductSlider.slideTo(slideTo, 600, true);
            //     })
            // },


        },
    });

    document.getElementsByTagName('body')[0].addEventListener('modalOpen', function (e) {
        const windHeight = window.innerWidth;
        if (windHeight > 640) {
            productGallerySlider.update(true);
            productGallerySlider.slideTo(e.detail, 600, true);
        }
        ;
    }, false);


    let mobileSlide = 0;

    let mobileProductSlider = new Swiper('.js-product-image-list', {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 900,
        loop: true,
        init: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        on: {
            slideNextTransitionStart: function () {
                $('.swiper-pagination-bullet').removeClass('slidePrev slideNext');
                $('.swiper-pagination-bullet-active-next-next').nextAll().addClass('swiper-pagination-bullet-active-next-next');
                $('.swiper-pagination-bullet.swiper-pagination-bullet-active').addClass('slideNext');
            },
            slidePrevTransitionStart: function () {
                $('.swiper-pagination-bullet').removeClass('slideNext slidePrev');
                $('.swiper-pagination-bullet-active-prev-prev').prevAll().addClass('swiper-pagination-bullet-active-prev-prev');
                $('.swiper-pagination-bullet.swiper-pagination-bullet-active').addClass('slidePrev');
            },
            // init: function () {
            //
            //     console.log('init', mobileSlide)
            //     mobileSlide = mobileProductSlider.realIndex;
            // },

            // transitionStart: function () {
            //     // mobileSlide = mobileProductSlider.realIndex;
            //     console.log('transitionStart', mobileProductSlider.realIndex + 1)
            //
            // },
            // transitionEnd: function () {
            //     mobileSlide = mobileProductSlider.realIndex;
            //     console.log('transitionEnd', mobileProductSlider.realIndex + 1)
            //
            //
            //         console.log('productGallerySlider.realIndex transitionEnd', productGallerySlider.realIndex + 1)
            //         slideTo = productGallerySlider.realIndex;
            //     // productGallerySlider.slideTo(productGallerySlider.realIndex, 600, true);
            // },
            // //
            resize: function () {
                console.log('resize', mobileProductSlider.realIndex)
                //     mobileProductSlider.update()
                //     // mobileSlide = mobileProductSlider.realIndex;
                //     // mobileProductSlider.slideTo(mobileSlide, 100, true);
                //     // console.log('resize1', mobileSlide)
                let ind = mobileProductSlider.realIndex
                setTimeout(function () {
                    mobileProductSlider.update()
                    console.log('setTimeout', mobileProductSlider.realIndex)
                    console.log('ind', ind)
                    mobileProductSlider.slideTo(ind + 1, 0);
                    //     productGallerySlider.slideTo(mobileSlide, 100);
                    //     //     console.log('setTimeout2', mobileProductSlider.realIndex)
                }, 100);
            },
        },

    });

    if ($('.js-product-image-list').length > 0) {
        mobileProductSlider.controller.control = productGallerySlider;
        productGallerySlider.controller.control = mobileProductSlider;

        mobileProductSlider.init()
        productGallerySlider.init()
    }


    // $(window).resize(function () {
    //     console.log('resize')
    //     const windHeight = window.innerWidth;
    //     if (windHeight < 641 ) {
    //         console.log('640')
    //         mobileProductSlider.update();
    //     }
    //
    // });

    if ($('textarea').length > 0) {
        var textarea = document.querySelector('textarea');

        textarea.addEventListener('keydown', autosize);

        function autosize() {
            var el = this;
            setTimeout(function () {
                el.style.cssText = ' padding:0';
                el.style.cssText = 'height:' + el.scrollHeight + 'px';
            }, 0);
        }
    }


    $('#up-btn').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });


    $('.head-link__js').on('click', function () {
        // console.log($(this).parent('.main-link').find('.body-link'))
        $(this).parent('.main-link').find('.body-link').slideToggle(500, function () {
        })
        &&
        $(this).parent('.main-link').toggleClass('close')
    });

    function borderColor($this) {
        let select = $this.val();
        let value = $this.parent('.input-holder__select');
        if (select == '') {
            value.css('border-color', '#CCCCCC')
        } else {
            value.css('border-color', '#1F2226')
        }
    }

    $('.js-select2').change(function () {
        borderColor($(this));

    });
    $('.js-select2').each(function () {
        borderColor($(this));
    });

    $('.js-select2').on('select2:close', function (e) {
        if($(this).val().length < 1) {
            $(this).next().find('.select2-search__field').css('display', 'block')
        } else {
            $(this).next().find('.select2-search__field').css('display', 'none')
        }
    })
    $('.js-select2').on('select2:open', function (e) {
        $(this).next().find('.select2-search__field').css('display', 'block').focus()
    })


    $(document).click(function (e) {
        var searchbtn = $('.search-js');
        var divsearch = $('.search-wrap');

        var catalogbtn = $('.catalog-js');
        var divcatalog = $('.catalog-nav-wrap');

        if (searchbtn.is(e.target) && divsearch.hasClass('_open')) {
            divsearch.removeClass('_open');
            return;
        }

        if (catalogbtn.is(e.target) && divcatalog.hasClass('_open')) {
            divcatalog.removeClass('_open');
            catalogbtn.removeClass('_open');
            $('.bar').removeClass('animate');
            return;
        }

        if (searchbtn.is(e.target) && !divsearch.hasClass('_open')) {
            divsearch.addClass('_open');
            divsearch.find('input').focus();
            divcatalog.removeClass('_open')
            catalogbtn.removeClass('_open')
            return;
        }

        if (catalogbtn.is(e.target) && !divcatalog.hasClass('_open')) {
            divcatalog.addClass('_open');
            catalogbtn.addClass('_open');
            searchbtn.removeClass('_open');
            divsearch.removeClass('_open');
            $('.bar').addClass('animate');
            return;
        }

        if (!divsearch.is(e.target)
            && divsearch.has(e.target).length === 0) {
            divsearch.removeClass('_open')

        }

        if (!catalogbtn.is(e.target)
            && divcatalog.has(e.target).length === 0) {
            divcatalog.removeClass('_open')
            catalogbtn.removeClass('_open')
            $('.bar').removeClass('animate');
        }

    });

    $('.search-close').click(function (e) {
        $(this).removeClass('_open');
        $('.search-wrap').removeClass('_open');

    });

    if (innerWidth < 701) {
        $(".catalog-js").on('click', function () {
            $('#nav-mobile').addClass('_open');
            $('.bg-mobile__nav').addClass('_open');
        })

    }

    let flag = true;
    $(".catalog-js").on("click  mouseover", function (e) {
        e.stopPropagation();
        e.preventDefault();
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if (flag) {
                $(".catalog-js").removeClass('_open');
                $('.catalog-nav-wrap').removeClass('_open');
                flag = false;
                return;
            }
            if (!flag) {
                $(".catalog-js").addClass('_open');
                $('.catalog-nav-wrap').addClass('_open');
                $('.search-wrap').removeClass('_open')
                flag = true;
                return;
            }
        } else {
            $(".catalog-js").addClass('_open');
            $('.catalog-nav-wrap').addClass('_open');
            $('.search-wrap').removeClass('_open')
        }
    });

    $(".catalog-js").on("mouseleave", function (e) {
        // console.log('2')
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return;
        } else {
            if (e.toElement.className != "catalog-nav-container") {
                $(".catalog-js").removeClass('_open');
                $('.catalog-nav-wrap').removeClass('_open');
                flag = true;
            }
        }
    });

    $(".catalog-nav-container").on("mouseleave", function () {
        // console.log('3')
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return;
        } else {
            if ($(this).parent().hasClass('_open')) {
                $(".catalog-js").removeClass('_open');
                $('.catalog-nav-wrap').removeClass('_open');
            }
        }

    });

    window.onscroll = function () {
        myFunction()
    };
    const headerMain = document.getElementById("header-main");

    function myFunction() {
        if (window.pageYOffset > 40) {
            headerMain.classList.add("sticky");
        } else {
            headerMain.classList.remove("sticky");
        }
    }

    window.addEventListener("orientationchange", function () {
        $('#js_preloader').show();
        setTimeout(function () {
            $(function () {
                $('#js_preloader').hide('300');
            });
        }, 150);
    });

});

