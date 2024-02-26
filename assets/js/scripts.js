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

	$('header .blue_button').click(function(e){
		e.preventDefault()
		$('body').addClass('open_modal modal1_active')
	})
	$('.modal_back .for_close , .modal .close_modal').click(function(e){
		$('body').removeClass('open_modal modal1_active modal2_active')
	})

	if($('#order_form').length != 0){
		$('#order_form').validate({
		  rules:{
			name:{
			  required: true,
			},
			tel:{
			  required: true,
			  minlength: 12,
			}
		  },
		  submitHandler: function(form) { 
			$('body').removeClass('modal1_active')
			$('body').addClass('modal2_active')
			
			return false;
		}
		})
	  }
	});

	if($("input[type='tel']").length !==0){
		$("input[type='tel']").inputmask("+7 999 999 99 99 ",{clearMaskOnLostFocus: true,});
	}
