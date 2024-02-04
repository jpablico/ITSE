let personName = "josh pablico";
let birthYear = 1998;
let favoriteNumber = 7;
let favoriteColor = "blue";
let currentYear = 2024;

function calculateAge(birthYear, currentYear) {
  return currentYear - birthYear;
}

function upperCaseName(name) {
  return name.toUpperCase();
}

let multipliedBy3 = favoriteNumber * 3;

function outputToHTML() {
	let outputLineOne = personName + " is " + calculateAge(birthYear, currentYear) + " years old.";
	let outputLineTwo = personName + "'s favorite color is " + favoriteColor + " and favorite number is " + favoriteNumber + ".";
	let outputLineThree = "His favorite number multiplied by 3 is " + multipliedBy3 + ".";

	document.body.innerHTML = outputLineOne + "<br>" + outputLineTwo + "<br>" + outputLineThree;
}

outputToHTML();