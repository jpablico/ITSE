var btn = document.getElementById("btn");
var div = document.getElementById("div");
var header = document.querySelectorAll("header")[0];
var feature = document.getElementsByClassName("feature")[0];
var feature1 = document.getElementsByClassName("feature")[1];
var main = document.getElementsByTagName("main")[0];
function btnToggle() {
	if (header.style.flexDirection === "column") {
		header.style.flexDirection = "row";
		header.style.justifyContent = "space-between";
		feature.style.width = "50%";
		feature.style.margin = "auto";
		feature1.style.width = "50%";
		feature1.style.margin = "auto";

		main.style.gap = "1rem";
		main.style.display = "flex";
		main.style.flexDirection = "column";
		main.style.margin = "auto";
		main.style.alignContent = "center";	

	} else {
		main.style.gap = "";
		header.style.flexDirection = "column";
		header.style.justifyContent = "center";
		feature.style.width = "100%";
		feature.style.margin = "";
		feature.style.paddingbottom = "";
		feature1.style.margin = "";
		feature1.style.width = "100%";
		main.style.display = "";
		main.style.flexDirection = "";
		main.style.margin = "";
		main.style.alignContent = "";

	}
  console.log("Button was clicked");
}

let greekLink = document.getElementById("second-restaurant-link");
greekLink.href = "https://www.greekrestaurant.com";
greekLink.style = "color:blue";

