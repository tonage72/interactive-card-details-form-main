let displayNumber = document.querySelector('.display-number');
let displayName = document.querySelector('.display-name');
let displayMonth = document.querySelector('.display-month');
let displayYear = document.querySelector('.display-year');
let displayCVC = document.querySelector('.display-special');

const inputNumber = document.querySelector('#input-number');
const inputName = document.querySelector('#input-name');
const inputMonth = document.querySelector('#input-month');
const inputYear = document.querySelector('#input-year');
const inputCVC = document.querySelector('#input-cvc');

const confirmButton = document.querySelector('.confirm-button');

inputName.addEventListener("keyup", () => {
	displayName.textContent = inputName.value;
})

inputNumber.addEventListener("keyup", () => {
	if(inputNumber.value.length > inputNumber.maxLength) {
		inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
	}
		displayNumber.textContent = inputNumber.value;
})

inputMonth.addEventListener("keyup", () => {
	if(inputMonth.value.length > inputMonth.maxLength) {
		inputMonth.value = inputMonth.value.slice(0, inputMonth.maxLength);
	}
		displayMonth.textContent = inputMonth.value;
})

inputYear.addEventListener("keyup", () => {
	if(inputYear.value.length > inputYear.maxLength) {
		inputYear.value = inputYear.value.slice(0, inputYear.maxLength);
	}
		displayYear.textContent = inputYear.value;
})

inputCVC.addEventListener("keyup", () => {
	if(inputCVC.value.length > inputCVC.maxLength) {
		inputCVC.value = inputCVC.value.slice(0, inputCVC.maxLength);
	}
		displayCVC.textContent = inputCVC.value;
})

confirmButton.addEventListener("click", () => {
	
})

