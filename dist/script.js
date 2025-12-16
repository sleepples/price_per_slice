"use strict";
var price_input = document.querySelector("#price_input");
var diameter_input = document.querySelector("#diameter_input");
var calc_result = document.querySelector("#calc_result");
var pi = 3.14159265359;
function calculate() {
    var area = parseFloat((pi * Math.pow((parseFloat(diameter_input.value) / 2), 2)).toFixed(2));
    var price_per_square_inch = parseFloat((parseFloat(price_input.value) / area).toFixed(2));
    calc_result.value = "price per isq: ".concat(price_per_square_inch, " | area: ").concat(area);
}
