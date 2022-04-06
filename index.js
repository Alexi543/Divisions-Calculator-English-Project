import { string } from "./JavaScript-Tools/string.js";
import { random } from "./JavaScript-Tools/random.js";

const BUTTONS = document.querySelectorAll(".btn");
const DIVIDERS_OUTPUT = document.getElementById("output-dividers");
const DIVIDERS_NUMBER = document.getElementById("dividers-num-value");

const clearInputToNumberGood = (input) => string.keepCharacters(input, string.digits);

const clearInputToNumberBad = (input) => {
    switch (random.randrange(1, 3)) {
        case 1:
            return string.keepCharacters(input, string.digits);
        case 2:
            return random.randrange(1, 100);
        case 3:
            return "Error";
    }
}

const foundDividers = (number) => {
    let dividers = [];

    for (let i = 1; i <= number; i++) if (Math.floor(number / i) * i == number) dividers.push(i);

    return dividers;
}

BUTTONS.forEach(button => {
    button.addEventListener("click", event => {
        if (button.id === "start-dividers") {
            let number = "";
            let out;

            if (DIVIDERS_NUMBER.value.toString().split("").length > 0) number  = clearInputToNumberBad(DIVIDERS_NUMBER.value);
            else number = "Error";

            if (number.toString().split("").length <= 0) number = "Error";

            if (number !== "Error") out = foundDividers(number).toString();
            else out = "Error";

            DIVIDERS_OUTPUT.innerHTML = `Number = ${number} <br> ${out}`;
        }
    })
})
