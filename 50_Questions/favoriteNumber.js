 const prompt = require('prompt-sync')();
 function favoriteNumber(number) {
 	const favoritenumber = 7
 	if( number == 7) {
 		return "That's my favorite Number"
 	}
 	else {
 		return "Nice try, guess again!"
 	}
 }
 
let input = prompt("Guess a number: ") 
console.log(favoriteNumber(input))
 	