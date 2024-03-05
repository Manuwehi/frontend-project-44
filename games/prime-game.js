import getRandomNum from '../src/getRandomNum.js';

const primeGame = () => {
  const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const num = getRandomNum();
  let rightAnswer = true;
  for (let i = 2; i < Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0) {
      rightAnswer = false;
    }
  }
  const finalAnswer = rightAnswer ? 'yes' : 'no';
  const finalArr = [message, num, finalAnswer];
  return finalArr;
};

export default primeGame;
