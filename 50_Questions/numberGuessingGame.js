const prompt = require('prompt-sync')();

let number = prompt("Enter a number: ")
	const secret = 8
	
if ( number == secret) {
		console.log("Correct")
}
else if( number != secret) {
		console.log("Try again")
		let number = prompt("Enter a number: ")
		if ( number == secret) {
		console.log("Correct")
}
		} 
	