"use strict";
var price_input = document.querySelector("#price_input");
var diameter_input = document.querySelector("#diameter_input");
var calc_result = document.querySelector("#calc_result");
var pi = 3.14159265359;
function calculate() {
    var area = parseFloat((pi * Math.pow((parseFloat(diameter_input.value) / 2), 2)).toFixed(2));
    var price_per_square_inch = parseFloat((parseFloat(price_input.value) / area).toFixed(2));
    if (Number.isNaN(area) || Number.isNaN(price_per_square_inch)) {
        alert("There was a calculation error. Please make sure that you input the numbers correctly then try again.");
        return;
    }
    else if (!Number.isFinite(price_per_square_inch)) {
        alert("There was a calculation error. Please make sure that any of the input numbers aren't zero's.");
        return;
    }
    calc_result.value = "price per isq: ".concat(price_per_square_inch, " | area: ").concat(area);
}
function test() {
    console.log("greg ".concat(1 + 1));
}
