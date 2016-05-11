
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
    var value; 

    $("#form").on("submit", function(e){
    	e.preventDefault();
      addCount();
    	game();
      
    });


  function game() {
    var guess = parseInt($('#userGuess').val()); //.val gets value of an input field

/*--add guess to list---*/
      $('#guessList').append('<li>'+guess+'</li>');

/*--- you guessed it---*/
      if (guess === randomnumber) {
          $('#feedback').html('Congrats! You got it!');     
      } 
      if (Math.abs(guess - randomnumber)<5){
        $('#feedback').html('On Fire!');
      }
      if (Math.abs(guess - randomnumber)>=5 && Math.abs(guess - randomnumber)<20){
        $('#feedback').html('Hot!');
      }
      if (Math.abs(guess - randomnumber)>=20 && Math.abs(guess - randomnumber)<30){
        $('#feedback').html('Kinda Hot');
      }
      if (Math.abs(guess - randomnumber)>=30 && Math.abs(guess - randomnumber)<40){
        $('#feedback').html('Warm');
      }
      if (Math.abs(guess - randomnumber)>=40 && Math.abs(guess - randomnumber)<55){
        $('#feedback').html('Cool');
      }
      if (Math.abs(guess - randomnumber)>=55 && Math.abs(guess - randomnumber)<70){
        $('#feedback').html('Chilly');
      }
      if (Math.abs(guess - randomnumber)>=70 && Math.abs(guess - randomnumber)<80){
        $('#feedback').html('Cold');
      }
      if (Math.abs(guess - randomnumber)>=80 && Math.abs(guess - randomnumber)<90){
        $('#feedback').html('Very Cold');
      }
      if (Math.abs(guess - randomnumber)>=90 && Math.abs(guess - randomnumber)<100){
        $('#feedback').html('Freezing');
      }
      if(guess < 0 || guess > 101){
        alert('Please choose a number between zero and 100.');
        return true;
      }
  }


/*Increase guess counter*/
    function addCount(){      
       value =parseInt($('#count').html());
       value++;
       $('#count').html(value);
       console.log(value);
    }   
   // document.getElementById("count").innerHTML=
   //      parseInt(document.getElementById("count").innerHTML)+1;



    /*--- New Game button ---*/

    $(".new").click(function(){
      randomnumber=Math.floor((Math.random() * 100) + 1);;
      console.log("The secret number is: " + randomnumber);
    });



});


