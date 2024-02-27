const displayNumber = document.querySelector('.display-number');
const displayName = document.querySelector('.display-name');
const displayMonth = document.querySelector('.display-month');
const displayYear = document.querySelector('.display-year');
const displayCVC = document.querySelector('.display-special');

const inputName = document.querySelector('#input-name');
const inputNumber = document.querySelector('#input-number');
const inputMonth = document.querySelector('#input-month');
const inputYear = document.querySelector('#input-year');
const inputCVC = document.querySelector('#input-cvc');

const confirmButton = document.querySelector('.confirm-button');

const invalidName = document.querySelector('.invalid-name')
const invalidNumber = document.querySelector('.invalid-number')
const invalidMYCVC = document.querySelector('.invalid-M-Y-CVC')

const completedMessage = document.querySelector('.completed-message')
const form = document.querySelector('form');

inputName.addEventListener("keyup", () => {
	displayName.textContent = inputName.value;
})

inputNumber.addEventListener("keyup", () => {
		displayNumber.textContent = inputNumber.value;
})

inputMonth.addEventListener("keyup", () => {
		displayMonth.textContent = inputMonth.value;
})

inputYear.addEventListener("keyup", () => {
		displayYear.textContent = inputYear.value;
})

inputCVC.addEventListener("keyup", () => {
		displayCVC.textContent = inputCVC.value;
})

confirmButton.addEventListener("click", () => {

	let nameValid = false;
	let numberValid = false;
	let monthYearCVCValid = false;

	if (/^[A-Za-z ]+$/.test(inputName.value)) {
		invalidName.style.display = "none";
		nameValid = true;
	} else {
		invalidName.style.display = "block";
	}

	if (/^\d+$/.test(inputNumber.value)) {
		invalidNumber.style.display = "none";
		numberValid = true;
	} else {
		invalidNumber.style.display = "block";
	}

	if (/^\d+$/.test(inputMonth.value) &&
		/^\d+$/.test(inputYear.value) &&
		/^\d+$/.test(inputCVC.value)) {
		invalidMYCVC.style.display = "none";
		monthYearCVCValid = true;
	} else {
		invalidMYCVC.style.display = "block";
	}

	if (nameValid && numberValid && monthYearCVCValid) {
		form.style.display = "none";
		completedMessage.style.display = "block";
	}

})