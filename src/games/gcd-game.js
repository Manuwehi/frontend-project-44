import { getRandomNum } from '../utilites.js';

const gcd = (restNum, startNum) => {
  const temp = startNum === 0 ? restNum : gcd(startNum, restNum % startNum);
  return temp;
};

const gcdGame = () => {
  const numArr = [getRandomNum(1, 100), getRandomNum(1, 100)].sort();
  const gameQuestion = `${numArr[0]} ${numArr[1]}`;
  const rightAnswer = gcd(numArr[0], numArr[1]).toString();
  return [gameQuestion, rightAnswer];
};

export default gcdGame;
