
$(document).ready(function(){

	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- New Game button ---*/

// function newgame() {
//     return Math.floor((Math.random() * 100) + 1);
/*onclick run random number again


  	/*--- Pick Random Number ---*/

	var randomnumber =  Math.floor((Math.random() * 100) + 1);
    console.log("The secret number is: " + randomnumber);


	/*--- Get Guess---*/


    $("#form").on("submit", function(e){
    	e.preventDefault();
    	game();
    });
    	


	/*--- you guessed it---*/

	function game() {
		var guess = parseInt($('#userGuess').val()); //.val gets value of an input field
		console.log("Yay");
		if (guess === randomnumber) {
	    	$('#feedback').html('Congrats! You got it!');	    
	    }	
	}


});


