document.addEventListener("DOMContentLoaded", function() {
	let passPhrase = prompt("Enter your 4-word pass Phrase:");
	document.getElementById("showInfo").addEventListener("click", function() {
	  let lowerCase = passPhrase.toLowerCase();
	  let upperCase = passPhrase.toUpperCase();
	  let length = passPhrase.length;
	  document.getElementById("output").innerHTML = `Original: ${passPhrase}<br>Lowercase: ${lowerCase}<br>Uppercase: ${upperCase}<br>Length: ${length}`;
	});
  
	document.getElementById("manipulateArray").addEventListener("click", function() {
	  let wordsArray = passPhrase.split(" ");
	  let shiftedArray = [...wordsArray].concat(wordsArray.shift());
	  shiftedArray.splice(2, 0, "secret");
	  document.getElementById("output").innerHTML = `Array: ${wordsArray}<br>Shifted: ${shiftedArray.join(" ")}`;
	});
  

	let bonusButton = document.getElementById("bonusManipulation");
	bonusButton.style.display = "block"; 
	bonusButton.addEventListener("click", function() {
	  let lettersArray = passPhrase.split("");
	  let reversedArray = [...lettersArray].reverse();
	  let sortedArray = [...lettersArray].sort();
	  document.getElementById("output").innerHTML = `Letters: ${lettersArray.join("")}<br>Reversed: ${reversedArray.join("")}<br>Sorted: ${sortedArray.join("")}`;
	});
  });
  