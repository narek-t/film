$(document).ready(function() {
	$('.header-slider').slick({
		arrows: false,
		dots: true,
	});
	$('.home-slider__trailer').slick();

	$('.makers__list').magnificPopup({
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		mainClass: 'act-popup',
		delegate: 'a',
		gallery: {
			enabled: true
		},
	});


	$('.single-slider__thumbs').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1
	});
	$('.single-slider__thumbs .img-wrap').click(function(event) {
		var src = $(this).data('src');
		var videoUrl = $(this).data('url');
		if(src) {
			$(this).parents('.act-slider').find('.single-slider__view').css('background-image', 'url('+src+')');
			$(this).parents('.act-slider').find('.single-video').attr('src', '');
		} else {
			$(this).parents('.act-slider').find('.single-video').attr('src', videoUrl);
		}
	});

	$('.book-slider__inner').slick({
		asNavFor: '.book-slider__thumbs',

	});
	$('.book-slider__thumbs').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.book-slider__inner',
		focusOnSelect: true,
		arrows: false,
	});

	$('.book-slider__data').slick();

	$('.questions__list .heading').click(function(event) {
		event.preventDefault();
		$('.questions__list').find('.active').removeClass('active');
		$(this).parents('li').addClass('active');
	});

	$('.about__links--item').click(function(event) {
		event.preventDefault();
		$('.about__links--item').removeClass('active');
		$(this).addClass('active');
		var index = $(this).index();
		$('.gallery__page--tab').removeClass('active');
		$('.gallery__page-tabs .gallery__page--tab').eq(index).addClass('active');
	});


	$('.gallery__page__list').magnificPopup({
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		mainClass: 'act-popup',
		delegate: 'a',
		closeBtnInside: true,
		gallery: {
			enabled: true
		},
	});

	$('.calendar__item-top').click(function(event) {
		$(this).parents('.calendar__list-item').toggleClass('active');
		google.maps.event.trigger(map2, 'resize');
		google.maps.event.trigger(map3, 'resize');
		google.maps.event.trigger(map4, 'resize');
		google.maps.event.trigger(map5, 'resize');
	});


});