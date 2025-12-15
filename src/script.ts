const price_input: HTMLInputElement = document.querySelector("#price_input input");
const diameter_input: HTMLInputElement = document.querySelector("#diameter_input input");
const pi: number = 3.14159265359;

function calculate(): void {
  console.log(2*pi*(parseFloat(diameter_input.value)/2)**2);
}