const displayNumber = document.querySelector('.display-number');
const inputNumber = document.querySelector('#input-number');

inputNumber.addEventListener("keydown", (e) => {

console.log(e.key);

	if (!e.target.value) {
		displayNumber.textContent = "0000 0000 0000 0000";
	} else {
		const totalNumber = e.target.value.replaceAll(" ", "");

		if (e.target.value.length > 14) {
			e.target.value = totalNumber.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
			displayNumber.innerHTML = totalNumber.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
		} else if (e.target.value.length > 9) {
			e.target.value = totalNumber.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
			displayNumber.innerHTML = totalNumber.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
		} else if (e.target.value.length > 4) {
			e.target.value = totalNumber.replace(/(\d{4})(\d{0,4})/, "$1 $2");
			displayNumber.innerHTML = totalNumber.replace(/(\d{4})(\d{0,4})/, "$1 $2");
		} else {
			displayNumber.innerHTML = totalNumber;
		}
	}
})