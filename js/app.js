$(document).ready(function(){
	var ready = $($('.ryu-ready'));
	var still = $($('.ryu-still'));

	$('.ryu').mouseenter(function(){
		still.hide();
		ready.show();
	})
	.mouseleave(function(){
		ready.hide();
		still.show();
	});
});