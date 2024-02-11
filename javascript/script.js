const displayNumber = document.querySelector('.display-number');
const inputNumber = document.getElementById('input-number');



inputNumber.addEventListener("keyup", updateCards);

function updateCards() {
	displayNumber.textContent = inputNumber.value;
}