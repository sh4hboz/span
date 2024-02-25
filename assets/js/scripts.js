$(document).ready(function () {
	// hamburger
	$(".hamurger_menu").on("click", function (e) {
		e.preventDefault();
		$(".header_menus").addClass("active");
	});

	$(".close").on("click", function (e) {
		e.preventDefault();
		$(".header_menus").removeClass("active");
	});

	// special offer swiper
	const offer_swiper = new Swiper(".offer_swiper", {
		// Default parameters
		slidesPerView: 5,
		spaceBetween: 24,
		loop: true,
		grabCursor: true,
		// autoplay: {
		// 	delay: 2000,
		// },
		navigation: {
			nextEl: ".swiper_offer_next",
			prevEl: ".swiper_offer_prev",
		},
		// pagination: {
		// 	el: ".swiper-pagination",
		// },
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1.6,
				spaceBetween: 15,
			},
			// when window width is >= 640px
			577: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			993: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1201: {
				slidesPerView: 5,
				spaceBetween: 24,
			},
		},
	});

	const hero_swiper = new Swiper(".hero", {
		slidesPerView: 1,
		navigation: {
			nextEl: ".hero .next",
			prevEl: ".hero .prev",
		},
	})
	$('.hamburger , .close_menu img').click(function(){
		$('.menus').toggleClass('active')
	})
	// catalog swiper
	const catalog_swiper = new Swiper(".catalog_swiper", {
		// Default parameters
		slidesPerView: 4,
		spaceBetween: 24,
		loop: true,
		grabCursor: true,
		// autoplay: {
		// 	delay: 2000,
		// },
		navigation: {
			nextEl: ".swiper_offer_next",
			prevEl: ".swiper_offer_prev",
		},
		// pagination: {
		// 	el: ".swiper-pagination",
		// },
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1.7,
				spaceBetween: 10,
			},
			// when window width is >= 640px
			577: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			769: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1201: {
				slidesPerView: 4,
				spaceBetween: 24,
			},
		},
	});

	// news mobile swiper
	const news_swiper = new Swiper(".news_swiper", {
		// Default parameters
		slidesPerView: 1.3,
		spaceBetween: 10,
		loop: true,
		centeredSlides: true,
		grabCursor: true,
		// autoplay: {
		// 	delay: 2000,
		// },
	});
});
