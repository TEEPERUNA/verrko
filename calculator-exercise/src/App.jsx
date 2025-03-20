import React, { useState } from 'react';
import InputComponent from './components/InputComponent';
import OperatorComponent from './components/OperatorComponent';
import ResultComponent from './components/ResultComponent';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(null);

  const calculateResult = () => {
    if (num1 === '' || num2 === '' || operator === '') return;

    const first = parseFloat(num1);
    const second = parseFloat(num2);

    let calcResult;
    switch (operator) {
      case '+':
        calcResult = first + second;
        break;
      case '-':
        calcResult = first - second;
        break;
      case '*':
        calcResult = first * second;
        break;
      case '/':
        if (second === 0) {
          calcResult = 'Error (divide by zero)';
        } else {
          calcResult = first / second;
        }
        break;
      default:
        calcResult = 0;
    }
    setResult(calcResult);
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-section">
        <InputComponent label="Number 1" value={num1} onChange={setNum1} />
        <InputComponent label="Number 2" value={num2} onChange={setNum2} />
        <OperatorComponent operator={operator} onOperatorChange={setOperator} />
        <button onClick={calculateResult}>Calculate</button>
        <ResultComponent result={result} />
      </div>
    </div>
  );
}

export default App;
