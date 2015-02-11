var $blogContent = $('.content');
var $header = $('.header');
var $socialIcons = $('.social-icons');
var $contentTransition = $('.content , .header ');
var path = window.location.pathname;

$(document).ready(function() {
	
	if ( path.match('/diary/post') || path.match('/pil/') )
	{
		
		$header.css({
			'padding-top':'80px'
		});
		$socialIcons.css({
			'padding': '0px 30px' ,
			'font-size': '12px'
		});
		$blogContent.addClass('col-md-10');
		$blogContent.removeClass('col-md-8');
		$header.addClass('col-md-2');
		$header.removeClass('col-md-4');
		
	}
});