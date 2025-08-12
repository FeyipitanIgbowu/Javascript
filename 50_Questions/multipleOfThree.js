function multipleOfThree(number) {
	let three = 0
	for(let count = 1; count <= 15; count++) {
	if(number % 3 == 0) {
		three += number
	}
return three
}
}
console.log(multipleOfThree(15)) 
