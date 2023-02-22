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

	const handleToggleSearch = function () {
		$('.header-toggle_button').click(function () {
			let header_search  = $('.header-toggle_button').closest('.header-search');
			header_search.toggleClass('header-search_show');
		});
	}

	$(function () {
		handleSliderHero();
		handleToggleSearch();
		$(window).resize(() => {
			windowWidth = $(window).width();
		});
	});
})(jQuery);
