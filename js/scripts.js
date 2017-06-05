var maleNames = ['Tomek', 'Jarek', 'Stasiu', 'Marek', 'Arek'];
var femaleNames = ['Agnieszka', 'Asia', 'Kasia', 'Ewa', 'Ula'];
var allNames = maleNames.concat(femaleNames);

console.log(allNames);

var newName = 'Krzysiu';
if(allNames.indexOf(newName) === -1) {
	console.log(allNames.push(newName)); 
}
console.log(allNames);