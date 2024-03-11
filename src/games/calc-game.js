import { getRandomNum } from '../utilites.js';

const calc = (firstNum, secNum, operator) => {
  let rightAnswer = 0;
  switch (operator) {
    case '+':
      rightAnswer = firstNum + secNum;
      break;
    case '-':
      rightAnswer = firstNum - secNum;
      break;
    case '*':
      rightAnswer = firstNum * secNum;
      break;
    default:
      rightAnswer = 'Smth is wrong';
  }
  return rightAnswer;
};

const calcGame = () => {
  const operatorArr = ['+', '-', '*'];
  const leftRandomNum = getRandomNum(1, 100);
  const rightRandomNum = getRandomNum(1, 100);
  const randomOperator = operatorArr[getRandomNum(0, operatorArr.length)];
  const question = `${leftRandomNum} ${randomOperator} ${rightRandomNum}`;
  const neededAnswer = calc(leftRandomNum, rightRandomNum, randomOperator);
  const finalArr = [question, neededAnswer.toString()];
  return finalArr;
};

export default calcGame;
