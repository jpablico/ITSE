function greeting() {
	console.log("Hello World");
}
console.log(greeting());

function personalGreeting(first, last) {
	console.log("Hello " + first + " " + last);
}
console.log(personalGreeting("Josh", "Pablico"));

function personalGreetingReturn(first, last) {
	return console.log(personalGreetingReturn("Josh", "Pablico"));
}
let message = personalGreetingReturn("Josh", "Pablico");

function personalGreetingDefault(first = "Josh", last = "Pablico") {
	return console.log("Hello " + first + " " + last);
}
console.log(personalGreetingDefault);
console.log(personalGreetingDefault("Bob"));

(function(name) {
	console.log("Hello " + name);
})("Josh");

greetingInline = function() {
	return "Hello"
}

greetingArrow = () => {
	return "Hello World";
}