import readlineSync from 'readline-sync';
import randomNumIsEven from './randomNum.js';

const isEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} '\nAnswer "yes" if the number is even, otherwise answer "no"`);
  let count = 0;
  const winningCount = 3;
  while (count < winningCount) {
    const randomNum = Math.floor(Math.random() * 10 + 1);
    const userAnswer = readlineSync.question(`Question: ${randomNum}  `);
    if ((userAnswer === 'yes' && randomNumIsEven(randomNum) === true) || (userAnswer === 'no' && randomNumIsEven(randomNum) === false)) {
      console.log('Correct!');
      count += 1;
    } else if (userAnswer === 'yes' && randomNumIsEven(randomNum) === false) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName} `);
      count = 0;
    } else if (userAnswer === 'no' && randomNumIsEven(randomNum) === true) {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName} `);
      count = 0;
    } else {
      count = 3;
      return console.log('Please, use only "yes" or "no"\nTo start new one use "brain-even"');
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default isEvenGame;
