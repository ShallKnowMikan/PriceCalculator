const allowOnlyMathInput = (e) => {
	const allowed = /[\d.\-]/;
	const keysAllowed = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];

	if (e.key === "ArrowUp" || e.key === "ArrowDown") {
		e.preventDefault();
		const input = e.target;
		let value = parseFloat(input.value);

		if (isNaN(value)) value = 0;

		if (e.key === "ArrowUp") {
			value += 1;
		} else if (e.key === "ArrowDown") {
			value -= 1;
		}

		input.value = value;

		input.dispatchEvent(new Event("input", {bubbles: true}));

		return;
	}

	if (!allowed.test(e.key) && !keysAllowed.includes(e.key)) {
		e.preventDefault();
	}
};

document.querySelectorAll('input[type="text"]').forEach((input) => {
	input.addEventListener("keydown", allowOnlyMathInput);
});

// Variables
let hours = parseFloat(0);
let minutes = parseFloat(0);
let eurosPerHour = parseFloat(12);
document.getElementById("hours").addEventListener("input", (e) => {
	hours = parseFloat(e.target.value);
	process();
});
document.getElementById("min").addEventListener("input", (e) => {
	minutes = parseFloat(e.target.value);
	process();
});
document.getElementById("euros").addEventListener("input", (e) => {
	eurosPerHour = parseFloat(e.target.value);
	process();
});

function process() {
	const output = document.getElementById("output");
	// if 30 min returns 0.5
	const minutesOverHour = minutes <= 0 ? 0 : minutes / 60;
	console.log("minutesOverHour: " + minutesOverHour);
	console.log("hours: " + hours);
	const time = hours + minutesOverHour;
	console.log("time: " + time);
	const euros = eurosPerHour * time;
	output.innerText = "€" + euros.toFixed(2);
}
