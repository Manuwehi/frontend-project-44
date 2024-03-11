import { getRandomNum } from '../utilites.js';

const getSortedNumArr = () => {
  const tempArr = [];
  while (tempArr.length < 2) {
    tempArr.push(getRandomNum(1, 100));
  }
  return tempArr.sort();
};

const gcd = (restNum, startNum) => {
  const temp = startNum === 0 ? restNum : gcd(startNum, restNum % startNum);
  return temp;
};

const gcdGame = () => {
  const numArr = getSortedNumArr();
  const gameQuestion = `${numArr[0]} ${numArr[1]}`;
  const rightAnswer = gcd(numArr[0], numArr[1]);
  const finalArr = [gameQuestion, rightAnswer.toString()]; // выводим для индекса
  return finalArr;
};

export default gcdGame;
