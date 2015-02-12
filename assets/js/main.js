(function($){})(window.jQuery);


$(document).ready(function() {
	var winH = $(window).height();
		
	$('#header').css({
		height: winH
	});
	
	$('.content').css({
		minHeight: winH
	});
});