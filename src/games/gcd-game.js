import { getRandomNum } from '../utilites.js';

const getGcd = (restNum, startNum) => {
  const gcdNum = startNum === 0 ? restNum : getGcd(startNum, restNum % startNum);
  return gcdNum;
};

export default () => {
  const numbers = [getRandomNum(1, 100), getRandomNum(1, 100)].sort();
  const gameQuestion = `${numbers[0]} ${numbers[1]}`;
  const rightAnswer = getGcd(numbers[0], numbers[1]).toString();
  return [gameQuestion, rightAnswer];
};
