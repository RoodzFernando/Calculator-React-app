import Operate from './operate';

export default function calculate(data, buttonName) {
  if (buttonName === 'AC') {
    data.operation = null;
    data.numOne = null;
    data.next = null;
  }

  if (/\+|-|x|÷/.test(buttonName)) {
    if(buttonName.length == 1) {
      data.operation = buttonName
      data.numOne = data.next;
      data.next = null;
    }
  }

  if (/\d/.test(buttonName)) {
    if (data.next) {
      data.next += buttonName;
    } else {
      data.next = buttonName;
    }
  }

  if (buttonName === '.') {
    if (data.next) {
      data.next += buttonName;
    }else{
      data.next =`0${buttonName}`;
    }
  }

  if (buttonName === '+/-') {
    if (data.next > 0) {
      data.next = `-${data.next}`
    }else{
      data.next = data.next
    }
  }
 
  if (buttonName === '=') {
    data.total = Operate(Number(data.numOne), Number(data.next), data.operation).toString();
    data.operation = null;
    data.numOne = null;
    data.next = null;
  }
  return data;
}