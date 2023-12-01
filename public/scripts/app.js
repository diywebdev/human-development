new Swiper('.swiper', {
	loop: false,
	direction: 'vertical',
	allowTouchMove: false,
	hashNavigation: {
		replaceState: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	mousewheel: {
		invert: false,
	},
    effect: "creative",
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
});
