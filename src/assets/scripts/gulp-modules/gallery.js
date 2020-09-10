(function ($) {
	const previewImg = $('.preview__img')
	const preview = $('.preview')
	const previewClose = $('.preview__btn')
	let currentSlideActive = 0

	$('.gallery-main-slider').on('click', (e) => {
		if(e.target.parentNode.classList.contains('gallery-main-slider__item')) {
			preview.addClass('preview--show')
			$('.preview__slider').slick('setPosition')
			$('.preview__slider').slick('slickGoTo', currentSlideActive);
		}
	})

	$('.preview__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: false,
		infinite: false
	})

	$('.js-preview-arrow__prev').click(function () {
		$('.preview__slider').slick('slickPrev');
	})

	$('.js-preview-arrow__next').click(function () {
		$('.preview__slider').slick('slickNext');
	})

	previewClose.on('click', (e) => {
		e.preventDefault()

		preview.removeClass('preview--show')
	})

	$('.js-gallery-main-slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		adaptiveHeight: false,
		dots: false,
		arrows: false,
		asNavFor: '.js-gallery-mini-slider',
		responsive: [
			{
				breakpoint: 577,
				settings: {
					dots: true,
				}
			},
		]
	});

	$('.js-gallery-mini-slider').on('init afterChange', (_, slick, currentSlide = 0 ,nextSlide = 0) => {
		currentSlideActive = currentSlide
	})

	$('.js-gallery-mini-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.js-gallery-main-slider',
		dots: false,
		arrows: false,
		infinite: false,
		// centerMode: false,
		focusOnSelect: true,
		responsive: [
			{
			breakpoint: 1021,
			settings: {
				slidesToShow: 5,
				}
			},
		]
	});

	$('.js-video-arrow__prev').click(function () {
		$('.js-gallery-main-slider').slick('slickPrev');
	
	})

	$('.js-video-arrow__next').click(function () {
		$('.js-gallery-main-slider').slick('slickNext');
		
	});
})(jQuery);