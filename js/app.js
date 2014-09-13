$(document).ready(function(){
	var ryuReady = $($('.ryu-ready'));
	var ryuStill = $($('.ryu-still'));
	var ryuThrow = $($('.ryu-throwing'));
	var hadouken = $($('.hadouken'));

	$('.ryu').mouseenter(function(){
		ryuStill.hide();
		ryuReady.show();
	})
	.mouseleave(function(){
		ryuReady.hide();
		ryuStill.show();
	})
	.mousedown(function(){
		// play hadouken sound
		ryuReady.hide();
		ryuThrow.show();
		hadouken.show();
    	// show hadouken and animate it to the right of the screen
	})
	.mouseup(function(){
		ryuThrow.hide();
  		ryuReady.show();
	});
});