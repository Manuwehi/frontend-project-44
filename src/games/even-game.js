import { getRandomNum, isEven } from '../utilites.js';

export default () => {
  const randomNum = getRandomNum(1, 100);
  const rightAnswer = isEven(randomNum) ? 'yes' : 'no';
  const question = randomNum;
  return [question, rightAnswer];
};
