$(document).ready(function(){
	$('div').draggable();

	$('#green').click(function(){
        	$(this).effect('explode');    
    	});

	$('#green').keydown(function(){
		$(this).effect('bounce', {times:3}, 500);
	})

	$('#red').keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('#red').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('#red').animate({top: "-=10px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
				$('#red').animate({left: "+=10px"}, 'fast');
				break;
			// Down Arrow Pressed
			case 40:
				$('#red').animate({top: "+=10px"}, 'fast');
				break;
		}
	});
	
});
