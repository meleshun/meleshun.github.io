'use strict'

// FIXED HEADER
 var header = $('.navigation');
 $(window).scroll( () =>{
	if (header.hasClass('navigation-fixed') && $(window).scrollTop() < 80) {
		header.removeClass('navigation-fixed');
	} else if ($(window).scrollTop() > 80) {
		header.addClass('navigation-fixed');
	}
 });

// OWL
var owl = $('.owl-carousel');
owl.owlCarousel({
	items: 1,
	loop: true,
	autoplay: true,
	autoplayTimeout: 8000,
	autoplaySpeed: 2000,
	autoplayHoverPause: false
});