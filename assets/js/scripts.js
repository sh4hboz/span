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
				slidesPerView: 1,
				spaceBetween: 20,
			},
			// when window width is >= 640px
			577: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			993: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1201: {
				slidesPerView: 5,
				spaceBetween: 24,
			},
		},
	});

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
				slidesPerView: 1,
				spaceBetween: 20,
			},
			// when window width is >= 640px
			577: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			993: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1201: {
				slidesPerView: 4,
				spaceBetween: 24,
			},
		},
	});
});
