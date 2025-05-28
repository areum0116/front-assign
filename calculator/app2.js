"use strict";
let input2 = [];
const answer2 = document.getElementById("answer");
const acBtn2 = document.querySelector(".acBtn");
const enterBtn2 = document.querySelector(".enterBtn");
function handleCalcBtnClick2(event) {
    answer2.classList.remove("blue");
    const target = event.target;
    let clickedText = target.innerText;
    if (!isNaN(parseInt(clickedText)) && !isNaN(parseInt(input2[input2.length - 1]))) {
        clickedText = input2[input2.length - 1].concat(clickedText);
        input2[input2.length - 1] = clickedText;
    }
    else {
        input2.push(clickedText);
    }
    answer2.innerText = clickedText;
}
function handleAcBtnClick2() {
    answer2.classList.remove("blue");
    input2 = [];
    answer2.innerText = "0";
}
function handleEnterBtnClick2() {
    var _a;
    let result;
    let op;
    for (const element of input2) {
        if (isNaN(parseInt(element))) { // operator
            if (typeof result === "undefined") {
                continue;
            }
            op = element;
        }
        else { // operand
            let parsedElement = parseInt(element);
            if (typeof result === "undefined") {
                if (input2[0] === "-") {
                    parsedElement *= -1;
                }
                result = parsedElement;
                continue;
            }
            switch (op) {
                case "+":
                    result += parsedElement;
                    break;
                case "-":
                    result -= parsedElement;
                    break;
                case "x":
                    result *= parsedElement;
                    break;
                case "/":
                    result /= parsedElement;
                    break;
            }
        }
        answer2.innerText = (_a = result === null || result === void 0 ? void 0 : result.toString()) !== null && _a !== void 0 ? _a : "";
    }
    answer2.classList.add("blue");
}
document.querySelectorAll(".calcBtn").forEach((btn) => {
    const button = btn;
    if (button.classList.contains("acBtn") || button.classList.contains("enterBtn")) {
        return;
    }
    button.addEventListener("click", handleCalcBtnClick2);
});
acBtn2.addEventListener("click", handleAcBtnClick2);
enterBtn2.addEventListener("click", handleEnterBtnClick2);
