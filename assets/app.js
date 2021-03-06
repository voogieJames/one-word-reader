var text;
var words;

var wordCount = 0;
var currentWordText = '';
var currentWordNumber = 0;

var isWorking = false;
var speed = 300;

var refreshIntervalId;

// on click button ready
$('.button-ready').click(function(){
	text = $('#text').val();
	words = text.split(" ");
	
	$('#text').hide(true);
	$('#gui-preload').hide(true);
	$('#gui-onload').css("visibility", "initial");
	
	wordCount = words.length;
	currentWordNumber = 0;

});

// update settings
setInterval(function() {
	if ( wordCount > 0){
		$('#word-inner').html(words[currentWordNumber]);
		$('#wordCount').html(currentWordNumber + "/" + wordCount + "<br>" + 60 * (1000 / speed) + "WPM");
	}
}, 10);


// play button
$('.button-play').click(function(){
	if ( isWorking ){
		isWorking = false;
		$('.button-play').html('Play');
		 clearInterval(refreshIntervalId);

	} else {
		isWorking = true;
		$('.button-play').html('Stop');
		refreshIntervalId = setInterval(function(){
			if ( isWorking ){
				currentWordNumber++;
			}
		}, speed);
	}
});


// set previous word
$('.button-previous').click(function(){
	if ( currentWordNumber > 0){
		isWorking = false;
		$('.button-play').html('Play');
		currentWordNumber--;
	}
});


// set next word
$('.button-next').click(function(){
	if ( currentWordNumber < wordCount){
		isWorking = false;
		$('.button-play').html('Play');
		currentWordNumber++;
	}
});


// speed up
$('.button-speed-up').click(function(){
	$('.button-play').html('Play');
	clearInterval(refreshIntervalId);

	if ( speed > 100 ){
		speed -= 50;
	}
});


// speed down
$('.button-speed-down').click(function(){
	$('.button-play').html('Play');
	clearInterval(refreshIntervalId);

	if ( speed < 10000 ){
		speed += 50;
	}
});
