// New scripts file
$('.quarter').hover(
		function() {
			$(this).css('z-index', '0').delay(1000).queue(function() {
				$(this).css('z-index', '2');
			});
			
			$(this).siblings().css('z-index','1');
		}
);