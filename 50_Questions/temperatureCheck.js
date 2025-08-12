const prompt = require('prompt-sync')();

function temperatureCheck(temp) {
	if( temp > 30) {
		return "Hot!"
	} else if (temp == 15 && temp <= 30) {
		return "Nice!"
	} else if (temp < 15) {
		return "Cold!"
		}
	}
let input = prompt("Enter a temp: ")
console.log(temperatureCheck(input))

