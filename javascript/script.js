const displayNumber = document.querySelector('.display-number');
let inputNumber = document.getElementById('input-number');

inputNumber.addEventListener("keyup", updateCardNumber);

function updateCardNumber() {
	let numberString = inputNumber.value.toString();
	displayNumber.textContent = numberString.replace(/.{4}/g, '$& ');
	inputNumber. = numberString.replace(/.{4}/g, '$& ');
}