/* eslint-disable max-len */
/* eslint-disable no-self-assign */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-param-reassign */
import Operate from './operate';

export default function calculate(data, buttonName) {
  if (buttonName === 'AC') {
    data.operation = null;
    data.next = null;
    data.current = null;
  }

  if (/\+|-|x|÷/.test(buttonName)) {
    if (buttonName.length === 1) {
      if (data.current && data.next) {
        const lastChar = data.current.charAt(data.current.length - 1);
        if ((lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '÷')
          && (lastChar !== buttonName)
          || (lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '÷')
          && (lastChar === buttonName)) {
          const newAr = data.current.split('');
          newAr[newAr.length - 1] = buttonName;
          data.current = newAr.join('');
        } else {
          data.next += buttonName;
          data.current += buttonName;
          data.operation = buttonName;
        }
      }
    }
  }

  if (/\d/.test(buttonName)) {
    if (data.current && data.next) {
      data.next += buttonName;
      data.current += buttonName;
    } else {
      data.next = buttonName;
      data.current = buttonName;
    }
  }

  if (buttonName === '.') {
    if (data.next) {
      data.next += buttonName;
      data.current += buttonName;
    } else {
      data.next = `0${buttonName}`;
      data.current = `0${buttonName}`;
    }
  }
  if (buttonName === '+/-') {
    if (data.next > 0) {
      data.next = `${-1 * data.next}`;
      data.current = `${-1 * data.current}`;
    } else {
      data.next = data.next;
      data.current = data.next;
    }
  }

  if (buttonName === '=') {
    const operationValue = data.current.split(/\+|-|x|÷/);
    data.total = operationValue;
    if (data.next.startsWith('-')) {
      data.current = Operate(Number(`-${data.total[1]}`), Number(data.total[2]), data.operation).toString();
      data.operation = null;
    } else {
      data.current = Operate(Number(data.total[0]), Number(data.total[1]), data.operation).toString();
      data.operation = null;
    }
    data.next = null;
  }
  return data;
}
