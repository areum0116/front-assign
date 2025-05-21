let input = [];

const answer = document.getElementById("answer");
const calcBtns = document.querySelector(".calcBtn");
const acBtn = document.querySelector(".acBtn");
const enterBtn = document.querySelector(".enterBtn");

function handleCalcBtnClick(event) {
    answer.classList.remove("blue");

    let clickedText = event.target.innerText;

    if(!isNaN(parseInt(clickedText)) && !isNaN(parseInt(input[input.length-1]))) {
        clickedText = input[input.length-1].concat(clickedText);
        input[input.length-1] = clickedText;
    } else {
        input.push(clickedText);
    }

    answer.innerText = clickedText;
}

function handleAcBtnClick() {
    answer.classList.remove("blue");
    input = [];
    answer.innerText = 0;
}

function handleEnterBtnClick() {
    let result;
    let op;
    for(const element of input) {
        if(isNaN(parseInt(element))) {  // operator
            if(typeof result === "undefined") {
                continue;
            }
            op = element;
        } else {    // operand
            let parsedElement = parseInt(element);
            if(typeof result === "undefined") {
                if(input[0] === "-") {
                    parsedElement *= -1;
                }
                result = parsedElement;
                continue;
            }
            switch(op) {
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
        answer.innerText = result;
    }

    answer.classList.add("blue");
}

document.querySelectorAll(".calcBtn").forEach((btn) => {
    if(btn.classList.contains("acBtn") || btn.classList.contains("enterBtn")) {
        return;
    }
    btn.addEventListener("click", handleCalcBtnClick);
});

acBtn.addEventListener("click", handleAcBtnClick);

enterBtn.addEventListener("click", handleEnterBtnClick);