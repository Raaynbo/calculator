let firstNumber, secondNumber = undefined;

const display = document.querySelector(".output");
const numpad = document.querySelectorAll(".digit");

numpad.forEach(numkey => {
	numkey.addEventListener("click",(e) => {
		if (firstNumber === undefined) {
		firstNumber = "" 
		} 
		firstNumber += e.target.id;
		updateDisplay(firstNumber);	
	});
});



function add(a, b){
	return a+b;
}

function substract(a, b){
	return a-b;
}

function divide(a, b){
	return a/b;
}

function multiply(a, b){
	return a*b;
}

function updateDisplay(data){
	if (display.textContent == "0000000000"){
		console.log("removing empty class");
	}
	display.classList.remove("empty");
	display.textContent = data;
}
