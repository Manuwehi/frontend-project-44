import { getRandomNum } from '../utilites.js';

const doCalc = (firstNum, secNum, operator) => {
  switch (operator) {
    case '+':
      return firstNum + secNum;
    case '-':
      return firstNum - secNum;
    case '*':
      return firstNum * secNum;
    default:
      throw new Error('Smth is wrong');
  }
};

export default () => {
  const operators = ['+', '-', '*'];
  const leftRandomNum = getRandomNum(1, 100);
  const rightRandomNum = getRandomNum(1, 100);
  const randomOperator = operators[getRandomNum(0, operators.length)];
  const question = `${leftRandomNum} ${randomOperator} ${rightRandomNum}`;
  const neededAnswer = doCalc(leftRandomNum, rightRandomNum, randomOperator).toString();
  return [question, neededAnswer];
};
