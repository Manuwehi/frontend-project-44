import getRandomNum from './getRandomNum.js';

const isEvenGame = () => {
  const message = 'Answer "yes" if the number is even, otherwise answer "no"';
  const randomNum = getRandomNum();
  const rightAnswer = !(randomNum % 2) ? 'yes' : 'no';
  const finalArr = [message, randomNum, rightAnswer];
  return finalArr;
};

export default isEvenGame;
