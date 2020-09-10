
(function ($) {
	console.clear();
	
	
	
	
	
	
	
	
	const $slideBlock = $('.philosophy-block')
	
	
	/*
	* threeSlAnim start
	*/
	console.log($slideBlock.length - 1);
	function nav_filo(next) {

		const arrow_nav = '.js-philosophy-content-nav__arrow';
		const arrow_num = '.js-philosophy-content-nav__text';
		const obj = {
			paused: true,
			repeat: -1,
			stagger: 0.2,
			clearProps: 'all',
			overflow: 5
		}
		const tl = gsap.timeline(obj);
		
		gsap.set([arrow_nav, arrow_num ], {
			autoAlpha: 0
		});

		const ease_1 = BezierEasing(.42, .8, .39, .97);

		tl.fromTo(arrow_nav, 2, { yPercent: -150, autoAlpha: 0, }, { yPercent: 0, autoAlpha: 1, ease: ease_1 })
		tl.fromTo(arrow_num, 2, { yPercent: -200, autoAlpha: 0, }, { yPercent: 1, autoAlpha: 1, ease: ease_1 }, '<')
		tl.fromTo(arrow_num, 2, { xPercent: 0, autoAlpha: 1, }, { xPercent: 150, autoAlpha: 1, ease: ease_1 })
		tl.fromTo(arrow_nav, 2, { yPercent: 0, autoAlpha: 1, }, { yPercent: 150, autoAlpha: 0, ease: ease_1 }, '<0.3')
		tl.fromTo(arrow_num, 2, { autoAlpha: 1, }, { autoAlpha: 0, ease: ease_1 }, '<0.3')
		

		
		return tl;
	};

nav_filo().play()


	function filo_content_1(next) {
		const cnt = $slideBlock.eq(next).find('.philosophy__cnt');
		const title = $slideBlock.eq(next).find('.philosophy__title');
		const text = $slideBlock.eq(next).find('.philosophy__text');
		const bg = $slideBlock.eq(next).find('.philosophy-block__l');
		const obj = { paused: true }
		const tl = gsap.timeline(obj);
		
		gsap.set([ title, text, cnt], {
			autoAlpha: 0
		});

		const ease_1 = BezierEasing(.42, .8, .39, .97);

		


		if (next % 2 === 0) {
			tl.fromTo(bg, 1.2, { xPercent: -150, skewX: -25, autoAlpha: 0, }, { xPercent: 0, skewX: 0, autoAlpha: 1, ease: ease_1, }, '<')
			tl.fromTo([title, text], 0.9, { x: -300, autoAlpha: 0 }, { x: 0, ease: ease_1, stagger: 0.1, autoAlpha: 1 }, '<0.2')
			tl.fromTo( cnt, 0.9, { x: -100, autoAlpha: 0 }, { x: 0, ease: ease_1, stagger: 0.1, autoAlpha: 1 }, '<')
		} else {
			tl.fromTo(bg, 1.2, { xPercent: 150, skewX: 25, autoAlpha: 0, }, { xPercent: 0, skewX: 0, autoAlpha: 1, ease: ease_1, }, '<')
			tl.fromTo([title, text], 0.9, { x: 300, autoAlpha: 0 }, { x: 0, ease: ease_1, stagger: 0.1, autoAlpha: 1 }, '<0.2')
			tl.fromTo( cnt, 0.9, { x: 100, autoAlpha: 0 }, { x: 0, ease: ease_1, stagger: 0.1, autoAlpha: 1 }, '<')
		}
		
		return tl;
	};
	function filo_img_1(next) {
		const img = $slideBlock.eq(next).find('.philosophy__img');
		const IMG = $slideBlock.eq(next).find('.philosophy__img img');
		const img_l = $slideBlock.eq(next).find('.philosophy__img .philosophy-img-overlay__l');
		const img_r = $slideBlock.eq(next).find('.philosophy__img .philosophy-img-overlay__r');
		const obj = {
			paused: true,
			//...additionalSettings
		}
		const tl = gsap.timeline(obj);
		const ease_1 = BezierEasing(.42, .8, .39, .97);
		const ease_2 = BezierEasing(.23, .86, .37, 1.02);
		const ease_3 = BezierEasing(.15, .51, .19, .88);
	
	gsap.set([img], {
		autoAlpha: 0
	});
	
		tl.fromTo(IMG, 1.1, {scale: 1.8 }, {scale: 1, ease: ease_1 })
		tl.fromTo(img, 0.9, { yPercent: -100,  autoAlpha: 0 }, { yPercent: 0,  autoAlpha: 1, ease: ease_2 }, '<')
		tl.fromTo(img_l, 0.7, { xPercent: -15, skewX: -5 }, {  skewX: 0, xPercent: -100, ease: ease_3 }, '<0.1')
		tl.fromTo(img_r, 0.7, { xPercent: 25, skewX: -5 }, {  skewX: 0, xPercent: 100, ease: ease_3 }, '<')
	
	return tl;
	};

	gsap.set('.filo-transition__overlay', { yPercent: -100 });
	
	function filo_transition(cnt, callbackChangeSlide, filoInAnim) {
		const overlay = '.filo-transition__overlay';
		const obj = { paused: true };

		const tl = gsap.timeline(obj);
		const ease_1 = BezierEasing(.76,1.21,.85,.94);
		const ease_2 = BezierEasing(0, 1.21, 0, .85);
		
		gsap.set([overlay], {
			yPercent: -100
		});

		tl.add(filo_content_out(cnt).play())

		tl.fromTo(overlay, 1, { yPercent: -100 }, { yPercent: 0, ease: exI, onComplete: ()=>{
			callbackChangeSlide();
		}}, '<-0.1')

		tl.fromTo(overlay, 0.3, { yPercent: 0 }, { immediateRender: false, yPercent: 100, ease: exO })

		tl.add(()=>{
			filoInAnim.play();
		}, '<')
		return tl;
	};



	function filo_content_out(current) {
		const left = $slideBlock.eq(current).find(`.philosophy-block__l`);
		const right = $slideBlock.eq(current).find(`.philosophy-block__r`);

		const tl = gsap.timeline({ paused: true });
		const ease_out = BezierEasing(.46, -0.66, .58, .08);
		
		tl.fromTo([right, left], 1, {
			yPercent: 0,
			autoAlpha: 1
		}, {
			yPercent: 100,
			clearProps: 'all',
			autoAlpha: 0,
			stagger: 0.1,
			ease: ease_out
		})
		return tl;
	};

	//filo_transition().play()
	//createAnimationTool(filo_transition)
	



	function filo__1(next, additionalSettings = {}) {
		const tl = gsap.timeline({
			paused: true,
			...additionalSettings
		});
		
		tl.add(filo_img_1(next).play().timeScale(0.8))
		tl.add(filo_content_1(next).play().timeScale(0.9), '<-0.015')

		return tl;
	};



	
	
	
	

//filo__1().play().timeScale(0.9)

	/*
	* threeSlAnim end
	*/
	
	
	
	
	
	
	
	
let page = {};

		if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
			
			page = new Paginator({
			container: '.philosophy-block',
			speed: 2600, // speed animation page transition
			
		});

		// .js-philosophy-content-nav-btn

	$('.js-philosophy-content-nav-btn').on('click', function () {
		const changeSlide = function () {
			page.slides.forEach(el => el.classList.add('slide--hidden'));
			page.slides[0].classList.remove('slide--hidden');
			page.changeActiveSlide = 0;
		}
		$body.attr('data-active', 1);
		// pageTransitionLeft(changeSlide, secondSlAnim).play();
					filo_transition(6, changeSlide, filo__1(0)).play().timeScale(0.9)

	});

		filo__1(0).play().timeScale(0.9)
		page.canGo = true;
		$body.attr('data-active', 1);
		
		PubSub.subscribe('gotoSlide', function (msg, data) {
			const changeSlide = function(){
				page.slides.forEach(el => el.classList.add('slide--hidden'));
				page.slides[data.to].classList.remove('slide--hidden');
			}

			switch (data.to) {
				case 0:
					$body.attr('data-active', 1);
					filo_transition(data.from, changeSlide, filo__1(data.to)).play().timeScale(0.9)
					break;
				case 1:
					$body.attr('data-active', 2);
					filo_transition(data.from, changeSlide, filo__1(data.to)).play().timeScale(0.9)
					break;
				case 2:
					
					$body.attr('data-active', 3);
					filo_transition(data.from, changeSlide, filo__1(data.to)).play().timeScale(0.9)
					break;
				case 3:
					$body.attr('data-active', 4);
					filo_transition(data.from, changeSlide, filo__1(data.to)).play().timeScale(0.9)
					break;
				case 4:
					$body.attr('data-active', 5);
					filo_transition(data.from, changeSlide, filo__1(data.to)).play().timeScale(0.9)
					break;
				case 5:
					$body.attr('data-active', 6);
					filo_transition(data.from, changeSlide, filo__1(data.to)).play().timeScale(0.9)
					break;
				case 6:
					$body.attr('data-active', 7);
					filo_transition(data.from, changeSlide, filo__1(data.to)).play().timeScale(0.9)
					break;
					
					default:
					break;
			}
		});
	} else {
		var controller = new ScrollMagic.Controller();
	
		[...$('div[data-filo_sec]')].forEach(function (el, i) {
			const sectionIndex = el.dataset.filo_sec;
			let animationFnc = filo__1;
	
			
	
			
			// switch (+sectionIndex) {
			// 	case 0:
			// 		animationFnc = filo__1
			// 		console.log(animationFnc);
					
			// 		break;
			// 	case 1:
			// 		animationFnc = filo__1
			// 		break;
			// 	case 2:
					
			// 		animationFnc = filo__1
			// 		break;
			// 	case 3:
			// 		animationFnc = filo__1
			// 		break;
			// 	case 4:
			// 		animationFnc = filo__1
			// 		break;
			// 	case 5:
			// 		animationFnc = filo__1
			// 		break;
			// 	case 6:
			// 		animationFnc = filo__1
			// 		break;
		
			// 	// case 6:
			// 	// 	animationFnc = sixSlAnim
			// 	// 	break;
	
			// 	default:
			// 		break;
			// }
	
			var scene = new ScrollMagic.Scene({
					triggerElement: el,
					triggerHook: 0.7,
					toggle: {
						reverse: false,
					},
					breakpoints: {
						1000: false
					},
				})
				// .addIndicators({
				// 	colorTrigger: "red",
				// 	colorStart: "red",
				// 	colorEnd: "red",
				// 	indent: 5
				// })
				.setTween(animationFnc(i,{
					paused: false
				}))
				.addTo(controller);
		})
	
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})(jQuery);