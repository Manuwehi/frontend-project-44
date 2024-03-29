#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from './cli.js';

export default (game, message) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  let roundsCount = 3;
  console.log(message);
  while (roundsCount > 0) {
    const [question, rightAnswer] = game();
    const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      roundsCount -= 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
