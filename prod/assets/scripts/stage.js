(function ($) {
	if (window.innerWidth == 1024 || screen.width > 768) {

		$('.js-year-slider').each((i, el)=>{

			$(el).slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				infinite: false,
			});
			
			$(el).closest('.year-slider-wrap').find('.js-stage-arrow__prev').click(function () {
				$(el).slick('slickPrev');
				
			})
			
			$(el).closest('.year-slider-wrap').find('.js-stage-arrow__next').click(function () {
				$(el).slick('slickNext');
				
			});
		})
	}

	function initModalSlider(wrap) {
		$(wrap).slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			adaptiveHeight: false,
			// dots: false,
			dots: true,
			arrows: false,
			responsive: [{
				breakpoint: 476,
				settings: {
				}
			}]
		});

		$('body').on('click', '.js-single-news-arrow__prev', function () {
			$(wrap).slick('slickPrev');
		});

		$('body').on('click', '.js-single-news-arrow__next', function () {
			$(wrap).slick('slickNext');
		});
	}









		let stageModalIsOpen = false;
		const $modalStage = $('.js-stage-modal');


		$('.js-year-slider__item').on('click', function(){

		})



		function openStageModal() {
			$modalStage.fadeIn(300, ()=>{
				initModalSlider('.js-news-single-slider');
				$('.js-preloader-image-wrap').fadeOut(300);
			});
			stageModalIsOpen = true;
		};
		
		function closeStageModal() {
			$modalStage.fadeOut(300);
			stageModalIsOpen = false;
			$('.js-news-single-slider').slick('unslick');
			$('.js-preloader-image-wrap').fadeIn(300);
			
		};

		function toggleStageModal() {
			if (stageModalIsOpen) {
				$body.removeClass('modal-active');
				closeStageModal();
			} else {
				$body.addClass('modal-active');
				openStageModal();
			}
		}

		$body.on('click', '.js-year-slider, .js-stage-modal__close-btn', function () {
			toggleStageModal();
		});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
})(jQuery);