$(document).ready(function () {
	$('.header__burger').on('click', function () {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.header__link').on('click', function () {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock')
	});
});

let isMobile = {
	Android: function () { return navigator.userAgent.match(/Android/i); },
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
	Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
	any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

let body = $('body');
if (isMobile.any()) {
	$(body).addClass('touch');
	let arrow = $('.arrow');
	for (i = 0; i < arrow.length; i++) {
		let thisLink = arrow[i].previousElementSibling;
		let subMenu = arrow[i].nextElementSibling;
		let thisArrow = arrow[i];

		$(thisLink).addClass('parent');
		arrow[i].addEventListener('click', function () {
			$(subMenu).toggleClass('open');
			$(thisArrow).toggleClass('active');
		});
	}
} else {
	$(body).addClass('mouse');
}



$('.header__link').on('click', function () {
	let href = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 370,
		easing: 'swing',
	});

	return false;
});