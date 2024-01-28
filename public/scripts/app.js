const slider = new Swiper('.site-wrapper', {
	loop: false,
	direction: 'vertical',
	parallax: true,
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
	// 		translate: [0, '-20%', -1],
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
			if(window.innerWidth > 992){
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
		},
		afterInit(swiper){
			setTimeout(() => {
				document.querySelectorAll('.animation').forEach(el => el.classList.add('active'));
			}, 500)
			setTimeout(() => {
				swiper.slides[0].classList.remove('overflow')
			}, 3000)
		},
		beforeTransitionStart(swiper, speed, internal){
			document.querySelector('.site-menu').classList.remove('active');
		}
	},
	breakpoints: {
		320: {
			slidesPerView: 'auto',
			freeMode: {
				enabled: true,
				momentumBounce: false,
			},
		},
		992: {
			freeMode: false
		}
	}
});

window.addEventListener('resize', slider.update());

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
		  autoHeight: true
		},
		500: {
			slidesPerView: 1.67,
			autoHeight: false
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

// MENU
document.querySelectorAll('.burger-menu-open').forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault();
		document.querySelector('.site-menu').classList.add('active');
	});
});
document.querySelectorAll('.burger-menu-close').forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault();
		document.querySelector('.site-menu').classList.remove('active');
	})
});

// Video
const video = document.querySelectorAll(".video");
const playerEl = document.querySelector('.player-overlay');
let videoIsLoad = false;
let player;

if (video.length && playerEl) {
	video.forEach((v) => {
		const btn = v.querySelector(".play-btn");
		btn.addEventListener('click', function(e){
			const videoId = v.dataset.video;
			if(videoId){
				playerEl.classList.add('active')
				if(!videoIsLoad){
					embedVideo(videoId);
				}else if(player){
					player.playVideo();
				}
			}
		});
	});
}

function embedVideo(id){
	let tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	let firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	setTimeout(() => {
		player = new YT.Player('player', {
			videoId: id,
			playerVars: {
				'playsinline': 0,
				'rel': 0,
				'showinfo': 0
			},
			events: {
				'onReady': onPlayerReady,
			}
		})
	}, 1000)
}

function onPlayerReady(event) {
	event.target.playVideo();
	videoIsLoad = true;
}

document.querySelector('.close-video-player').addEventListener('click', function(e){
	if(player){
		player.pauseVideo();
	}
	this.closest('.player-overlay').classList.remove('active');
});
