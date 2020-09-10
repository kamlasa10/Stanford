(function ($) {
	// 404 page animation start
	showPolygons();
	setInterval(function () {
		showPolygons();

	}, 2500)

	function showPolygons() {

		$('[class="processed"]').removeAttr('class');
		var polyCount = $('.svg__404 polygon').length;

		$('.svg__404 polygon').each(function (ind, el) {
			setTimeout(function () {
				$('.svg__404 polygon:eq(' + ind + ')').attr('class', 'processed');
			}, Math.random() * 2000);
		});
	}
	// 404 page animation end
})(jQuery);