new Swiper('.swiper', {
	loop: false,
	direction: 'vertical',
	// allowTouchMove: false,
	// hashNavigation: {
	// 	replaceState: true,
	// },
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	mousewheel: true,
	effect: 'creative',
	creativeEffect: {
		prev: {
			// shadow: true,
			// scale: 0.9,
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
});
