let numbers : number[] = [];

const lottoBtn = document.getElementById("lottoBtn") as HTMLButtonElement;
const lottoNum = document.querySelectorAll(".lottoNum");

function handleLottoBtnClick() {
    numbers = [];
    for(let i = 0; i < 6; i++) {
        let number = Math.floor(Math.random() * 45) + 1;
        while(numbers.includes(number)) {
            number = Math.floor(Math.random() * 45) + 1;
        }
        numbers.push(number);
    }
    numbers.sort((a, b) => a - b);

    for(let i = 0; i < 6; i++) {
        const lotto = lottoNum[i] as HTMLElement;
        lotto.innerText = numbers[i].toString();
        lotto.classList.remove("yellow", "blue", "red", "black", "green");
        if(numbers[i] < 10) {
            lotto.classList.add("yellow");
        } else if(numbers[i] < 20) {
            lotto.classList.add("blue");
        } else if(numbers[i] < 30) {
            lotto.classList.add("red");
        } else if(numbers[i] < 40) {
            lotto.classList.add("black");
        } else {
            lotto.classList.add("green");
        }
    }
}

lottoBtn.addEventListener("click", handleLottoBtnClick);