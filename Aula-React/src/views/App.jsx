import "./App.css";
import "../components/Calculator.jsx"
import { useState } from "react";
import Calculator from "../components/Calculator.jsx";
import Display from "../components/Display";
import Board from "../components/Board";
import Button from "../components/Button";







function App() {
  const btns = [ "C", "+/-", "%", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ",", "="]
  const [calc, setCalc] = useState({
    displayValue: 1,
    operation: null,
    
  });

  const increment = () => {
    setCalc({
      ...calc,
      displayValue: calc.displayValue + 1,
    });
  }

  const handleClick = (btn) => {
    setCalc({
      ...calc,
      displayValue: calc.displayValue + btn.toString(),
    })}
    
    return (
    <>
      <Calculator> 
        <Display value={calc.displayValue}/>
        <Board>
          {
          btns.map((btn, index) => (
          <Button key={index} value={btn}
          onClick={() => handleClick()} />))
        }
          </Board>
      </Calculator>
      <button onClick={() => increment()}>+</button>
    </>
  );
}

export default App;
