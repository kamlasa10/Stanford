
(function ($) {

	const floorLink = $('.js-floor-flat-link');
	const card = $('.js-floor-info');
	const filterTriggers = $('.filter-plan__item')

	filterTriggers.each(function (i) {
		$(this).on('click', (e) => {
			e.preventDefault()

			filterTriggers.each(function () {
				$(this).removeClass('filter-plan__item--active')
			})

			filterTriggers.eq(i).addClass('filter-plan__item--active')

		})
	})
	
	
	
	// floorLink.mouseenter(function (e) {
	// 	console.log($(this).data());
		
	// });

	function animNum(elem, num, int = null){
		var decimal_places = 1;
		var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);
		
		elem.animateNumber({
			number: num,
			numberStep: function (now, tween) {
				// var floored_number = Math.floor(now) / decimal_factor,
				if (int === null) {
					var floored_number = now.toFixed(2).toString().replace('.', ',');
				} else {
					var floored_number = now.toFixed();
				}

				var	target = $(tween.elem);

				target.text(floored_number);
			}
		}, {
			easing: 'swing',
			duration: 200,
		});
	}

	function showInfo(e) {
		console.log($(this));
		floorLink.removeClass('active');
		$(this).addClass('active');
		for (const key in this.dataset) {
			if (this.dataset.hasOwnProperty(key)) {
				const element = this.dataset[key];
				let currentClassElement = `.js-flat-${key}`;

				switch (key) {
					case 'num':
						card.find(currentClassElement).text(element)
						break;
					case 'total_square':
						//									card.find(currentClassElement).text(element);
						animNum(card.find(currentClassElement), element)

						break;
					case 'life_square':
						//									card.find(currentClassElement).text(element);
						animNum(card.find(currentClassElement), element)

						break;
					case 'room':
						//									card.find(currentClassElement).text(element);
						
						animNum(card.find(currentClassElement), element, 'int')

						break;
					default:
						card.find(currentClassElement).html(element)
				}
			}
		}
	}
	
	
	
	
	
	
	
	if (screen.width > 768) {

		floorLink.mouseenter(function(e){
			showInfo.call(this);
		});
	} else if (screen.width > 576 && screen.width <= 768) {
		floorLink.on('click', function(e){
			e.preventDefault();
			// replace link
			$('.js-see-more-floor').attr('href', $(this).data().link);
			showInfo.call(this);
		});
	} else {
			floorLink.on('click', function(e){
				e.preventDefault();
				// replace link
				$('.js-mobile-popup-flat-info__link').attr('href', $(this).data().link)
				console.log($(this).data().link);
				
				showInfo.call(this);
				$('.js-mobile-popup-flat-info').addClass(popupInfoClass);
				$body.addClass('modal-active');
				//$('.floor-plan-content').css('filter', 'blur(10px)');
			});

			$('.js-mobile-popup-flat-info-close').on('click', function (e) {
				gsap.to($('.js-mobile-popup-flat-info'), {
					autoAlpha: 0,
					yPercent: 25,
					clearProps: "all",
					ease: exI,
					onComplete: ()=>{
						$body.removeClass('modal-active');
						$('.js-mobile-popup-flat-info').removeClass(popupInfoClass);
						//$('.floor-plan-content').css('filter', 'none');
					}
				})
			});

	}


				const $floorTipList = $('.js-floor-list');
				const floorTipClass = 'active-tip';

				const popupInfoClass = 'mobile-popup-flat-info--active';
				const popupInfoClassLeave = 'mobile-popup-flat-info--active-leave';
				

				$floorTipList.on('click', '.js-arrow-close', function () {
					$floorTipList.removeClass(floorTipClass);
				});
				$floorTipList.on('touchstart', function (e) {
					
					if(e.target.closest('.js-arrow-close') === null){
						$(this).addClass(floorTipClass);
					}
					
				});
	

			
})(jQuery);

