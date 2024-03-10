import { getRandomNum } from '../src/utilites.js';

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
  const finalArr = [num, rightAnswer];
  return finalArr;
};

export default primeGame;
