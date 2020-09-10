


(function ($) {
	$('.js-news-single-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		adaptiveHeight: false,
		dots: true,
		arrows: false,
		 responsive: [{
		 		breakpoint: 476,
		 		settings: {
		 			dots: true
		 		}
		 	}
		 ]
	});

$('.js-single-news-arrow__prev').click(function () {
	$('.js-news-single-slider').slick('slickPrev');
})

$('.js-single-news-arrow__next').click(function () {
	$('.js-news-single-slider').slick('slickNext');
});


	// .js-single-news-arrow__next
})(jQuery);