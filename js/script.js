let pantalla = document.querySelector("#little-screen");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let clear = document.querySelector("#clear");
let equal = document.querySelector("#equal");
let clean = (pantalla.textContent = "");
//let operatorList = ["*", "-", "+", "/"];

numbers.forEach((num) => {
	num.addEventListener("click", function () {
		justTyped = this.textContent;
		pantalla.textContent += justTyped;
		inDisplay = pantalla.textContent;
		pantalla.textContent = inDisplay;
	});
});

operators.forEach((operator) => {
	operator.addEventListener("click", function () {
		selectedOperator = this.textContent;
		if (pantalla.textContent != this.textContent) {
			pantalla.textContent += this.textContent;
		} else {
			pantalla.textContent;
		}
	});
});

function getClean() {
	pantalla.textContent = "";
}

clear.addEventListener("click", function () {
	getClean();
});

// equal.addEventListener("click", function () {
// 	let arrayFromDisplay = inDisplay.split("");
// 	opr = arrayFromDisplay.filter((sgn) => sgn == selectedOperator);
// 	//console.log(opr);
// 	sameArray = inDisplay.split(`${opr}`).map(Number);
// 	operation = operate(opr, sameArray[0], sameArray[1]);
// 	pantalla.textContent = operation;
// });

function resolveThis() {
	let arrayFromDisplay = inDisplay.split("");
	let revised = pantalla.textContent;

	signo = arrayFromDisplay.filter((sign) => {
		if (sign == "*" || sign == "+" || sign == "/" || sign == "-") {
			return true;
		}
	});

	allNums = inDisplay.split(/[+/*-]/).map(Number);

	let lasItem = revised.split("")[revised.length - 1];
	if (lasItem == "*" || lasItem == "+" || lasItem == "-" || lasItem == "/") {
		pantalla.textContent = "Error";
		setTimeout(() => {
			getClean();
		}, 1000);
	} else {
		let currentSolution = 0;
		for (a = 0; a < signo.length + allNums.length; a++) {
			currentSolution = operate(allNums[0], signo[0], allNums[1]);
			if (allNums[0] == 0 && signo[0] == "/") {
				pantalla.textContent = "Error";
				setTimeout(() => {
					getClean();
				}, 1000);
			} else {
				allNums.shift();
				signo.shift();
				allNums.shift();
				allNums.unshift(currentSolution);
				pantalla.textContent = Number(allNums);
			}
		}
	}

	// if (Number(revised[revised.length - 1]) != typeof number) {
	// 	pantalla.textContent = "Error";
	// } else {
	// }

	// let todoJunto = [];
	// for (a = 0; a < signo.length + allNums.length; a++) {
	// 	todoJunto.push(allNums[0], signo[0], allNums[1]);

	// 	for (b = 0; b < 1; b++) {
	// 		allNums.shift();
	// 		signo.shift();
	// 		allNums.shift();
	// 	}
	// }
	//console.log(todoJunto);
	// let getto = operate(signos[0], allNums[0], [allNums[1]]) + start;
	// console.log(getto);

	// let arrayFromDisplay = inDisplay.split(/[+*-/]/);

	// let arrayFromDisplay = inDisplay.split("");
	// opr = arrayFromDisplay.filter((sgn) => sgn == selectedOperator);
	// //console.log(opr);
	// sameArray = inDisplay.split(`${opr}`).map(Number);
	// operation = operate(opr, sameArray[0], sameArray[1]);
	// pantalla.textContent = operation;
	// return pantalla.textContent;
}

equal.addEventListener("click", function () {
	resolveThis();
});

function add(num1, num2) {
	return num1 + num2;
}

function substract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function operate(num1, operator, num2) {
	if (operator == "+") {
		return add(num1, num2);
	} else if (operator == "-") {
		return substract(num1, num2);
	} else if (operator == "*") {
		return multiply(num1, num2);
	} else if (operator == "/") {
		return divide(num1, num2);
	}
}
