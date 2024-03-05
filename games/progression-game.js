import getRandomNum from '../src/getRandomNum.js';

const progGame = () => {
  const message = 'What number is missing in the progression?';
  const arrLength = Math.floor(Math.random() * 10 + 5); // 5 - мин длина массива, 10 - макс
  let numArr = [];
  const num = getRandomNum();
  let temp = num;
  const randIndex = Math.floor(Math.random() * arrLength);
  while (numArr.length < arrLength) {
    numArr = numArr.concat(temp);
    temp += num;
  }
  const fakeArr = numArr;
  const rightAnswer = fakeArr.splice(randIndex, 1, '..').toString();
  const finalArr = [message, numArr, rightAnswer];
  return finalArr;
};

export default progGame;
