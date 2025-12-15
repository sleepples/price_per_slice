"use strict";
var price_input = document.querySelector("#price_input input");
var diameter_input = document.querySelector("#diameter_input input");
var pi = 3.14159265359;
function calculate() {
    console.log(2 * pi * Math.pow((parseFloat(diameter_input.value) / 2), 2));
}
