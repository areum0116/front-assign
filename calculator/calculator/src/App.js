import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState([]);
  const [display, setDisplay] = useState("0");
  const [isResult, setIsResult] = useState(false);

  const onCalcBtnClick = (value) => {
    let newInput = [...input];

    if (!isNaN(parseInt(value)) && !isNaN(parseInt(input[input.length - 1]))) {
      const merged = input[input.length - 1] + value;
      newInput[newInput.length - 1] = merged;
    } else {
      newInput.push(value);
    }

    setInput(newInput);
    setDisplay(newInput[newInput.length - 1]);
    setIsResult(false);
  };

  const onAcBtnClick = () => {
    setInput([]);
    setDisplay("0");
    setIsResult(false);
  };

  const onEnterBtnClick = () => {
    let result;
    let op;

    for (const element of input) {
      if (isNaN(parseInt(element))) {  // operator
        if (result === undefined) {
          continue;
        }
        op = element;
      } else {    // operand
        let parsedElement = parseInt(element);
        if (result === undefined) {
          result = input[0] === "-" ? -parsedElement : parsedElement;
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
          default:
            break;
        }
      }
    }
    setDisplay(result?.toString() ?? "0");
    setIsResult(true);
  };

  const renderButton = (value, className = "") => (
    <button
      className={`calcBtn ${className}`}
      onClick={() => {
        if (value === "AC") return onAcBtnClick();
        if (value === "Enter") return onEnterBtnClick();
        onCalcBtnClick(value);
      }}
    >
      {value}
    </button>
  );

  return (
    <div id="calculator">
      <div>
        {renderButton("+", "plusBtn")}
        {renderButton("-", "minusBtn")}
        {renderButton("x", "mulBtn")}
      </div>
      <div>
        {renderButton("7")}
        {renderButton("8")}
        {renderButton("9")}
        {renderButton("/", "divBtn")}
      </div>
      <div>
        {renderButton("4")}
        {renderButton("5")}
        {renderButton("6")}
        {renderButton("AC", "acBtn")}
      </div>
      <div>
        {renderButton("1")}
        {renderButton("2")}
        {renderButton("3")}
        {renderButton("Enter", "enterBtn")}
      </div>
      <div>
        {renderButton("0")}
        <h1 id="answer" className={isResult ? "blue" : ""}>
          <span>{display}</span>
        </h1>
      </div>
    </div>
  );
}

export default App;
