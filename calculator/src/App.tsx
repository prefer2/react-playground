import Digit from './components/Digit';
import { DIGITS } from './constants';

import './index.css';

function App() {
  const handleDigitClick = () => {
    console.log('hi');
  };

  return (
    <div id="app">
      <div className="calculator">
        <div id="total">total</div>
        <div className="modifiers">
          <button>AC</button>
        </div>
        <div className="operations">
          <button>/</button>
          <button>X</button>
          <button>-</button>
          <button>+</button>
          <button>=</button>
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
