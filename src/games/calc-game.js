import { getRandomNum } from '../utilites.js';

const calc = (firstNum, secNum, operator) => {
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

const calcGame = () => {
  const operatorArr = ['+', '-', '*'];
  const leftRandomNum = getRandomNum(1, 100);
  const rightRandomNum = getRandomNum(1, 100);
  const randomOperator = operatorArr[getRandomNum(0, operatorArr.length)];
  const question = `${leftRandomNum} ${randomOperator} ${rightRandomNum}`;
  const neededAnswer = calc(leftRandomNum, rightRandomNum, randomOperator).toString();
  return [question, neededAnswer];
};

export default calcGame;
