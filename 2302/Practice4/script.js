/* For and While Loops */

fruit = ["apple", "banana", "orange", "grape", "watermelon", "kiwi", "mango", "strawberry", "blueberry", "raspberry"];

for (let i = 0; i<fruit.length; i++){
	console.log(fruit[i]);
}

let x;
for(x of fruit) {
	console.log(x.toUpperCase());
}

let i = 0;
while (i < fruit.length){
	console.log(fruit[i]);
	i++;
}

let counter = 10;
do {
	console.log(counter);
	counter--;
} while (counter > 0);

/* If conditions and switch statements */

let legs = 4;
if (legs == 2){
	console.log("This is a human");
} else if (legs == 4){
	console.log("This is a dog");
} else {
	console.log("This is a snake");
}

let order = 2;
switch (order){
	case 1: 
		order = "burger";
		break;
	case 2:
		order = "pizza";
		break;
	case 3:
		order = "pasta";
		break;
	default:
		order = "salad";
		break;
}


