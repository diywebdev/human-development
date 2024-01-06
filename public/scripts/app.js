const slider = new Swiper('.site-wrapper', {
	a11y: {
		prevSlideMessage: 'Previous slide',
		nextSlideMessage: 'Next slide',
	  },
	loop: false,
	direction: 'vertical',
	// allowTouchMove: false,
	initialSlide: 3,
	// hashNavigation: {
	// 	replaceState: true,
	// },
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	effect: 'creative',
	creativeEffect: {
		prev: {
			// shadow: true,
			translate: [0, '-40%', -1],
		},
		next: {
			translate: [0, '100%', 0],
		},
	},
	speed: 1000,
	// hashNavigation: true,
	pagination: {
		clickable: true,
		el: '.site-pagination',
		type: 'bullets',
	},
	on: {
		init(swiper){
			let isScrolling = false;
			swiper.slides.map(slide => {
				slide.addEventListener('wheel', e => {
					const slideHeight = slide.clientHeight;
					const blockHeight = slide.querySelector('.screen-block').clientHeight;
					const slideScrollTop = slide.scrollTop;
					if (!isScrolling) {
						isScrolling = true;
						if(slideHeight === blockHeight || (slideHeight + slideScrollTop) >= blockHeight){
							if(e.deltaY > 0){
								swiper.slideNext()
							}else{
								swiper.slidePrev()
							}
						}
						else{
							if(e.deltaY < 0){
								swiper.slidePrev()
							}
						}

						setTimeout(function () {
						  isScrolling = false;
						}, 500);
					}
					// console.log('Slide hieght', slideHeight);
					// console.log('Block hieght', blockHeight);
					// console.log('DELTA', e.deltaY);
					// console.log('Slide scroll', slide.scrollTop);
				})
			})
		}
	}
});

function resizeSlider(){
	if(window.innerWidth < 993){
		slider.disable()
	}else{
		slider.enable()
	}
}

resizeSlider()

window.addEventListener('resize', resizeSlider())
