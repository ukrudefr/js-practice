const myFunction = function (a, b) {
	let c
	a = a + 1
	c = a + b
	return c
}
console.log (myFunction (5, 6));

const weight = prompt('Tragen Sie bitte Ihr Gewicht in kg ein');
const height = prompt('Tragen Sie Ihre Höhe in Meter ein');

const bodyMassIndex = weight / Math.pow(height, 2);
const areYouOverweight = function() {
	if(bodyMassIndex >=25) {
		return alert('Sie haben zu viel Gewicht')
	} else if(bodyMassIndex <=18.5) {
		return alert('Sie haben zu wenig Gewicht')
	} else {
		return alert('Ihr Gewicht ist normal')
	}
}

console.log(bodyMassIndex);
areYouOverweight();

