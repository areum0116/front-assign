import { useState } from 'react';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState([]);

  const onLottoBtnClick = () => {
    const nums = [];

    while (nums.length < 6) {
      let n = Math.floor(Math.random() * 45) + 1;
      if (!nums.includes(n)) {
        nums.push(n);
      }
    }

    nums.sort((a, b) => a - b);
    setNumbers(nums);
  };

  const getColorClass = (num) => {
    if (num < 10) {
      return "yellow";
    } else if (num < 20) {
      return "blue";
    } else if (num < 30) {
      return "red";
    } else if (num < 40) {
      return "black";
    }
    return "green";
  };

  return (
    <div>
      <button onClick={onLottoBtnClick} id="lottoBtn">추첨하기</button>

      <div id="lottoNums">
        {numbers.map((num, idx) => (
          <span key={idx} className={`lottoNum ${getColorClass(num)}`}>
            {num}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
