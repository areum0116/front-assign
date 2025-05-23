let numbers = [];

const lottoBtn = document.getElementById("lottoBtn");
const lottoNum = document.querySelectorAll(".lottoNum")

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
        lottoNum[i].innerText = numbers[i];
        lottoNum[i].classList.remove("yellow", "blue", "red", "black", "green");
        if(numbers[i] < 10) {
            lottoNum[i].classList.add("yellow");
        } else if(numbers[i] < 20) {
            lottoNum[i].classList.add("blue");
        } else if(numbers[i] < 30) {
            lottoNum[i].classList.add("red");
        } else if(numbers[i] < 40) {
            lottoNum[i].classList.add("black");
        } else {
            lottoNum[i].classList.add("green");
        }
    }
}

lottoBtn.addEventListener("click", handleLottoBtnClick);