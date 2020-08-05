
import Operate from './operate';
/**
 The calculator data object should contain three properties: total, next and operation.
 This method should use the buttonName argument to mutate the calculator’ s data object and
 return its modified version.For instance
 if buttonName == "+/-", it should multiply total and next by - 1 to make it negative or positive.
 */
export default function calculate(data, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }
  // check for button and operation sign
      // console.log(/\d/.test(e.target.textContent) ? e.target.textContent : false)
      const checkCharacter = (string) => {
        const testChar = /\d/.test(string);
        if (testChar) {
          return (0|1|2|3|4|5|6|7|8|9);
          // return (buttonName);
        }else if (string.length == 1){
          return ('+'|'-'|'x'|'÷');
        }
        // return string;
      }

      // operate takes numberOne numberTwo operation

}