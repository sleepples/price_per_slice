const price_input: HTMLInputElement = document.querySelector("#price_input");
const diameter_input: HTMLInputElement = document.querySelector("#diameter_input");
const calc_result: HTMLInputElement = document.querySelector("#calc_result");
const pi: number = 3.14159265359;

function calculate(): void {
  var area = parseFloat((pi*(parseFloat(diameter_input.value)/2)**2).toFixed(2));
  var price_per_square_inch = parseFloat((parseFloat(price_input.value)/area).toFixed(2));

  calc_result.value = `price per isq: ${price_per_square_inch} | area: ${area}`;
}