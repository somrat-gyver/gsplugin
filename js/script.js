(function ($) {
	'use strict';

	//  sidebar toggler
	$('.navbar-toggler').on('click', function () {
		$('.sidenav').toggleClass('show');
		$('.wrapper').toggleClass('hide');
	});




	// logo slider 1
	$('.logo-slider-1').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		arrows: false,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	
	// logo slider 2
	$('.logo-slider-2').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: true,
    prevArrow: '<button type=\'button\' class=\'arrow-prev\'><i class=\'ti-arrow-left\'></i></button>',
    nextArrow: '<button type=\'button\' class=\'arrow-next\'><i class=\'ti-arrow-right\'></i></button>',
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});


	
	// customPaging: function (slider, i) {
	// 	var icon = $(slider.$slides[i]).data('icon');
	// 	var text = $(slider.$slides[i]).data('text');
	// 	return '<a><i class="' + icon + '"></i><span>' + text + '</span></a>';
	// }


})(jQuery);