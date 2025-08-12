const prompt = require('prompt-sync')();
function magicNumber(number) { 
	const magicnumber = 42
	if (number== magicnumber) { 
		return "You found the magic number"
	} else { 
		return "Keep looking!"
	}
}
let input = prompt("Enter a number: ")
console.log(magicNumber(input))

