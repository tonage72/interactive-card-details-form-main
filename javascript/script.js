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

const invalidName = document.querySelector('.invalid-name');
const invalidNumber = document.querySelector('.invalid-number');
const invalidMYCVC = document.querySelector('.invalid-M-Y-CVC');

const completedMessage = document.querySelector('.completed-message');
const form = document.querySelector('form');

const completedContinue = document.querySelector('.completed-continue');

inputName.addEventListener("keyup", () => {
	displayName.textContent = inputName.value;
})

inputNumber.oninput = function () {
    var foo = this.value.split(" ").join("");
    if (foo.length > 0) {
        foo = foo.match(new RegExp('.{1,4}', 'g')).join(" ");
    }
    this.value = foo;
	displayNumber.textContent = inputNumber.value;
};

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

	if (!inputName.value) {
		invalidName.textContent = "Cannot be blank.";
	} else if (/^[A-Za-z ]+$/.test(inputName.value)) {
		invalidName.textContent = "";
		nameValid = true;
	} else {
		invalidName.textContent = "Invalid. Letters only.";
	}

	if (!inputNumber.value) {
		invalidNumber.textContent = "Cannot be blank.";
	} else if (inputNumber.value.length != 19) {
		invalidNumber.textContent = "Not enough digits."
	} else if (/^[\d ]+$/.test(inputNumber.value)) {
		invalidNumber.textContent = "";
		numberValid = true;
	} else {
		invalidNumber.textContent = "Invalid. Numbers only.";
	}

	if (!inputMonth.value || !inputYear.value || !inputCVC.value) {
		invalidMYCVC.textContent = "MM YY CVC Cannot be blank";
	} else if (inputMonth.value.length != 2 ||
		inputYear.value.length != 2 ||
		inputCVC.value.length != 3) {
			invalidMYCVC.textContent = "Need more digits in MM YY or CVC"
	} else if (/^\d+$/.test(inputMonth.value) &&
		/^\d+$/.test(inputYear.value) &&
		/^\d+$/.test(inputCVC.value)) {
			invalidMYCVC.textContent = "";
			monthYearCVCValid = true;
	} else {
		invalidMYCVC.textContent = "MM YY or CVC Invalid. Numbers only.";
	}

	if (nameValid && numberValid && monthYearCVCValid) {
		form.style.display = "none";
		completedMessage.style.display = "block";
	}
})

completedContinue.addEventListener("click", () => {
	location.reload();
})