(function ($) {
	const $body = $('body');

	if (screen.width > 1020) {
		const heightFilter = $(".filter").outerHeight(true);
		$('.js-filter-scroll-wrap').css('height', $(".filter").height());

		$(window).scroll(() => {
			if ($(window).scrollTop() > 30) {
				$body.addClass('header--small');
				$('.filter').css('height', heightFilter + 83);
				$('.js-filter-scroll-wrap').css('height', $(".filter").height());

			} else {

				$body.removeClass('header--small');
				$('.filter').css('height', heightFilter);
				$('.js-filter-scroll-wrap').css('height', $(".filter").height() - 50);
			}
		});
	}
})(jQuery);