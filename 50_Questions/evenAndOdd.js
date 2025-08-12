 const prompt = require('prompt-sync')();
function evenAndOdd(number) {
	if( number % 2 == 0) {
		return "Even"
	}
	else {
		return "Odd"
	}
}
let input = prompt("Enter a number: ")
console.log(evenAndOdd(input)) 