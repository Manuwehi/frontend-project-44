import getRandomNum from '../src/getRandomNum.js';

const calcGame = () => {
  const operatorArr = ['+', '-', '*'];
  const leftRandomNum = getRandomNum();
  const rightRandomNum = getRandomNum();
  const randomOperator = operatorArr[Math.floor(Math.random() * (operatorArr.length))];
  let question = '';
  const message = 'What is the result of the expression?';
  let rightAnswer = 0;
  switch (randomOperator) {
    case '+':
      rightAnswer = leftRandomNum + rightRandomNum;
      question = `${leftRandomNum} + ${rightRandomNum}`;
      break;
    case '-':
      rightAnswer = leftRandomNum - rightRandomNum;
      question = `${leftRandomNum} - ${rightRandomNum}`;
      break;
    case '*':
      rightAnswer = leftRandomNum * rightRandomNum;
      question = `${leftRandomNum} * ${rightRandomNum}`;
      break;
    default:
      rightAnswer = 'Smth is wrong';
      break;
  }
  const finalArr = [message, question, rightAnswer.toString()];
  return finalArr;
};

export default calcGame;
