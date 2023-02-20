let pantalla = document.querySelector("#little-screen");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let clear = document.querySelector("#clear");

numbers.forEach((num) => {
	num.addEventListener("click", function () {
		pantalla.textContent += this.textContent;
	});
});

operators.forEach((operator) => {
	operator.addEventListener("click", function () {
		pantalla.textContent += this.textContent;
	});
});

clear.addEventListener("click", function () {
	pantalla.textContent = "";
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
