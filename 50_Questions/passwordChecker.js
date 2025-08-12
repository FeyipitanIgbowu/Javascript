 const prompt = require('prompt-sync')();
 
function passwordChecker(input) {
	const password = "secret123"
	let passcode = prompt("Type a password: ")
		if( password == passcode) {
			return "Access Granted, welcome."
		} else {
			return "Access denied!"
			}
return passcode
}

	