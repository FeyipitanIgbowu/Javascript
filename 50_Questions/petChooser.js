const prompt = require('prompt-sync')();
function petChooser(pet) {
	if ( pet == "Dog") {
		return "Woof! Dogs are awesome!"
	}
	else {
		return "Cool choice, but i love dogs!"
	}
}

let animal = prompt("Choose a pet : ")
console.log(petChooser(animal))