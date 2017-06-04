var maleNames = ['Tomek', 'Jarek', 'Stasiu', 'Marek', 'Arek'];
var femaleNames = ['Agnieszka', 'Asia', 'Kasia', 'Ewa', 'Ula'];
var allNames = maleNames.concat(femaleNames);

console.log(allNames);
var newName = 'Krzysiu';
if(allNames.indexOf(newName) === -1) {
	var x = allNames.push('Krzysiu');
}
console.log(allNames);