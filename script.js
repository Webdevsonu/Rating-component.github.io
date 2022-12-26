// this hides the first box and shows other box with rating selected
document.getElementById("submit-btn").onclick = function() {
	document.getElementById("front").style.display = "none"
	document.getElementById("back").style.display = "block"
}

//this function makes numbers to be selected and add rating of 1

document.getElementById("rate1").onclick = function() {
	document.getElementById("rate1").style.color = "red"
	document.getElementById("rating").innerHTML = 1;

}

document.getElementById("rate2").onclick = function() {
	document.getElementById("rate2").style.color = "orange"
	document.getElementById("rating").innerHTML = 2;
}

document.getElementById("rate3").onclick = function() {
	document.getElementById("rate3").style.color = "yellow"
	document.getElementById("rating").innerHTML = 3;
}

document.getElementById("rate4").onclick = function() {
	document.getElementById("rate4").style.color = "lightgreen"
	document.getElementById("rating").innerHTML = 4;
}

document.getElementById("rate5").onclick = function() {
	document.getElementById("rate5").style.color = "green"
	document.getElementById("rating").innerHTML = 5;
}