var liw =  parseInt($('.imgG').children('li').css('width'));

						$('.imgG').css('margin-left', -liw + 'px');
						$('.imgG>li:first').appendTo('.imgG');

						$('.btnL').click(function(){
							var marginL = parseInt($('.imgG').css('margin-left'));
							$('.imgG').animate({marginLeft:marginL+liw}, function(){
								$('.imgG').css('margin-left', -liw + 'px');
								$('.imgG>li:last').prependTo('.imgG');
							});
						});
						
						$('.btnR').click(slide);
						function slide(){
							var marginL = parseInt($('.imgG').css('margin-left'));
							$('.imgG').animate({marginLeft:marginL-liw},function(){
								$('.imgG').css('margin-left', -liw + 'px');
								$('.imgG>li:first').appendTo('.imgG');
							});
						}
						
						var auto = setInterval(slide, 2000);

						$('.btn').hover(function(){
							clearInterval(auto);
						}, function(){
							auto = setInterval(slide, 2000);
});

$(".nav").mouseenter(function(){
	$(".subN").stop().slideDown();
});
$(".subN").mouseleave(function(){
	$(this).stop().slideUp();
});