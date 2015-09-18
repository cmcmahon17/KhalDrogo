$(document).ready(function(){
	$('div').draggable();

	$('#red').dblclick(function(){
		$(this).animate({ top: '+=100px'}, 1000 );
	});

	$('#green').click(function(){
        	$(this).effect('explode');    
    	});

	$(document).keydown(function(){
		$('#red').effect('bounce', {times:3}, 500);
	});

	$(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('#green').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('#green').animate({top: "-=10px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
				$('#green').animate({left: "+=10px"}, 'fast');
				break;
			// Down Arrow Pressed
			case 40:
				$('#green').animate({top: "+=10px"}, 'fast');
				break;
		}
	});
	
});
