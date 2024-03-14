import { getRandomNum } from '../utilites.js';

const isNumPrime = (num) => {
  let answer = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      answer = false;
    }
  }
  return answer;
};

const primeGame = () => {
  const num = getRandomNum(1, 100);
  const rightAnswer = isNumPrime(num) ? 'yes' : 'no';
  const question = num;
  return [question, rightAnswer];
};

export default primeGame;
