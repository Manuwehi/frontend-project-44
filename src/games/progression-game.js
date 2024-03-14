import { getRandomNum } from '../utilites.js';

const getProgArr = (num, arrLength) => {
  const numArr = [];
  let temp = num;
  while (numArr.length < arrLength) {
    numArr.push(temp);
    temp += num;
  }
  return numArr;
};

const progGame = () => {
  const arrLength = getRandomNum(5, 10); // 5 - мин длина массива, 10 - макс
  const num = getRandomNum(1, 100);
  const randIndex = getRandomNum(0, arrLength);
  const numArr = getProgArr(num, arrLength);
  const rightAnswer = numArr[randIndex].toString();
  numArr.splice(randIndex, 1, '..').toString();
  const question = numArr.with(randIndex, '..').join(' ');
  return [question, rightAnswer];
};

export default progGame;
