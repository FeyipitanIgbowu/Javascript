const prompt = require('prompt-sync')();

function positiveNegative(number) {
	 if(input > 0) {
	 	return "Positive"
	 } else {
	 	return "Negative or Zero"
}
}

let input = prompt("Enter a number: ")
console.log(positiveNegative(input))