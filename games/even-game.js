import { getRandomNum, isRandomEven } from '../src/utilites.js';

const isEvenGame = () => {
  const randomNum = getRandomNum(1, 100);
  const rightAnswer = isRandomEven(randomNum) ? 'yes' : 'no';
  const finalArr = [randomNum, rightAnswer];
  return finalArr;
};

export default isEvenGame;
