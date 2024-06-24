// I choosed to use an array to store the numbers
// let firstNumber, secondNumber = undefined;
const numbers = [undefined, undefined];
// position is an integer used to define if the user is selecting the first or the second number 
let position = 0;
let operation = undefined;

const display = document.querySelector(".display");
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
	return a+b.toFixed(2);
}

function substract(a, b){
	return a-b.toFixed(2);
}

function divide(a, b){
	return a/b.toFixed(2);
}

function multiply(a, b){
	return a*b.toFixed(2);
}

function getInput(input){
	if (numbers[position] === undefined){
		numbers[position] = "";
	}
	numbers[position] += input.target.id;
	updateDisplay(numbers[position]);
}

function updateDisplay(data){
	display.textContent = data;
}

function makeCalc(numbers, operation, storeResult){
	let result = 0;
	const intArray = numbers.map(value => {return parseFloat(value)});
	switch (operation){
		case "addition":
			result = add(intArray[0], intArray[1]);
			break;
		case "multiply":
			result = multiply(intArray[0], intArray[1]);
			break;
		case "substract":
			result = substract(intArray[0], intArray[1]);
			break;
		case "divide":
			if (intArray[1]=== 0){
				result = "ERROR DIVIDE BY 0";
				break;
			}
			result = divide(intArray[0], intArray[1]);
			break;
	}
	updateDisplay(result);
	if (storeResult){
		numbers[0] = result;
	}
	else{
		numbers[0] = 0;
		position = 0;
	}
	numbers[1] = 0;
}

function resetCalc(){
	numbers[0] =0;
	numbers[1] =0;
	operation = undefined;
	position = 0;
	updateDisplay("0");
}

function deleteLastEl(){
	numbers[position] = numbers[position].slice(0, -1);
	if (numbers[position].length === 0){
		numbers[position] = 0;
	}
	updateDisplay(numbers[position]);
}
