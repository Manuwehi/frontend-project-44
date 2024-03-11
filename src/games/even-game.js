import { getRandomNum, isRandomEven } from '../utilites.js';

const isEvenGame = () => {
  const randomNum = getRandomNum(1, 100);
  const rightAnswer = isRandomEven(randomNum) ? 'yes' : 'no';
  const question = randomNum;
  const finalArr = [question, rightAnswer];
  return finalArr;
};

export default isEvenGame;
