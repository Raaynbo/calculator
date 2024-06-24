let firstNumber, secondNumber = undefined;
const numbers = [undefined, undefined];
let position = 0;
let operation = undefined;

const display = document.querySelector(".output");
const numpad = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");

const egal = document.querySelector("#equals");

numpad.forEach(numkey => {
	numkey.addEventListener("click", getInput);
});

operators.forEach(op => {
	op.addEventListener("click", (e)=> {
		if (position === 1){
			makeCalc(numbers, operation, true);
		}else {
			position = 1;
		}
		operation = e.target.id;

	})
});

egal.addEventListener("click", () => {
	makeCalc(numbers, operation, false);
});

function add(a, b){
	console.log("add : ", a+b)
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

function getInput(input){
	if (numbers[position] === undefined){
		numbers[position] = "";
	}
	numbers[position] += input.target.id;
	console.log(numbers[position]);
}

function updateDisplay(data){
	//this if statement doesnt work at this time
	if (display.textContent == "0000000000"){
		console.log("removing empty class");
	}
	display.classList.remove("empty");
	display.textContent = data;
}

function makeCalc(numbers, operation, storeResult){
	let result = 0;
	const intArray = numbers.map(value => {return parseInt(value)});
	switch (operation){
		case "addition":
			result = add(intArray[0], intArray[1]);
			updateDisplay(result);
			break;
		case "multiply":
			result = multiply(intArray[0], intArray[1]);
			updateDisplay(result);
			break;
		case "substract":
			result = substract(intArray[0], intArray[1]);
			updateDisplay(result);
			break;
		case "divide":
			result = divide(intArray[0], intArray[1]);
			updateDisplay(result);
			break;
	}
	if (storeResult){
		numbers[0] = result;
	}
	else{
		numbers[0] = 0;
		position = 0;
	}
	numbers[1] = 0;
}
