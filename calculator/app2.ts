let input2 : string[] = [];

const answer2 = document.getElementById("answer") as HTMLElement;
const acBtn2 = document.querySelector(".acBtn") as HTMLButtonElement;
const enterBtn2 = document.querySelector(".enterBtn") as HTMLButtonElement;

function handleCalcBtnClick2(event:MouseEvent) {
    answer2.classList.remove("blue");

    const target = event.target as HTMLElement;
    let clickedText = target.innerText;

    if(!isNaN(parseInt(clickedText)) && !isNaN(parseInt(input2[input2.length-1]))) {
        clickedText = input2[input2.length-1].concat(clickedText);
        input2[input2.length-1] = clickedText;
    } else {
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
    let result:number|undefined;
    let op:string|undefined;

    for(const element of input2) {
        if(isNaN(parseInt(element))) {  // operator
            if(typeof result === "undefined") {
                continue;
            }
            op = element;

        } else {    // operand
            let parsedElement = parseInt(element);

            if(typeof result === "undefined") {
                if(input2[0] === "-") {
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
        answer2.innerText = result?.toString() ?? "";
    }

    answer2.classList.add("blue");
}

document.querySelectorAll(".calcBtn").forEach((btn) => {
    const button = btn as HTMLButtonElement;

    if(button.classList.contains("acBtn") || button.classList.contains("enterBtn")) {
        return;
    }
    
    button.addEventListener("click", handleCalcBtnClick2);
});

acBtn2.addEventListener("click", handleAcBtnClick2);

enterBtn2.addEventListener("click", handleEnterBtnClick2);