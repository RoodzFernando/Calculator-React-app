const Big = require('big.js');

export default function operate(numberOne, numberTwo, operation) {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  let result;
  switch (operation) {
    case '+':
      result = num1.plus(num2);
      break;
    case '-':
      result = num1.minus(num2);
      break;
    case 'x':
      result = num1.times(num2);
      break;
    case '÷':
      num2 > 0 ? result = num1.div(num2) : result = 'Cannot divide by zero';
      break;
    case '+/-':
      result = num1.times(-1)
      break;
  }
  return result;
}