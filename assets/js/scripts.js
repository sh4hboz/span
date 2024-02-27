$(document).ready(function () {
	// special offer swiper
	if ($(".offer_swiper").length > 0) {
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
	}

	if ($(".hero .swiper").length > 0) {
		const hero_swiper = new Swiper(".hero .swiper", {
			slidesPerView: 1,
			loop: true,
			navigation: {
				nextEl: ".hero .swiper .next",
				prevEl: ".hero .swiper .prev",
			},
		});
	}

	$(".hamburger , .close_menu img").click(function () {
		$(".menus").toggleClass("active");
	});

	// catalog swiper
	if ($(".catalog_swiper").length > 0) {
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
	}

	// news mobile swiper
	if ($(".news_swiper").length > 0) {
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
	}

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
	if ($('.mySwiper').length > 0) {
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
	}

	$('.filter_title').click(function(){
		$(this).parent().toggleClass('active')
		$(this).siblings().slideToggle(300)
	})
	$('.filter_item .filter_collapse:not(.active .filter_collapse)').slideUp(0)
	if($('.filter_collapse').length > 0){
		$('.filter_collapse select').niceSelect();
	}

	$(".tab_navigation li").click(function (event) {
		event.preventDefault();
		index = $(this).index();
		$(".tab_navigation li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		$(".tab_content").eq(index).show();
	});

	if($('#double_slider').length > 0){
		$("#double_slider").ionRangeSlider({
		  min: 0,
		  max: 20000,
		  type: "double",
		  from: 0,
		  to: 20000,
		});

		$('#double_slider').change(function(){
			val1 = $('.irs-from').text().replace(' ','')
			val2 = $('.irs-to').text().replace(' ','')
			$('.input_wrap input:first-child').val(val1)
			$('.input_wrap input:last-child').val(val2)
		})
	}
	$('.change_item div').click(function(){
		$(this).toggleClass('active')
		$(this).siblings().toggleClass('active')
		$('.catalog_cards').toggleClass('grid')
	})

	$('.open_filter').click(function(){
		$("body").toggleClass("open_modal");
		$('.filter').toggleClass('active')
	})
	$('.filter .close_filter , .for_close').click(function(){
		$("body").removeClass("open_modal");
		$('.filter').removeClass('active')
	})

	if($('.gallery_swiper').length > 0){
		var gallery_swiper = new Swiper(".gallery_swiper",{
			slidesPerView: 3,
			spaceBetween: 25,
			navigation: {
				nextEl: ".gallery_swiper .next",
				prevEl: ".gallery_swiper .prev",
			},
			breakpoints: {
				0: {
					spaceBetween: 6,
				},
				576: {
					spaceBetween: 14,
				},
				768: {
					spaceBetween: 25,
				},
			},
		})
		var news_other = new Swiper(".news_other_",{
			slidesPerView: 2,
			spaceBetween: 25,
			navigation: {
				nextEl: ".news_other_ .next",
				prevEl: ".news_other_ .prev",
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 1.4,
					centeredSlides: true,
					loop: true,
				},
				576: {
					spaceBetween: 20,
				},
				768: {
					spaceBetween: 25,
				},
			},
		})
		Fancybox.bind('[data-fancybox]', {});
	}
});
