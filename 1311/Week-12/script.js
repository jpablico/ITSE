console.log("I am learning JS");

let  cityName = prompt("What city are you from?","City name:");
console.log(cityName);

let favFood = "Pizza";
let favColor = "Red";
let favDrink = "Coke";

let favNum = 7;

console.log(favDrink);

favFood = "Burger";
console.log(favFood);

let bday = "September 7th";

function myFavs() {
	console.log(favFood);
	console.log(favColor);
	console.log(favDrink);
	console.log(favNum);
	console.log(bday);
}

myFavs();

let person = {
	name: "Bob",
	age: 30
}

console.log(person);

let colors = function() {
	console.log("Red");
	console.log("Green");
	console.log("Blue");
}

colors();

function logFavFood(food) {
	food = food || "Lasagna";
	console.log("Your favorite food is " + food);
}

logFavFood();

const Greeting = (userName) => {
	console.log("Hello " + userName +"! Welcome to the class.");
}
Greeting("John");


document.writeln("<h1></h1>");