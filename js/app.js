
$(document).ready(function(){

	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Pick Random Number ---*/

	var randomnumber =  Math.floor((Math.random() * 100) + 1);
    console.log("The secret number is: " + randomnumber);


	/*--- Get Guess---*/


    $("#form").on("submit", function(e){
    	e.preventDefault();
    	game();
    });
    	

 

  function game() {
    var guess = parseInt($('#userGuess').val()); //.val gets value of an input field
/*--add guess to list---*/
    $('#guessList').append('<li>'+guess+'</li>');

// /*Increase guess counter*/
//     function addCount(){            
//    document.getElementById("count").innerHTML=
//         parseInt(document.getElementById("score").innerHTML,10)+1;
// }


/*--- you guessed it---*/
    if (guess === randomnumber) {
        $('#feedback').html('Congrats! You got it!');     
      } 
  }



    /*--- New Game button ---*/

    $(".new").click(function(){
      randomnumber=Math.floor((Math.random() * 100) + 1);;
      console.log("The secret number is: " + randomnumber);
    });



});


