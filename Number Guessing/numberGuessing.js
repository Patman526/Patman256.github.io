// List of Enhancements:
// (Note: These are not in order. I forgot the order I added them.)
// 1. Made it look a little prettier, but I like to focus on functionality
// 2. Stops you from guessing the same number twice
// 3. Makes sure the number you enter is valid, meaning it's a number below 51 and above 0.
// 4. Calculates average number of guesses.
// 5. Calculates percentage of wins to losses.
// 6. After you win or lose 10 times, the game ends.
// 7. The restart button restarts the game.
// 8. Clears the guess box after you guess.
// 9. Rounds the average number of guesses to the 100ths place
// 10. Added a new game mode, Endless. If this is selected, enhancement #6 is disabled.
// 11. Clears the text box after the number goes through
// 12. Tells you if you're within 5 numbers of the number

var num;
var guess;
var wins = 0;
var losses = 0;
var tries = 6;
var rounds = 0;
var comment = "";
var comment2 = "";
var guess1;
var guess2;
var guess3;
var guess4;
var guess5;
var totalGuesses = 0;
var avrgGuesses = "NA";
var percentWinLoss = "NA";
var dataCollection = "";

// Sets the game up when the page first loads.
function startGame(){
	alert("Instructions: Guess a number between 1 and 100, and enter it in the text box. " + 
	"The computer will then tell you if your answer is too high, too low, or if it is right. " +
	"You have 6 guesses for each round. If you guess it right, you get a point. " +
	"If you run out of guesses, the computer gets a point." + 
	"First to 10 points wins!!");
	setupGame();
	displayInfo();
}
// displays the game info.
function displayInfo(){
	document.getElementById("idDivInfo").innerHTML = (comment +
	"<br>" + comment2 +
	"<br><br>Guesses left:<br>" + tries + 
	"<br><br><br>Your points:<br>" + wins +
	"<br><br><br>Computer's points:<br>" + losses +
	"<br><br><br>Total rounds:<br>" + rounds +
	"<br><br><br>Average # of guesses:<br>" + avrgGuesses +
	"<br><br><br>% of wins to losses:<br>" + percentWinLoss +
	"<br><br>");
}
// Sets up a new game.
function setupGame(){
	tries = 6;
	guess1 = "";
	guess2 = "";
	guess3 = "";
	guess4 = "";
	guess5 = "";
	num = Math.floor(Math.random() * 100) + 1;
	// Calculates the average number of guesses and percentage of wins to losses
	if (rounds > 0){
		avrgGuesses = Math.floor((totalGuesses / rounds) * 100) / 100;
		percentWinLoss = Math.floor((wins / rounds) * 100) + "%";
	}
}
function checkAnswer(){
	guess = Number(document.getElementById("idGuess").value);
	// Checks to see if the number is valid, or they used it twice.
	// If it is valid, it compares it to the random number and tells them if it's too high, too low, or they won.
	if (guess < 1 || guess > 100 || isNaN(guess) == true){
		comment = "That's not a valid guess!";
	} else if (guess == guess1 || guess == guess2 || guess == guess3 || guess == guess4 || guess == guess5){
		comment = "You already guessed that number!";
	} else if (guess > num){
		comment = "Too High!";
		tries = tries - 1;
		storeGuess();
	} else if (guess < num){
		comment = "Too Low!";
		tries = tries - 1;
		storeGuess();
	} else {
		comment = "You Won!!";
		wins += 1;
		rounds += 1;
		dataCollection += "Round: " + rounds + "<br>Answer: " + num + "<br>Tries: " + (7 - tries) + "<br><br>";
		alert("You won! Now starting the next round!");
		storeGuess();
		setupGame();
	}
	if (guess == num - 1 || guess == num - 2 || guess == num - 3 || guess == num - 4 || guess == num - 5
	|| guess == num + 1 || guess == num + 2 || guess == num + 3 || guess == num + 4 || guess == num + 5){
		comment2 = "You're so close!!";
	} else {
		comment2 = "";
	}
	// Checks to see if they are out of tries. If so, they lose.
	if (tries == 0){
		comment = "You Lost!!";
		losses += 1;
		rounds += 1;
		dataCollection += "Round: " + rounds + "<br>Answer: " + num + "<br>Tries: LOSS" + "<br><br>";
		alert("You lost! The number was " + num + ". Now starting the next round!");
		setupGame();
	}
	// Checks if Normal mode is selected. if so, enhancement #6 runs.
	if (document.getElementById("idModeNormal").checked){
		// Checks if anyone has won 10 times.
		// If so, the game ends.
		if (wins == 10){
			alert("You have won the game! Congrats!");
			comment = "You won the game!!";
			dataCollection = "";
			displayInfo();
		} else if (losses == 10){
			alert("You have lost the game! Better luck next time!");
			comment = "You lost the game!";
			dataCollection = "";
			displayInfo();
		}
	}
	totalGuesses += 1;
	// Clears the text box after guess is made
	document.getElementById("idGuess").value = "";
	displayInfo();
}
// Restarts the game when the restart button is clicked.
function restartGame(){
	wins = 0;
	losses = 0;
	rounds = 0;
	avrgGuesses = 0;
	totalGuesses = 0;
	percentWinLoss = "NA";
	avrgGuesses = "NA";
	comment = "";
	startGame();
}

function storeGuess(){
	// Puts the guesses in the system to compare, 
	// so the player doesn't enter the same number twice.
	if (tries == 5){
		guess1 = guess;
	} else if (tries == 4){
		guess2 = guess;
	} else if (tries == 3){
		guess3 = guess;
	} else if (tries == 2){
		guess4 = guess;
	} else {
		guess5 = guess;
	}
}

function showData(){
	document.getElementById("idDivData").innerHTML = dataCollection;
}