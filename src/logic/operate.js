const Big = require('big.js');
/**
 * It should
 import the big.js module from the corresponding npm package.
 It should implement one
 default
 function named operate.
 The operate
 function should accept numberOne, numberTwo and operation as arguments.
 Using the value of the operation argument, this method should perform a simple math operation.For instance
 if operation == "-", it should
 return the result of subtracting the two passed numbers.Remember to wrap the numbers with big.js classes 
 so you can operate on big numbers.
 If the buttonName in calculate.js is equal to any operation(e.g. + , -, x, ÷, % [modifier - turning the 
  number into a percentage based number]), operate.js should be used to calculate the total property.
 */
export default function operate(numberOne, numberTwo, operation) {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  let result = 0;
  switch (operation) {
    case '+':
      result = num1.plus(num2);
      break;
    case '-':
      result = num1.minus(num2);
      break;
    case 'X':
      result = num1.times(num2);
      break;
    case '÷':
      num2 > 0 ? result = num1.div(num2) : console.error('Error');
      break;
    case '+/-':
      result = num1.times(-1)
      break;
  }
  return result;
}