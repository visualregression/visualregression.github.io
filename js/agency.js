/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    if (window.location.href.indexOf('notify-free=ok') !== -1) {
      $('body').addClass('notify-free-ok');
    }

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500, 'easeOutQuad');
        event.preventDefault();
    });

    $('.do-signup').click(function(event) {
      $('body').addClass('show-signup');
    });

    $('#intro-signup').click(function() {
      ga('send', 'event', 'Signup', 'header-goto', 'test1', 10);
    });

    $('#pricing-signup').click(function() {
      ga('send', 'event', 'Signup', 'pricing-goto', 'test1', 10);
    });

    $('#actual-signup').click(function() {
      ga('send', 'event', 'Signup', 'signup', 'test1', 100);
    });

    $('#goto-percy').click(function() {
      ga('send', 'event', 'Signup', 'exit-percy', 'test1', -50);
    });

    $('#goto-api-docs').click(function() {
      ga('send', 'event', 'Exit', 'exit-api-docs', 'test1', 5);
    });

    $('#goto-nodejs').click(function() {
      ga('send', 'event', 'Exit', 'exit-nodejs', 'test1', -10);
    });

    $('#contact-sponsor').click(function() {
      ga('send', 'event', 'Contact', 'sponsor-goto', 'test1', 20);
    });

    $('#contact-business').click(function() {
      ga('send', 'event', 'Contact', 'business-goto', 'test1', 20);
    });

    $('#contact-email').click(function() {
      ga('send', 'event', 'Contact', 'email', 'test1', 1);
    });

    $('#contact-twitter').click(function() {
      ga('send', 'event', 'Contact', 'twitter', 'test1', 1);
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});
