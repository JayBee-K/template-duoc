(function ($) {
	'use strict';
	let windowWidth = $(window).width();

	const handleSliderHero = function () {
		if ($('#slider-hero').length) {
			new Swiper('#slider-hero .swiper', {
				speed: 400,
				slidesPerView: 1,
				preloadImages: false,
				loop: true,
				autoplay: {
					delay: 8000,
					disableOnInteraction: false,
				},
				pagination: {
					el: "#slider-hero .swiper-actions-pagination",
					clickable: true,
				},
				navigation: {
					nextEl: '#slider-hero .swiper-actions_next',
					prevEl: '#slider-hero .swiper-actions_prev',
				},
			});
		}
	}

	const handleSliderPartner = function () {
		if ($('#slider-partner').length) {
			new Swiper('#slider-partner .swiper', {
				speed: 400,
				slidesPerView: 6,
				spaceBetween: 20,
				preloadImages: false,
				loop: true,
				autoplay: {
					delay: 8000,
					disableOnInteraction: false,
				},
			});
		}
	}

	const handleToggleSearch = function () {
		$('.header-toggle_button').click(function () {
			let header_search = $('.header-toggle_button').closest('.header-search');
			header_search.toggleClass('header-search_show');
		});
	}

	$(function () {
		handleSliderHero();
		handleSliderPartner();

		handleToggleSearch();
		$(window).resize(() => {
			windowWidth = $(window).width();
		});
	});
})(jQuery);
