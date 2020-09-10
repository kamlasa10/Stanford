(function ($) {
	let currentS = 0;
	let lastS = 0;
	let lastTime = 0;
	let liheight = 450;
	let windowHeight = $(window).height();
	let windowWidth = $(window).width();

	let top = (windowHeight - liheight) / 2;
	let factor = windowHeight / liheight;
	let maxScroll = ($('.main-scroller').height() - windowHeight) / factor;

	let isScrolling = false;
	const l = $('.main-scroller').height();
	$body.css('height', l)
	// debugger

	
	
	
	
	
	
	
	
	
	
	
	
	
	
		if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

			document.addEventListener('wheel', function (event) {
				event.preventDefault();
				if (!isScrolling) isScrolling = true;
				let norm = normalizeWheel(event);
				currentS += norm.spinY * 50;
		
		
				if (currentS < 0) currentS = 0;
				if (currentS > maxScroll) currentS = maxScroll;
		
			const ease_1 = BezierEasing(.17, 1.04, .62, .96);
				TweenLite.to('.main-scroller', 1, {
				ease: ease_1,
					y: -currentS * factor,
					overwrite: 5, // preexisting
					onComplete: function () {
						isScrolling = false;
					}
				});
			});
		}
	
	
	
	















})(jQuery);