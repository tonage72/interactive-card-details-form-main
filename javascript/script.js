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

	if (/^[A-Za-z]+$/.test(inputName.value)) {
		invalidName.style.display = "none";
	} else {
		invalidName.style.display = "block";
	}

	if (/^\d+$/.test(inputNumber.value)) {
		invalidNumber.style.display = "none";
	} else {
		invalidNumber.style.display = "block";
	}

	if (/^\d+$/.test(inputMonth.value)) {
		invalidMYCVC.style.display = "none";
	} else {
		invalidMYCVC.style.display = "block";
	}

	if (/^\d+$/.test(inputYear.value)) {
		invalidMYCVC.style.display = "none";
	} else {
		invalidMYCVC.style.display = "block";
	}

	if (/^\d+$/.test(inputCVC.value)) {
		invalidMYCVC.style.display = "none";
	} else {
		invalidMYCVC.style.display = "block";
	}

})

