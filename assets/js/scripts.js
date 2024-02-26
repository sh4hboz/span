$(document).ready(function () {
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

	const hero_swiper = new Swiper(".hero .swiper", {
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: ".hero .swiper .next",
			prevEl: ".hero .swiper .prev",
		},
	});
	$(".hamburger , .close_menu img").click(function () {
		$(".menus").toggleClass("active");
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

	$("header .blue_button").click(function (e) {
		e.preventDefault();
		$("body").addClass("open_modal modal1_active");
	});
	$(".modal_back .for_close , .modal .close_modal").click(function (e) {
		$("body").removeClass("open_modal modal1_active modal2_active");
	});

	if ($("#order_form").length != 0) {
		$("#order_form").validate({
			rules: {
				name: {
					required: true,
				},
				tel: {
					required: true,
					minlength: 12,
				},
			},
			submitHandler: function (form) {
				$("body").removeClass("modal1_active");
				$("body").addClass("modal2_active");

				return false;
			},
		});
	}

	const element = document.querySelector(".tel");
	const maskOptions = {
		mask: "+{7} 000 000 00 00",
	};
	const mask = IMask(element, maskOptions);

	// thumb swiper
	var swiper = new Swiper(".mySwiper", {
		loop: true,
		direction: "vertical",
		spaceBetween: 20,
		slidesPerView: 4,
		allowTouchMove: false,
		mousewheel: true,
	});
	var swiper2 = new Swiper(".mySwiper2", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 1,
		navigation: {
			nextEl: ".swiper_card_next",
			prevEl: ".swiper_card_prev",
		},
		thumbs: {
			swiper: swiper,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});

	// card_product tab
	// detail tab content
	$(".tab_content:first").show();
	$(".tab_navigation li:first").addClass("active");

	$(".tab_navigation li").click(function (event) {
		event.preventDefault();
		index = $(this).index();
		$(".tab_navigation li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		$(".tab_content").eq(index).show();
	});
});
