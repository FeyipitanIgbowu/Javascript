const prompt = require('prompt-sync')();
function greetingChooser(name) { 
	if(name == "Alex") {
		return "Hello, friend!"
	} else  {
		return "Hi, stranger!"
		
	}
}

const userName = prompt('Enter your name: ');
console.log(greetingChooser(userName));