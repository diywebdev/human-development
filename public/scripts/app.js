const slider = new Swiper('.site-wrapper', {
	loop: false,
	direction: 'vertical',
	parallax: true,
	parallaxTransition: 3000,
	hashNavigation: {
		replaceState: false,
		watchState: true
	},
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	// effect: 'creative',
	// creativeEffect: {
	// 	prev: {
	// 		translate: [0, '-40%', -1],
	// 	},
	// 	next: {
	// 		translate: [0, '100%', 0],
	// 	},
	// },
	speed: 1000,
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
							}else if(slide.scrollTop == 0 && e.deltaY < 0){
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

window.addEventListener('resize', resizeSlider)


const reviewsSlider = new Swiper('.reviews-slider', {
	spaceBetween: 10,
	speed: 1000,
	navigation: {
		nextEl: '.reviews-slider-next',
		prevEl: '.reviews-slider-prev',
	},
	breakpoints: {
		320: {
		  slidesPerView: 1,
		},
		500: {
			slidesPerView: 1.67,
		},
		768: {
			slidesPerView: 2.37,
		},
		1171: {
			slidesPerView: 3.37,
		},
		1500: {
			slidesPerView: 4.57,
		}
	  }
})
