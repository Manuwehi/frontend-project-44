import { getRandomNum } from '../utilites.js';

const isRandomNumPrime = (num) => {
  let answer = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      answer = false;
    }
  }
  return answer;
};

const primeGame = () => {
  const randomNum = getRandomNum(1, 100);
  const rightAnswer = isRandomNumPrime(randomNum) ? 'yes' : 'no';
  const question = randomNum;
  return [question, rightAnswer];
};

export default primeGame;
