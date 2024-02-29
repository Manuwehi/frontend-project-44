import readlineSync from 'readline-sync';

const calcGame = () => {
  const textQa = [];
  const operandArr = ['+', '-', '*'];
  const randomOperand = operandArr[Math.floor(Math.random() * (operandArr.length-1))];
  const leftRandomNum = Math.floor(Math.random() * 100 + 1);
  const rightRandomNum = Math.floor(Math.random() * 100 + 1);
  let count = 0;
  const maxCount = 3;
  while (count < maxCount) {
    const rightAnswer = leftRandomNum randomOperand rightRandomNum;
    const userAnswer = readlineSync.question(`Question: ${leftRandomNum} ${randomOperand} ${rightRandomNum} \nYour answer: `);
    textQa.push()
    count +=1;
  }
};

export default calcGame;
