const prompt = require('prompt-sync')();
function guessTheAnimal(animal) {
	const myAnimal = "Dog"
	if( animal == myAnimal) {
		return "Correct! it's a dog"
	} else {
		return "Nope! it's a dog"
	}
}
let input = prompt("Enter an animal: ")
console.log(guessTheAnimal(input))