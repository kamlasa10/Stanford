
@@include('./libs.js');

function spliterText($title, type = 'type_text'){
		const titleStr = $($title).text().replace(/\s{2,}/gm, '')
		let titleArr = [];

		let newStr = '';
		let wrap = ()=>{};
		switch (type) {
			case 'latter':
				
				titleArr = titleStr.split('');
				wrap = (word)=> `<span class="gsap_latter">${word}</span>`
				break;
		
			default:
				titleArr = titleStr.split(' ');
				wrap = (word)=> `<span class="gsap_word">${word}</span>&nbsp;`
				break;
		}
		titleArr.forEach((el)=>{
			newStr += wrap(el);
		});

		$($title).html(newStr)
}



	var es = Power2.easeOut;
	var ex = "expo.inOut";
	var exI = "expo.in";
	var exO = "expo.out";

	var p4 = "power4.inOut";
	var p4I = "power4.in";
	var p4O = "power4.out";

	var p2 = "power2.inOut";
	var p2I = "power2.in";
	var p2O = "power2.out";

	var circ = "circ.inOut";
	var circO = "circ.out";
	var circI = "circ.in";
	var bc = "back.inOut(1.7)";

const $body = $('body');
const $window = $(window);
// force all gsap animation
gsap.config({force3D: true});


let hoverArrEl = [];
	
Array.from(document.querySelectorAll('.js-grid__item-img')).forEach((el) => {
	const imgs = Array.from(el.querySelectorAll('img'));

	const imagesRatioNum = ($(el).height() / $(el).width()).toFixed(2)
	const hoverEffectInstatse = new hoverEffect({
		parent: el,
		intensity: el.dataset.intensity || undefined,
		easing: el.dataset.easing || undefined,
		imagesRatio: imagesRatioNum || undefined,
		hover: false,
		image1: imgs[0].getAttribute('src'),
		image2: imgs[1].getAttribute('src'),
		displacementImage: el.dataset.displacement,
				 angle2: Math.PI / 2,
				});
				
			 hoverArrEl.push(hoverEffectInstatse)
});
			//});

// GLOBAL ANIMATION GSAP

	function logo(additionalSettings = {}) {
		// DOM
		const overlayLogo = '.desktop-header-logo-wrap';
		const letterXL = '.desktop-header-logo-wrap .logo-letter--big';
		const letterSM = '.desktop-header-logo-wrap .word-small';

		const obj = {
			paused: true,
			...additionalSettings
			// onUpdate: ()=>{
			// 	const self = this
			// 	console.log(123, self);
				
			// }
		}

		gsap.set([overlayLogo, letterSM, letterXL], {autoAlpha:0});
		const tl = gsap.timeline(obj);
		
		tl.fromTo(overlayLogo, 1.5, {scaleY: 0.8, scaleX: 0, autoAlpha:0}, {scaleY: 1, scaleX: 1, autoAlpha:1, ease: "power4.inOut"})
		tl.fromTo(letterXL, 1, {yPercent: 100, autoAlpha:0}, {yPercent: 0, autoAlpha:1, stagger: 0.1, ease: bc}, '<-0.25')
		tl.fromTo(letterSM, 1.5, {xPercent: -100, autoAlpha:0}, {xPercent: 0, autoAlpha:1, stagger: 0.3, ease: es}, '<')
		
		return tl;
	};
	

	class Paginator {
		constructor(settings) {
			this.slides = [...document.querySelectorAll(`${settings.container}`)]
			this.speed = settings.speed,
			this.activeSlide = 0;
			this.canGo = true;
			this.min = 0;
			this.max = this.slides.length - 1;
			
			this.scrollEvents();
			this.setStyle();
		}
		set changeActiveSlide(value) {
			this.activeSlide = value
		}
		
		setStyle() {
			var self = this;

			self.slides.forEach(el => el.classList.add('slide--hidden'));
			self.slides[0].classList.remove('slide--hidden')

		}
		scrollEvents() {
			var self = this;


			$(window).on('wheel', function(e) {
				if(!self.canGo) return;
				
				
				e = e.originalEvent;
				var direction = e.deltaY > 0 ? 1 : -1;
				
				var newSlide = self.activeSlide + direction;
				if(newSlide > self.max || newSlide < self.min) return;
				self.canGo = false;
				
				PubSub.publish( 'gotoSlide', {from: self.activeSlide, to: newSlide, direction} );
				self.activeSlide = newSlide;
				
				// add delay
				setTimeout(()=> { self.canGo = true; }, self.speed);
			});
		}
	}

		function logoPageTransitionIn () {
		const logoL = '.loader-logo__l';
		const logoR = '.loader-logo__r';
		gsap.set([logoL, logoR], {autoAlpha: 0});
		const obj = {
		paused: true,
		}
		const tl = gsap.timeline(obj);
			tl.fromTo(logoL, 0.25, {x: -30, y: -30, rotation: -25, autoAlpha: 0}, {overwrite: 'auto',x: 0, y: 0, rotation: 0, autoAlpha: 1, ease: circ})
			tl.fromTo(logoR, 0.25, {x: 30, y:30, autoAlpha: 0, rotation: -25}, {overwrite: 'auto', x: 0, y:0, autoAlpha: 1, rotation: 0, ease: circ}, '<')
		return tl;
	};
	logoPageTransitionIn();

	function logoPageTransitionOut () {
		const logoL = '.loader-logo__l';
		const logoR = '.loader-logo__r';
		const obj = {
		paused: true,
		}
		const tl = gsap.timeline(obj);
			tl.fromTo(logoL, 0.05, { autoAlpha: 1}, {immediateRender: false , autoAlpha: 0, ease: 'none'})
			tl.fromTo(logoR, 0.05,  { autoAlpha: 1}, {immediateRender: false , autoAlpha: 0, ease: 'none'}, '<')
		return tl;
	};


	function pageTransitionLeft(callbackChangeSlide, callbackAnimationSlide = null) {
		const obj = {
			paused: true
		}
		const overlay_1 = '.transition-effect__1';
		const overlay_2 = '.transition-effect__3';

		const tl = gsap.timeline(obj);

		tl.fromTo(overlay_1, 0.4, {rotation: 45, scale: 0}, {rotation: 45, scale: 1, ease: "sine.out"})
		tl.fromTo(overlay_2, 0.4, {rotation: 45, scale: 0}, {rotation: 45, scale: 1, ease: "sine.out"}, '<')
		
		tl.call(()=> logoPageTransitionIn().play(), null, '-=0.25')
		tl.call(callbackChangeSlide)
		tl.fromTo(overlay_1, 0.4, {rotation: 45, scale: 1}, {rotation: 45, scale: 0, ease: "sine.out"}, '+=0.4')
		tl.fromTo(overlay_2, 0.4, {rotation: 45, scale: 1}, {rotation: 45, scale: 0, ease: "sine.out"}, '<')
		tl.call(()=> logoPageTransitionOut().play(), null, '-=0.4')
		tl.call(()=> {
			if(callbackAnimationSlide !== null) {
				callbackAnimationSlide().play();
			}
		}, null, '<-0.25');
		return tl;
	};
	// function pageTransitionRight(callback) {
	// 	const obj = {
	// 		paused: true,
	// 	}
	// 	const overlay_1 = '.transition-effect__2';
	// 	const overlay_2 = '.transition-effect__4';
	// 	const tl = gsap.timeline(obj);

	// 	tl.fromTo(overlay_1, 0.4, {rotation: 45, scale: 0}, {rotation: 45, scale: 1, ease: 'p4O'})
	// 	tl.fromTo(overlay_2, 0.4, {rotation: 45, scale: 0}, {rotation: 45, scale: 1, ease: 'p4O'}, '<')
	// 	tl.fromTo(overlay_1, 0.4, {rotation: 45, scale: 1}, {rotation: 45, scale: 0, ease: 'p4O'}), '-=0.4'
	// 	tl.fromTo(overlay_2, 0.4, {rotation: 45, scale: 1}, {rotation: 45, scale: 0, ease: 'p4O'}, '<')
		
	// 	return tl;
	// };
	//pageTransitionRight().play()
	// 

















	// for adaptove mobile, disable wheel scroll 

	function checkWidthAnimation() {

		if (window.screen.width > 1020) {
			$body.addClass('js_animation');
		} else {
			$body.removeClass('js_animation');
		}
	}
	$window.resize(checkWidthAnimation)
	checkWidthAnimation();







(function ($) {

	//console.clear();

	$(".loader-wrap").delay(500).fadeOut(300);



	



	









	/*
	* form submit site start
	*/
	$('.js-main-form__input').on('focus', function () {
		$(this).parent().addClass('js-input-focus');
	}).blur(function () {
		if ($(this).val() === '') {
			$(this).parent().removeClass('js-input-focus');
		}
	});
	
	$('#call-form').on('submit', function (e) {
		event.preventDefault();
		var parent = e.target;
		ajax_form(parent);
	});
	
	function ajax_form(e) {
		event.preventDefault();
		var err = [];
		let serverAnsver = {};
		var rulesPattern = {
			email: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
			tel: /^\+38\(\d{3}\)\d{7}$/
		};
		var validatorMethods = {
			empty: function (el) {
				return (el === '') ? true : false;
			},
			pattern: function (el, pattern) {
				return pattern.test(el);
			},
			contains: function (el1, el2) {
				return (el1 == el2) ? false : true;
			},
			check: function (el) {
				return (el.checked) ? false : true;
			},
			max: function (el) {
				return (el.length > 5) ? true : false;
			}
		}
		var removeAnimationClass = function (selector, classAnimation) {
			selector.addClass(classAnimation);
			selector.on("animationend", function () {
				selector.removeClass(classAnimation);
			});
		}
		var pushError = function (key) {
			err.push(key);
		}
		var showError = function (key) {
			var errorMessage = $(this).next().data("errormessage"); // добавляем в input сообщение об ошибке из dataAttr и class
			var inputText = $(this).next().find('.main-form__text');
			($(this).closest('.main-form-block').hasClass('js-input-focus')) ? removeAnimationClass(inputText, 'shake-focus'): removeAnimationClass(inputText, 'shake')
	
			inputText.text(errorMessage);
			$(this).addClass('js-no-valid');
			pushError(key)
		}
		var showDefaultMessage = function () {
			var defaultMessage = $(this).next().data("defaultmessage"); // при клике на input убираем сообщение и class
			$(this).next().find('.main-form__text').text(defaultMessage);
	
			$(this).removeClass('js-no-valid');
		}
		var str = $("#" + e.id).serialize();
		//var x = document.forms[e.id]["name"].value;
		//var y = document.forms[e.id]["tel"].value;
		//	console.log(str);
	
	
		var errors = true; // по умолчанию ошибок в форме нет
		$(e).find('.main-form__input-requaired').each(function () {
			var rule = $(this).data("rule").split(' ');
			if ($(this).data("patterns") != undefined) {
				var pattern = $(this).data("patterns").split(' ');
			}
			if ($(this).data("compare") != undefined) {
				var compare = $(this).data("compare").split(' ');
			}
	
			rule.forEach((el) => {
	
	
				switch (el) {
					case 'pattern':
						pattern.forEach((elPat) => {
							errors = !validatorMethods[el]($.trim($(this).val()), rulesPattern[elPat]);
							if (errors) showError.call($(this), elPat);
						});
						break;
					case 'contains':
						var compareElemOne = $('#' + compare[0]).val();
						var compareElemTwo = $('#' + compare[1]).val();
						errors = validatorMethods[el](compareElemOne, compareElemTwo);
						if (errors) showError.call($(this), el);
						break;
					case 'check':
						errors = validatorMethods[el]($(this)[0]);
						if (errors) showError.call($(this), el);
						break;
					default:
						errors = validatorMethods[el]($.trim($(this).val()));
						if (errors) showError.call($(this), el);
				}
			})
	
			$(".main-form__input").on("mouseup", showDefaultMessage);
	
		});
		if (err.length == 0) {
			get(str, "./static/val.php", true, (data) => {
				serverAnsver = data.error;
				for (let key in serverAnsver) {
					showErrorMessage.call(e, key, serverAnsver[key])
				};
	
				if (serverAnsver.length == 0) {
					get(str, "./static/val.php", true, () => {
						$.ajax({
								method: "POST",
								url: "./static/val.php",
								data: str,
								beforeSend: function () {
									$(e).find('button.js-main-form__button').text('Отправка...') // замена текста в кнопке при отправке
									$('body').css('cursor', 'wait')
								},
								error: function (data) {
										swal({
											type: "error",
											title: "Ошибка!",
											text: `Что-то пошло не так статус ${data.status}`,
											buttonsStyling: !1,
											confirmButtonClass: "btn btn-success"
										});
									//$(e).find('button.js-main-form__button').text('Ошибка отправки!'); // замена текста в кнопке при отправке в случае
								}
							})
							.done(function (msg) {
								$('.form-succses').addClass('form-succses-active');
								$(e).find('.main-form__input-requaired').each(function (el) {
									$(this).val('');
									showDefaultMessage.call($(this));
								});
								$(e).find('.main-form-block.requaired').removeClass('js-input-focus');
								$('body').css('cursor', 'default');
								//location.replace('/message/');
								$(e).find('button.js-main-form__button').text('Отправить');
								swal({
									type: "error",
									title: "Успех!",
									text: "Заявка успешно отправлена",
									buttonsStyling: !1,
									confirmButtonClass: "btn btn-success"
								});
							
							});
					});
				}
			});
	
		}
	
		function showErrorMessage(elem, text) {
			const element = $(this).find(`[data-type="${elem}"] .main-form__text`);
			const inp = element.closest('.requaired').find('.main-form__input-requaired');
			inp.addClass('js-no-valid');
			removeAnimationClass(element, 'shake-focus')
			element.text(text);
		}
	}
	
	/*
	 * form submit site end
	 */
	/**********************************/
	/*
		* data time start
	*/
		$.datetimepicker.setLocale('ru');
		var logic1 = function (currentDateTime) {
			if (currentDateTime.getDate() == new Date().getDate()) {
				this.setOptions({
					minTime: new Date()
				});
			} else {
				this.setOptions({
					minTime: '9:00'
				});
			}
		};
	
		$('.js-datetimepicker_dark').datetimepicker({
			//            theme:'dark',
			// value: 'trololo',
			// value: new Date(),
			minDate: new Date(),
			maxTime: '20:00',
			yearStart: 2019,
			yearEnd: 2019,
			dayOfWeekStart: 1,
			onSelectDate: logic1,
			onShow: logic1
	
		});
	/*
		* data time end
	*/
	/**********************************/
	/*
		* popup open start
	*/

	const callTimeRadio = $('.js-time-call');
	const inputTime = $('.js-main-form-block__data-time');

	callTimeRadio.on('change', function(){
		const val = +$(this).val();
		if(val === 0){
			inputTime.slideUp(300);
			inputTime.find('.main-form__input').removeClass('main-form__input-requaired');
		} else {
			inputTime.slideDown(300);
			inputTime.find('.main-form__input').addClass('main-form__input-requaired');
		}
		
	});



	let $modal = $(".js-modal"),
		$overlay = $(".js-modal-overlay"),
		$img = $(".popup-call__bg-overlay"),
		blocked = false,
		unblockTimeout = null;
					
		TweenMax.set($modal, {
			autoAlpha: 0
		})

		var isOpen = false;

		function openModal() {
			if (!blocked) {

				$body.addClass('modal-active');
				
				// TweenMax.to($overlay, 0.3, {
				// 	autoAlpha: 1
				// });
				// let customEase = gsap.parseEase("Elastic.easeOut(0.4, 0.3)");

				// TweenMax.fromTo($modal, 0.5, {
				// 	x: (-$(window).width() - $modal.width()) / 2 - 50,
				// 	scale: 0.9,
				// 	autoAlpha: 1
				// }, {
				// 	delay: 0.1,
				// 	rotationY: 0,
				// 	scale: 1,
				// 	opacity: 1,
				// 	x: 0,
				// 	z: 0,
				// 	ease: customEase,
				// 	force3D: false
				// });
				// $.startUpdatingBlur(800);



				isOpen = true;

				const obj = {
					paused: true,
				}

				const tl = gsap.timeline(obj);
				tl.fromTo($modal, 1, {
					xPercent: -150,
					skewX: -25,
					autoAlpha: 0,
				}, {
					xPercent: 0,
					skewX: 0,
					autoAlpha: 1,
					ease: exO,
				})
				tl.fromTo($img, 1, {scale: 1.3}, {scale: 1}, '<')
				return tl;
			}
		}

		function closeModal() {
				$body.removeClass('modal-active');

				// block(400);
				// TweenMax.to($overlay, 0.3, {
				// 	delay: 0.3,
				// 	autoAlpha: 0
				// });
				// TweenMax.to($modal, 0.3, {
				// 	x: ($(window).width() + $modal.width()) / 2 + 100,
				// 	scale: 0.9,
				// 	ease: Quad.easeInOut,
				// 	force3D: false,
				// 	onComplete: function () {
				// 		TweenMax.set($modal, {
				// 			autoAlpha: 0
				// 		});
				// 	}
				// });
				// $.startUpdatingBlur(400);
				isOpen = false;
				const obj = {paused: true}

				const tl = gsap.timeline(obj);
				tl.fromTo($modal, 1.3, {
					xPercent: 0,
					skewX: 0,
				}, {
					xPercent: -150,
					skewX: 2,
					ease: ex,
				})
			tl.fromTo($img, 1, { scale: 1 }, { scale: 1.3, ease: ex,}, '<0.1')
				return tl;
		}



		$body.on('click', '.js-call-popup', function () {
			openModal().play().timeScale(0.9);
		});
		$body.on('click', ".modal-overlay,.js-close-btn", function () {
			closeModal().play().timeScale(0.9);
		});

		//$modal.initBlur(0.5);
	/*
		* popup open end
	*/
	/**********************************/
	/**********************************/
	/*
	* menu start
	*/


	
	
	
	
spliterText('.js-menu__title-text', 'latter');

let menuIsOpen = false,
		$menu = $(".js-menu");
	
	
gsap.set($menu, {xPercent: -150});
		
		
function openMenu() {
	const	$menuTitle = [...$(".js-menu .gsap_latter")].reverse(),
				$footerItem = [...$(".js-menu .gsap-footer-stagger")].reverse();
		menuIsOpen = true;

	const obj = {
		paused: true,
	}
	
	const tl = gsap.timeline(obj);
		tl.fromTo($menu, 1, {
			xPercent: -150,
			skewX: -25,
		}, {
			xPercent: 0,
			skewX: 0,
			ease: exO,
		})
		tl.fromTo([$footerItem, $menuTitle], 0.7, {
			x: -80,
			autoAlpha: 0,
		}, {
			x: 0,
			ease: exO,
			autoAlpha: 1,
			stagger: 0.05
		}, '0.05')
		tl.fromTo('.js-menu .icon--sign', 0.5, {
			rotation: -80,
			autoAlpha: 0
		}, {
			rotation: 0,
			autoAlpha: 1
		}, '-=0.7')
	return tl;
};

function closeMenu() {
	const $menuTitle = [...$(".js-menu .gsap_latter")],
				$footerItem = [...$(".js-menu .gsap-footer-stagger")];
	menuIsOpen = false;
	gsap.set([], {autoAlpha:0});
	const obj = {
	paused: true,
	}
	
	const tl = gsap.timeline(obj);
		tl.fromTo($menu, 1.3, {
			xPercent: 0,
			skewX: 0,
		}, {
			xPercent: -150,
			skewX: 2,
			ease: ex,
		})
		tl.fromTo([$footerItem, $menuTitle], 0.7, {
			x: 0,
			autoAlpha: 1,
		}, {
			x: -80,
			autoAlpha: 0,
			ease: ex,
			stagger: 0.05
		}, '0.05')
		tl.fromTo('.js-menu .icon--sign', 0.5, {
			rotation: 0,
			autoAlpha: 1
		}, {
			rotation: -80,
			autoAlpha: 0
		}, '-=0.6')
	return tl;
};

function toggleMenu() {
	if (menuIsOpen) {
		$body.removeClass('menu-open');
		closeMenu().play().timeScale(0.9);
	} else {
		$body.addClass('menu-open');
		openMenu().play().timeScale(0.9);
	}
}

$body.on('click', '.js-menu-btn, .js-close-menu-btn', function () {
	toggleMenu();
});

/*
* menu end
*/
/**********************************/











})(jQuery);

