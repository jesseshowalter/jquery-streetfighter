$(document).ready(function(){
	var ryuReady = $($('.ryu-ready'));
	var ryuStill = $($('.ryu-still'));
	var ryuThrow = $($('.ryu-throwing'));
	var ryuCool = $($('.ryu-cool'));
	var hadouken = $($('.hadouken'));

	$('.legend').delay(1000).fadeIn(4000);

	$('.ryu').mouseenter(function(){
		ryuStill.hide();
		ryuReady.show();
	})
	.mouseleave(function(){
		ryuReady.hide();
		ryuStill.show();
	})
	.mousedown(function(){
		playHadouken(); 
		ryuReady.hide();
		ryuThrow.show();
		hadouken.finish().show()
		  .animate(
		    {'left': '300px'},
		    500,
		    function() {
		      $(this).hide();
		      $(this).css('left', '-212px');
		    }
		);
	})
	.mouseup(function(){
		ryuThrow.hide();
  		ryuReady.show();
	});

	$(document).keydown(function( event ) {
	  if ( event.which == 88 ) {
	   event.preventDefault();
	   ryuStill.hide();
	   ryuCool.show();
	  }
	})
	.keyup(function(){
		ryuCool.hide();
  		ryuStill.show();
	});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}