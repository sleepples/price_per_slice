const price_input: HTMLInputElement = document.querySelector("#price_input");
const diameter_input: HTMLInputElement = document.querySelector("#diameter_input");
const calc_result: HTMLInputElement = document.querySelector("#calc_result");
const pi: number = 3.14159265359;

function calculate(): void {
	var area: number = parseFloat((pi*(parseFloat(diameter_input.value)/2)**2).toFixed(2));
	var price_per_square_inch: number = parseFloat((parseFloat(price_input.value)/area).toFixed(2));

	if (Number.isNaN(area) || Number.isNaN(price_per_square_inch)) {
		alert("There was a calculation error. Please make sure that you input the numbers correctly then try again.");
		return;
	} else if (!Number.isFinite(price_per_square_inch)) {
		alert("There was a calculation error. Please make sure that any of the input numbers aren't zero's.");
		return;
	}

	calc_result.value = `price per isq: ${price_per_square_inch} | area: ${area}`;
}

function test(): void {
	console.log(`greg ${1+1}`);
}
