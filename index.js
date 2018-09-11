var x = 0;
var _high = "Guess is too high";
var _low = "Guess is too low";
var final_number = Math.floor((Math.random() * 10) + 1);

//Don't Cheat
console.log(final_number);


$(document).ready(function() {
	$("#true, #false, #wrong_guess_1, #wrong_guess_2").hide();

	$(".check_button").click( () => {
		checkGuess();
		if($("input").val() == final_number) {
			$("#true").show()
			$("#false").hide()
			alert("You win! Great guessing skills :)")
		} else {
			$("#true").hide(), $("#false").show()
		}
		x++;
		$(".number_of_tries").text(x);
		console.log("Running Script");
	})
	
	$(".clear_button").click( () => {
		x = 0;
		$("input").val('');
		$("#true, #false").hide();
		$(".number_of_tries").text(0);
	  })
})

function checkGuess() {
	if($("input").val() > final_number) {
		$("#wrong_guess_1").show();
		$("#wrong_guess_2").hide();
	} else if($("input").val() < final_number) {
		$("#wrong_guess_2").show();
		$("#wrong_guess_1").hide();
	} else if($("input").val() == final_number) {
		$("#wrong_guess_2").hide();
		$("#wrong_guess_1").hide();
		console.log("Winning!");
	}
}
