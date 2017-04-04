// JavaScript File

var myButton = document.getElementById("clickButton");
var myText = document.getElementById("helloText");

myButton.addEventListener('click', doSomething, false);

function doSomething() {
	myText.textContent = "This is programmatic text.";
}
