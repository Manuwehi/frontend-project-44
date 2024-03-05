#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const baseEngine = (game) => {
  const userName = getUserName();
  let count = 0;
  const winningCount = 3;
  while (count < 3) {
    const [message, question, rightAnswer] = game();
    if (count === 0) {
      console.log(message);
    }
    const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  if (count === winningCount) {
    return console.log(`Congratulations, ${userName}!`);
  }
  return console.log('Something is wrong');
};

export default baseEngine;
