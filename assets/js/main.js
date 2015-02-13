(function($){})(window.jQuery);


$(document).ready(function() {
	var winH = $(window).height();
	var winW = $(window).width();
		
	if (winW > 768) {
		$('#header').css({
			height: winH
		});
	
		$('.content').css({
			minHeight: winH
		});
	}
});