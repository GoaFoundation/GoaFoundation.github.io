(function($){})(window.jQuery);

var winH = $(window).height();
var winW = $(window).width();

$(document).ready(function() {
	$('.cover').width(winW);
	
	$('.cover').css({
		left: (winW - $('.cover').width()) / 2
	});
	
	$(window).scroll(function() {
		var st = $(window).scrollTop();
		
		$('.cover').css({
			top: 420 - (st / 3),
			opacity: 1 - (st / 600)
		});
	});
	
	
	
});