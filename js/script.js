let pantalla = document.querySelector("#little-screen");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let clear = document.querySelector("#clear");
let equal = document.querySelector("#equal");
let clean = (pantalla.textContent = "");
numbers.forEach((num) => {
	num.addEventListener("click", function () {
		justTyped = this.textContent;
		pantalla.textContent += justTyped;
		inDisplay = pantalla.textContent;
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

clear.addEventListener("click", function () {
	pantalla.textContent = "";
});

equal.addEventListener("click", function () {
	let arrayFromDisplay = inDisplay.split("");
	opr = arrayFromDisplay.filter((sgn) => sgn == selectedOperator);
	//console.log(opr);
	sameArray = inDisplay.split(`${opr}`).map(Number);
	if (opr == "+") {
		clean;
		pantalla.textContent = add(sameArray[0], sameArray[1]);
	} else if (opr == "-") {
		clean;
		pantalla.textContent = substract(sameArray[0], sameArray[1]);
	} else if (opr == "x") {
		clean;
		pantalla.textContent = multiply(sameArray[0], sameArray[1]);
	} else if ((opr = "/")) {
		clean;
		pantalla.textContent = divide(sameArray[0], sameArray[1]);
	}
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

function operate(operator, num1, num2) {
	return operator(num1, num2);
}
