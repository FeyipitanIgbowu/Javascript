const prompt = require('prompt-sync')();
function yourName(name) {
	let nameInput = " "
	for(let count = 1; count <=3; count++) {	
		nameInput += name
}
return nameInput
}
let input = prompt("Enter your name: ")
console.log(yourName(input))

