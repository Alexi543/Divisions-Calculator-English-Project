import { string } from "./JavaScript-Tools/string.js";

const BUTTONS = document.querySelectorAll(".btn");
const DIVIDERS_OUTPUT = document.getElementById("output-dividers");
const DIVIDERS_NUMBER = document.getElementById("dividers-num-value");
const COMMUN_DIV_OUTPUT = document.getElementById("output-commun-dividers");
const COMMUN_DIV_NUMBER_1 = document.getElementById("commun-dividers-num-1");
const COMMUN_DIV_NUMBER_2 = document.getElementById("commun-dividers-num-2");

const clearInputToNumber = (input) => string.keepCharacters(input, string.digits);

const foundDividers = (number) => {
    let dividers = [];

    for (let i = 1; i <= number; i++) if (Math.floor(number / i) * i == number) dividers.push(i);

    return dividers;
}

const foundSameDividers = (divider1, divider2) => {
    let dividersList1 = foundDividers(divider1);
    let dividersList2 = foundDividers(divider2);
    
    return dividersList1.filter(x => dividersList2.indexOf(x) !== -1);
}

BUTTONS.forEach(button => {
    button.addEventListener("click", event => {
        if (button.id === "start-dividers") {
            let number = "";
            let out;

            if (DIVIDERS_NUMBER.value.toString().split("").length > 0) number  = clearInputToNumber(DIVIDERS_NUMBER.value);
            else number = "Error";

            if (number.split("").length <= 0) number = "Error";

            if (number !== "Error") out = foundDividers(number).toString();
            else out = "Error";

            DIVIDERS_OUTPUT.innerHTML = `Number = ${number} <br> ${out}`;
        } else if (button.id === "start-commun-dividers") {
            let number1 = "";
            let number2 = "";
            let out;

            if (COMMUN_DIV_NUMBER_1.value.toString().split("").length > 0) number1 = clearInputToNumber(COMMUN_DIV_NUMBER_1.value);
            else number1 = "Error";

            if (number1.split("").length <= 0) number1 = "Error";

            if (COMMUN_DIV_NUMBER_2.value.toString().split("").length > 0) number2 = clearInputToNumber(COMMUN_DIV_NUMBER_2.value);
            else number2 = "Error";

            if (number2.split("").length <= 0) number2 = "Error";

            if (number1 !== "Error" && number2 !== "Error") out = foundSameDividers(number1, number2).toString();
            else out = "Error";

            COMMUN_DIV_OUTPUT.innerHTML = `Number 1 = ${number1} <br> Number 2 = ${number2} <br> ${out}`;
        }
    })
})
