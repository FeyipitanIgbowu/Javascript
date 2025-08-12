const prompt = require('prompt-sync')();
function trafficLight(color) {
	if (color == "Green") {
		return "Go"
	} else if (color == "Red") {
		return "Stop"
	} else if (color == "Yellow") {
		return "Wait"
	}
}

let input = prompt("Enter a color: ")
console.log(trafficLight(input))