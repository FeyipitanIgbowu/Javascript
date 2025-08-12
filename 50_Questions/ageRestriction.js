const prompt = require('prompt-sync')();

function ageRestriction(age) {
	const minimumAge = 10
	
	if (age >= 10 ) {
		return "Welcome to the show"
	} else {
		return "Sorry, you're too young"
}
}
let input = prompt("Enter your age: ")
console.log(ageRestriction(input))