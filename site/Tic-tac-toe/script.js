$(document).ready(function(){

var player = 1;
var winner;

$('.fieldCells').click(function(){
	if ($('.fieldCells').hasClass('empty')) {

		var p_0 = $('.posType_0'),
			p_1 = $('.posType_1'),
			p_2 = $('.posType_2'),
			p_3 = $('.posType_3'),
			p_4 = $('.posType_4'),
			p_5 = $('.posType_5'),
			p_6 = $('.posType_6'),
			p_7 = $('.posType_7'),
			p_8 = $('.posType_8');

		if ( $(this).hasClass('empty') ) {

			$(this).removeClass('empty');

			if (player == 1) {
				$(this).addClass('cross');
				player = 2;
			} else {
				$(this).addClass('null');
				player = 1;
			} 
		}

		if ( 
			($(p_0).hasClass('cross') && $(p_1).hasClass('cross') && $(p_2).hasClass('cross')) 	||
			($(p_3).hasClass('cross') && $(p_4).hasClass('cross') && $(p_5).hasClass('cross'))	||
			($(p_6).hasClass('cross') && $(p_7).hasClass('cross') && $(p_8).hasClass('cross')) 	||
			($(p_0).hasClass('cross') && $(p_3).hasClass('cross') && $(p_6).hasClass('cross'))	||
			($(p_1).hasClass('cross') && $(p_4).hasClass('cross') && $(p_7).hasClass('cross'))	||
			($(p_2).hasClass('cross') && $(p_5).hasClass('cross') && $(p_8).hasClass('cross'))	||
			($(p_0).hasClass('cross') && $(p_4).hasClass('cross') && $(p_8).hasClass('cross'))	||
			($(p_6).hasClass('cross') && $(p_4).hasClass('cross') && $(p_2).hasClass('cross')) )
		{
			
			winner = $('.playerOne').val();
			winner += ' победил.';
			alert(winner);
			$('.fieldCells').removeClass('cross').removeClass('null').addClass('empty');
			player = 1;

		} else if ( 
			($(p_0).hasClass('null') && $(p_1).hasClass('null') && $(p_2).hasClass('null'))	|| 
			($(p_3).hasClass('null') && $(p_4).hasClass('null') && $(p_5).hasClass('null'))	||
			($(p_6).hasClass('null') && $(p_7).hasClass('null') && $(p_8).hasClass('null'))	||
			($(p_0).hasClass('null') && $(p_3).hasClass('null') && $(p_6).hasClass('null'))	||
			($(p_1).hasClass('null') && $(p_4).hasClass('null') && $(p_7).hasClass('null'))	||
			($(p_2).hasClass('null') && $(p_5).hasClass('null') && $(p_8).hasClass('null'))	||
			($(p_0).hasClass('null') && $(p_4).hasClass('null') && $(p_8).hasClass('null'))	||
			($(p_6).hasClass('null') && $(p_4).hasClass('null') && $(p_2).hasClass('null')) ) 
		{

			winner = $('.playerTwo').val();
			winner += ' победил.';
			alert(winner);
			$('.fieldCells').removeClass('cross').removeClass('null').addClass('empty');
			player = 1;
		}
	} else {
		$('.fieldCells').removeClass('cross').removeClass('null').addClass('empty');
		player = 1;
	}
});
});