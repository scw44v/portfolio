$(document).ready(function(){
	var web = $('.web')
	var pro = $('.profile')
	var ui = $('.ui')

	$(web).mouseenter(function(){
		$('.webp').stop().animate({
			fontSize:'130px'
		}, 300);
	});
	$(web).mouseleave(function(){
		$('.webp').stop().animate({
			fontSize:'120px'
		}, 300);
	});
		$(pro).mouseenter(function(){
		$('.hi').stop().animate({
			fontSize:'88px'
		}, 300);
	});
	$(pro).mouseleave(function(){
		$('.hi').stop().animate({
			fontSize:'78px'
		}, 300);
	});
		$(ui).mouseenter(function(){
		$('.up').stop().animate({
			fontSize:'82px'
		}, 300);
	});
	$(ui).mouseleave(function(){
		$('.up').stop().animate({
			fontSize:'72px'
		}, 300);
	});
});
