(function ($) {
	imagesLoaded(document.querySelectorAll('img.displacement__img'), () => {
	/**********************************/
	//console.clear();
	/*
	* change slide wheel scroll start
	*/
	
/*
	* page transition site start
*/ 








	
	
let page = {};

		if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
			page = new Paginator({
				container: 'section.section',
				speed: 2600, // speed animation page transition
				
			});

			$('.news-nav-link__goup').on('click', function(){
				const changeSlide = function () {
					page.slides.forEach(el => el.classList.add('slide--hidden'));
					page.slides[0].classList.remove('slide--hidden');
					page.changeActiveSlide = 0;
				}
				$body.attr('data-active', 2);
				pageTransitionLeft(changeSlide, secondSlAnim).play();
			});

		page.canGo = false;
	
		PubSub.subscribe('gotoSlide', function (msg, data) {
			const changeSlide = function(){
				page.slides.forEach(el => el.classList.add('slide--hidden'));
				page.slides[data.to].classList.remove('slide--hidden');
			}
			switch (data.to) {
				case 1:
					$body.attr('data-active', 2);
					pageTransitionLeft(changeSlide, secondSlAnim).play();
					break;
				case 2:
					$body.attr('data-active', 3);
					pageTransitionLeft(changeSlide, threeSlAnim).play();
					break;
				case 3:
					setGalleryPos($galleryPicture.length)
					$body.attr('data-active', 4);
					pageTransitionLeft(changeSlide, fourSlAnim).play();
					break;
				case 4:
					$body.attr('data-active', 5);
					const callback = ()=> {
						return {play: ()=> setGalleryPos(1)}
					}
					pageTransitionLeft(changeSlide, callback).play();
					break;
				case 5:
					setGalleryPos($galleryPicture.length)
					$body.attr('data-active', 6);
					pageTransitionLeft(changeSlide, sixSlAnim).play();
					break;
					
				default:
					pageTransitionLeft(changeSlide).play();
					break;
			}
	
		});
	} else {
		var controller = new ScrollMagic.Controller();
	
		[...$('section[data-home_sec]')].forEach(function (el, i) {
			const sectionIndex = el.dataset.home_sec;
			let animationFnc = null;
	
	
	
	
			switch (+sectionIndex) {
				case 2:
	
					animationFnc = secondSlAnim
					break;
				case 3:
					animationFnc = threeSlAnim
					break;
				case 4:
					animationFnc = fourSlAnim
					break;
				case 5:
					break;
				case 6:
					animationFnc = sixSlAnim
					break;
	
				default:
					break;
			}
	
			var scene = new ScrollMagic.Scene({
					triggerElement: el,
					triggerHook: 0.5,
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
				.setTween(animationFnc({
					paused: false
				}))
				.addTo(controller);
		})
	
	}




/*
	* secondSlAnim start
	*/

	function secondSlAnim(additionalSettings = {}) {
		const overlay = '.section__img-overlay';
		const content = '.section-second__title span';
		const text = '.section-second__text';

		const obj = {
			paused: true,
			...additionalSettings
		}
		const tl = gsap.timeline(obj);
		gsap.set([content, text], {autoAlpha:0});

		
		tl.fromTo(overlay, 1, {scaleX: 1}, {scaleX: 0, ease: ex})
		tl.call(()=>{
			hoverArrEl.forEach(el=> el.previous());
			hoverArrEl[0].next();
		}, null, '<')
		tl.staggerFromTo(content, 1.2, {xPercent: -30, autoAlpha: 0}, {xPercent: 0, autoAlpha: 1, ease: p4}, 0.1, '<-0.2')
		tl.fromTo(text, 1.2, {yPercent: 100, autoAlpha: 0}, {yPercent: 0, ease: ex, autoAlpha: 1}, '<')

		return tl;
	};
	secondSlAnim()

/*
	* secondSlAnim end
	*/

	/*
	* threeSlAnim start
	*/
	
	function threeSlAnim(additionalSettings = {}) {
	const overlay = '.section-third .section__img-overlay';
	const title = '.section-third__subtitle';
	const text = '.section-third__text';
	const link = '.section-third__link';
	const obj = {
		paused: true,
		...additionalSettings
	}
	const tl = gsap.timeline(obj);
	
	gsap.set([title, text, link], {autoAlpha:0});
	
		
	tl.fromTo(overlay, 1, {scaleX: 1}, {scaleX: 0, ease: ex})
	tl.call(()=>{
		hoverArrEl.forEach(el=> el.previous());
		hoverArrEl[1].next();
	}, null, '<')
	tl.staggerFromTo(title, 1.2, {xPercent: -30, autoAlpha: 0}, {xPercent: 0, autoAlpha: 1, ease: p4}, 0.1, '<-0.2')
	tl.fromTo(text, 1.2, {yPercent: 100, autoAlpha: 0}, {yPercent: 0, ease: ex, autoAlpha: 1}, '<')
	tl.fromTo(link, 1.2, {yPercent: 100, autoAlpha: 0}, {yPercent: 0, ease: ex, autoAlpha: 1}, '<')
	
	
	return tl;
	};
	threeSlAnim();
	
	/*
	* threeSlAnim end
	*/
	
	/*
	* fourSlAnim start
	*/
	
	function fourSlAnim(additionalSettings = {}) {
		const overlayBox = '.section-four-content';
		const content = '.js-data-four_stagger';
		const desc = '.features-item__desc';
		const num = '.features-item__num';
		gsap.set([overlayBox, content, num], {autoAlpha: 0});
		const obj = {
			paused: true,
			...additionalSettings
		}
		
		const tl = gsap.timeline(obj);
		
		tl.fromTo(overlayBox, 1.1, {scaleY: 0, autoAlpha: 0}, {scaleY: 1, autoAlpha: 1, ease: ex})
		tl.call(()=>{
			hoverArrEl.forEach(el=> el.previous());
			hoverArrEl[2].next();
		}, null, '<')
		tl.fromTo(content, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: ex, stagger: 0.1}, '<')
		tl.fromTo(desc, 1, {x: -50, autoAlpha: 0}, {x: 0, autoAlpha: 1, ease: ex, stagger: 0.1}, '<0.1')
		tl.fromTo(num, 1, {y: 50, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: ex, stagger: 0.1}, '<')
		tl.call(()=>{
			$('.js_num_1').animateNumber(
				{ number: 5 },{
					easing: 'swing',
					duration: 1200
				});
			$('.js_num_2').animateNumber(
				{ number: 17 },{
					easing: 'swing',
					duration: 1200
				});
			$('.js_num_3').animateNumber(
				{ number: 10 },{
					easing: 'swing',
					duration: 1200
				});
	
		}, null, '<')
	
	
		return tl;
	};
	
	fourSlAnim();
	/*
	* fourSlAnim end
	*/

	/*
	* sixSlAnim start
	*/
	function sixSlAnim(additionalSettings = {}) {
		const news = '.section__six .card';
		const title = '.section__six .card .card__title';
		const text = '.section__six .card .card__text';
		const titleSec = '.section__six .section-title';
		const overlay = '.section__six .hover-overlay';
		const logo = '.section__six .card .hover-logo';
		const logoL = '.section__six .card .hover-logo__l';
		const logoR = '.section__six .card .hover-logo__r';
		const btn1 = '.news-nav-link__goup';
		const btn2 = '.all-news';
	
		gsap.set([news, title, text, titleSec, logo, btn1, btn2], {autoAlpha: 0});
		gsap.set([logoL, logoR], {x: 0, y: 0, rotation: 0});
		gsap.set([overlay], {autoAlpha: 1});
		const obj = {
			paused: true,
			onComplete: ()=>{
				gsap.set([logoL, logoR, logo, overlay], {clearProps: 'all'});
			},
			...additionalSettings
		}
		const tl = gsap.timeline(obj);
			tl.fromTo([titleSec, btn1, btn2], 1, {y: 80, autoAlpha: 0}, {y:0, autoAlpha: 1, ease: ex})
			tl.fromTo(news, 1, {y: 80, autoAlpha: 0}, {y:0, autoAlpha: 1, stagger: 0.1, ease: ex}, '<')
			tl.fromTo(title, 1, {x: -120, autoAlpha: 0}, {x: 0, autoAlpha: 1, ease: ex}, '<')
			tl.fromTo(text, 1, {y: 120, autoAlpha: 0}, {y:0, autoAlpha: 1, ease: ex}, '<')
			tl.fromTo(logo, 1, {y: 120, autoAlpha: 0}, {y:0, autoAlpha: 1, ease: ex}, '<')
		return tl;
	};
	sixSlAnim()
	/*
	* sixSlAnim end
	*/





/*
 * page transition site end
 */


	/*
	* change slide wheel scroll end
	*/
	/**********************************/
	/**********************************/
	/*
	* main screen animation start
	*/
	
	 const tl = (function mainScreen() {
		 	spliterText('.main-overlay__text');
		// DOM
		const overlayL = '.anim-overlay__1';
		const overlayR = '.anim-overlay__2';
		const colorOverlay = '.main-overlay';
		const colorOverlayLogo = '.main-overlay__logo';
		const colorOverlayIconLogo = '.main-overlay__icon-logo';
		const colorOverlayText = '.main-overlay__text .gsap_word';
		const colorOverlaySmallArrow = '.main-overlay .arr';
		const firstImg = '.main-img-first';
		const letterXL = '.main-overlay .logo-letter--big';
		const letterSM = '.main-overlay .word-small';
		const title = $('.main-slaider__item').eq(0).find('.word-animate');
		const titleLine = '.wrap-additional__line'

		
		
		const obj = {
			onComplete: ()=> {
				page.canGo = true;
				$body.attr('data-active', 1);
			}
		}

		gsap.set([letterXL, letterSM, colorOverlayIconLogo,  colorOverlaySmallArrow, colorOverlayLogo, colorOverlayText, firstImg], {autoAlpha:0});
		const tl = gsap.timeline(obj);
		
		tl.fromTo(colorOverlay, 1.5, {yPercent: 50, autoAlpha: 1}, {yPercent: 0, autoAlpha: 1, ease: ex})
		tl.fromTo(letterXL, 0.65, {yPercent: 100, autoAlpha:0}, {yPercent: 0, autoAlpha:1, stagger: 0.1, ease: bc}, '<0.08')
		tl.fromTo(colorOverlaySmallArrow, 1.5, {yPercent: -100, autoAlpha:0}, {yPercent: 0, autoAlpha:1, stagger: 0.1, ease: bc}, '<0.08')
		tl.fromTo(letterSM, 1, {x: -30, autoAlpha:0}, {x: 0, autoAlpha:1, stagger: 0.3, ease: es}, '<0.06')
		tl.fromTo(overlayL, 2.3, {scaleX: 1, autoAlpha: 1}, {scaleX: 0, autoAlpha: 1, ease: ex}, '<-0.3')
		tl.fromTo(colorOverlayText, 0.85, {x: 200, autoAlpha: 0}, {x: 0, autoAlpha: 1, stagger: 0.05, ease: circO}, '-=1.5')
		tl.fromTo(colorOverlayIconLogo, 2, {autoAlpha: 0}, {autoAlpha: 1, stagger: 0.05, ease: circO}, '<')
		// OUT
		tl.fromTo(colorOverlay, 1.5, {yPercent: 0, autoAlpha: 1}, {yPercent: 100, autoAlpha: 1, ease: ex}, '<2')
		tl.fromTo(overlayR, 2.3, {scaleX: 1, autoAlpha: 1}, {scaleX: 0, autoAlpha: 1, ease: ex}, '<-0.3')
		tl.add(logo().play(), '<-0.3')
		tl.fromTo(title, 2.3, {yPercent: -100}, {yPercent: 0, ease: p4O, stagger: 0.1, clearProps: 'all'}, '<1')
		tl.fromTo(titleLine, 1.5, {width: 0,  y: -50}, {width: '100%',  y: 0, ease: p4O}, '<')
		
		return tl;
	})();
	

	tl.play();

	/*
	* main screen animation end
	*/
	/**********************************/
	/**********************************/
	/*
	 * main slider start
	 */

	class CustomSl {
		constructor(settings) {

			this.bindAll();

			this.container = document.querySelector(settings.container)
			this.slides = [...this.container.querySelectorAll(`${settings.container} > *`)]
			this.bullets = [...document.querySelectorAll(`${settings.dotsContainer} > *`)]
			this.data = {
				current: 0,
				next: 1,
				total: this.slides.length - 1,
			}

			this.state = {
				animating: false,
				text: false,
				initial: true
			}


			this.init()
		}

		bindAll() {
			['nextSlide', 'transitionNext']
			.forEach(fn => this[fn] = this[fn].bind(this))
		}

		setStyles() {
			this.slides.forEach((slide, index) => {
				if (index === 0) return

				slide.classList.add('slide--hidden');
			})

			this.bullets.forEach((bullet, index) => {
				if (index === 0) return

				bullet.classList.add('dots-btn--not-active');


			})
		}

		transitionNext(currentIdx, nextIdx) {

			const self = this;
			const current = this.slides[currentIdx];
			const next = this.slides[nextIdx];
			const overlayL = '.anim-overlay__1';
			const overlayR = '.anim-overlay__2';


			const currentText = current.querySelectorAll('.word-animate')
			const currentImg = current.querySelectorAll('.slider-img img')
			const currentTextLine = current.querySelectorAll('.wrap-additional__line')

			const nextText = next.querySelectorAll('.word-animate')
			const nextImg = next.querySelectorAll('.slider-img img')
			const nextTextLine = next.querySelectorAll('.wrap-additional__line')

			const currentBullet = this.bullets[currentIdx]
			const nextBullet = this.bullets[nextIdx];

			//currentBullet.classList.add('dots-btn--not-active');

			this.bullets.forEach(bullet => bullet.classList.add('dots-btn--not-active'))
			nextBullet.classList.remove('dots-btn--not-active');

			function transitionAnim() {

				const tl = new TimelineMax({
					onComplete: () => {
						self.state.animating = false;
					}
				});

				gsap.set(nextText, {
					clearProps: 'all'
				})


				TweenMax.set(nextImg, {
					scale: 1.2
				});
				// IN
				tl.fromTo(overlayR, 1.5, {
					scaleX: 0,
					autoAlpha: 1
				}, {
					scaleX: 1,
					autoAlpha: 1,
					ease: p2I
				})
				tl.fromTo(overlayL, 1.1, {
					scaleX: 0,
					autoAlpha: 1
				}, {
					scaleX: 1,
					autoAlpha: 1,
					ease: p2I
				}, '<0.4')
				tl.fromTo(currentText, 0.7, {
					yPercent: 0
				}, {
					yPercent: -100,
					ease: p2I,
					stagger: 0.1
				}, '-=1.3')
				tl.fromTo(currentTextLine, 0.7, {
					width: 120,
					y: 0
				}, {
					width: 0,
					y: -50,
					ease: p2I
				}, "<")

				tl.call(() => gsap.fromTo(currentImg, 1.5, {
					scale: 1
				}, {
					scale: 1.3,
					ease: p2I
				}), null, '<0.1')

				tl.call(() => {
					self.slides.forEach(el => el.classList.add('slide--hidden'));
					next.classList.remove('slide--hidden');
				}, null, null)

				// OUT
				tl.fromTo(overlayR, 1, {
					scaleX: 1,
					autoAlpha: 1
				}, {
					scaleX: 0,
					autoAlpha: 1,
					immediateRender: false,
					ease: "power1.out"
				}, '<')
				tl.fromTo(overlayL, 0.8, {
					scaleX: 1,
					autoAlpha: 1
				}, {
					scaleX: 0,
					autoAlpha: 1,
					immediateRender: false,
					ease: "power1.out"
				}, '<')
				tl.fromTo(nextText, 2.3, {
					yPercent: -100
				}, {
					yPercent: 0,
					ease: p4O,
					stagger: 0.1
				}, '-=1')
				tl.fromTo(nextTextLine, 1.5, {
					width: 0,
					y: -50
				}, {
					width: 120,
					y: 0,
					ease: p4O
				}, '<')
				tl.call(() => gsap.fromTo(nextImg, 1.3, {
					scale: 1.2
				}, {
					scale: 1,
					ease: "power1.out"
				}), null, '<-0.5')

				return tl
			}
			transitionAnim().play()
		}

		nextSlide(e) {
			if (this.state.animating) return
			this.state.animating = true

			if (e !== null) {
				const idxCurent = this.data.current;
				const idxNext = $(e.target).closest('.dots-item').data().slide;

				this.transitionNext(idxCurent, idxNext);

				this.data.current = idxNext;
				this.data.next = this.data.current === this.data.total ? 0 : this.data.current + 1
				console.log(this.data.next);

			} else {
				const idxCurent = this.data.current;
				const idxNext = this.data.next;

				this.transitionNext(idxCurent, idxNext);

				this.data.current = idxNext;
				this.data.next = this.data.current === this.data.total ? 0 : this.data.current + 1


			}
		}

		listeners() {

			// window.addEventListener('wheel', ()=>{
			// 	this.nextSlide(null);
			// });
			// window.addEventListener('touchmove', ()=>{
			// 	this.nextSlide(null);
			// });
			const self = this;
			setTimeout(()=>{
				setInterval(function(){
					self.nextSlide(null)
				}, 3000)
			}, 2000)
			$('.dots-btn').on('click', this.nextSlide)
		}


		init() {
			this.setStyles();
			this.listeners();

		}
	}

	const sl = new CustomSl({
		container: '.main-slaider',
		dotsContainer: '.dots',
	});

	/*
	 * main slider end
	 */
	/**********************************/

	/*
	 * slider start
	 */
	var
		$gallery = $(".gallery"),
		$galleryPictures = $(".gallery-pictures"),
		$galleryPicture = $(".gallery-picture"),
		lastPos = {
			x: 0
		},
		galleryPos = {
			x: 0
		},
		currentImage = 1,
		imageWidth = $('.gallery').width(),
		imageSpacing = 120,
		imageTotalWidth = $('.gallery').width(),
		speedLog = [],
		speedLogLimit = 5,
		minBlur = 2,
		maxBlur = 200,
		blurMultiplier = 0.25,
		lastBlur = 0,
		dragging = false,
		lastDragPos = {
			x: 0
		},
		dragPos = {
			x: 0
		},
		totalDist = 0,
		distThreshold = 10,
		distLog = [],
		distLogLimit = 10,
		momentumTween = null;

	function setBlur(v) {
		if (v < minBlur) v = 0;
		if (v > maxBlur) v = maxBlur;
		if (v != lastBlur) {
			$("#blur").get(0).firstElementChild.setAttribute("stdDeviation", v + ",0");
		}
		lastBlur = v;
	}

	$galleryPictures.css({
		webkitFilter: "url('#blur')",
		filter: "url('#blur')"
	});
	$galleryPicture.each(function (i) {
		var cur = $(this);
		// cur.click(function(){
		// 	if(Math.abs(totalDist)<distThreshold)
		// 		setGalleryPos(i);
		// });
		$(".gallery-pagination-dot").eq(i).click(function () {
			setGalleryPos(i + 1);
		})
	});

	function setGalleryPos(v, anim) {
		if (typeof anim == "undefined") anim = true;
		stopMomentum();
		TweenMax.to(galleryPos, anim ? 0.8 : 0, {
			x: -v * imageTotalWidth,
			ease: Quint.easeOut,
			onUpdate: updateGalleryPos,
			onComplete: updateGalleryPos
		});
	}

	function updateGalleryPos() {
		TweenMax.set($galleryPictures, {
			x: galleryPos.x + (imageWidth),
			force3D: true,
			lazy: true
		});
		var speed = lastPos.x - galleryPos.x;
		var blur = Math.abs(Math.round(speed * blurMultiplier));
		setBlur(blur);
		lastPos.x = galleryPos.x;

		var _currentImage = Math.round(-galleryPos.x / imageTotalWidth);
		if (_currentImage != currentImage) {
			currentImage = _currentImage;
			$(".gallery-pagination-dot-selected").removeClass('gallery-pagination-dot-selected');
			$(".gallery-pagination-dot").eq(currentImage - 1).addClass('gallery-pagination-dot-selected')
		}

	}
	$gallery.mousedown(function (event) {
		event.preventDefault();
		dragging = true;
		dragPos.x = event.pageX;
		lastDragPos.x = dragPos.x;
		totalDist = 0;
		distLog = [];

		stopMomentum();

		updateGalleryPosLoop();
	});
	$(document).mousemove(function (event) {
		if (dragging) {
			dragPos.x = event.pageX;
		}
	});

	function updateGalleryPosLoop() {
		if (dragging) {
			updateGalleryPos();
			var dist = dragPos.x - lastDragPos.x;
			lastDragPos.x = dragPos.x;
			totalDist += dist;
			distLog.push(dist);
			while (distLog.length > distLogLimit) {
				distLog.splice(0, 1);
			};
			galleryPos.x += dist;
			requestAnimationFrame(updateGalleryPosLoop)
		}
	}
	$(document).mouseup(function (event) {
		if (dragging) {
			dragging = false;
			var releaseSpeed = 0;
			for (var i = 0; i < distLog.length; i++) {
				releaseSpeed += distLog[i];
			};
			releaseSpeed /= distLog.length;

			var targetX = galleryPos.x + (releaseSpeed * 20);
			targetX = Math.round(targetX / imageTotalWidth) * imageTotalWidth;
			var targetImage = -targetX / imageTotalWidth;
			var excess = 1;
			if (targetImage < 1) {
				excess = targetImage;
				targetImage = 1;
			} else if (targetImage >= $galleryPicture.length) {
				excess = targetImage - ($galleryPicture.length - 1);
				targetImage = $galleryPicture.length - 1;
			}
			if (excess != 1) {
				targetX = -targetImage * imageTotalWidth;
			}
			momentumTween = TweenMax.to(galleryPos, 1 - (Math.abs(excess) / 20), {
				x: targetX,
				ease: Quint.easeOut,
				onUpdate: updateGalleryPos,
				onComplete: updateGalleryPos
			});

			if (Math.abs(totalDist) >= distThreshold) {
				event.preventDefault();
				event.stopPropagation();
			}
		}
	});

	function stopMomentum() {
		if (momentumTween != null) {
			momentumTween.kill();
			momentumTween = null;
			updateGalleryPos();
		}
	}

	setGalleryPos($galleryPicture.length, false);

	const gallPrevBtn = $('.js-gallery-pagination-arrow__prev');
	const gallNextBtn = $('.js-gallery-pagination-arrow__next');
	gallPrevBtn.on('click', function () {
		const idx = (currentImage === 1) ? $galleryPicture.length : currentImage - 1
		setGalleryPos(idx);
	});

	gallNextBtn.on('click', function () {
		const idx = (currentImage === $galleryPicture.length) ? 1 : currentImage + 1
		setGalleryPos(idx);
	});

	/*
	 * slider end
	 */

});
})(jQuery);