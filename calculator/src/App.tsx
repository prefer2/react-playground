import { useState } from 'react';
import Digit from './components/Digit';
import Operator from './components/Operator';
import {
  CALCULATED_ERROR,
  CLEAR_NUMBER,
  DECIMAL_POINT_COUNT,
  DIGITS,
  MAX_CALCULATE_NUMBER,
  MAX_DIGIT_PLACE,
  OPERATORS,
} from './constants';
import { ALERT_MESSAGE } from './constants/alert';

import './index.css';
import { isOperator } from './utils';

function App() {
  const [total, setTotal] = useState<string[]>([]);

  const handleDigitClick = (digit: number) => {
    if (total.length === 0) {
      return setTotal((prev) => [...prev, digit.toString()]);
    }

    const lastInput = total[total.length - 1];

    if (lastInput === CALCULATED_ERROR) {
      return setTotal([digit.toString()]);
    }

    // 마지막 입력이 숫자였으면, 기존 숫자에 이어붙인다
    if (!isOperator(lastInput)) {
      const lastNumber = +lastInput;

      if (lastInput.length >= MAX_DIGIT_PLACE) {
        return window.alert(ALERT_MESSAGE.MAX_DIGIT_COUNT);
      }

      const newNumber = lastNumber * 10 + digit;

      return setTotal((prev) => [
        ...prev.slice(0, prev.length - 1),
        newNumber.toString(),
      ]);
    }

    setTotal((prev) => [...prev, digit.toString()]);
  };

  const handleOperatorClick = (operator: string) => {
    if (total.length === 0) {
      return window.alert(ALERT_MESSAGE.NUMBER_FIRST);
    }

    const lastInput = total[total.length - 1];

    if (isOperator(lastInput) || lastInput === CALCULATED_ERROR) {
      return window.alert(ALERT_MESSAGE.NUMBER_FIRST);
    }

    if (total.length > MAX_CALCULATE_NUMBER + 1) {
      return window.alert(ALERT_MESSAGE.MAX_OPERATOR_COUNT);
    }

    if (operator === OPERATORS.EQUAL) {
      const firstNumber = +total[0];
      const secondNumber = +total[2];

      switch (total[1]) {
        case OPERATORS.DIVIDE:
          if (secondNumber === 0) {
            return setTotal([CALCULATED_ERROR]);
          }

          const calculatedNumber = +(firstNumber / secondNumber).toFixed(
            DECIMAL_POINT_COUNT,
          );

          setTotal([calculatedNumber.toString()]);
          break;
        case OPERATORS.MULTIPLY:
          setTotal([(firstNumber * secondNumber).toString()]);
          break;
        case OPERATORS.SUBTRACT:
          setTotal([(firstNumber - secondNumber).toString()]);
          break;
        case OPERATORS.PLUS:
          setTotal([(firstNumber + secondNumber).toString()]);
          break;
      }

      return;
    }

    setTotal((prev) => [...prev, operator]);
  };

  const handleClearClick = () => {
    setTotal([]);
  };

  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">{total.length === 0 ? CLEAR_NUMBER : total.join('')}</h1>
        <div className="modifiers">
          <button onClick={handleClearClick}>AC</button>
        </div>
        <div className="operations">
          {Object.values(OPERATORS).map((operator) => (
            <Operator operator={operator} onClick={handleOperatorClick} />
          ))}
        </div>
        <div className="digits">
          {DIGITS.map((digit) => (
            <Digit digitNumber={digit} onClick={handleDigitClick} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
