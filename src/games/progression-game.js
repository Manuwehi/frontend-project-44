import { getRandomNum } from '../utilites.js';

const getProgArr = (baseNum, arrLength) => {
  const progression = [];
  let progressionStep = baseNum;
  while (progression.length < arrLength) {
    progression.push(progressionStep);
    progressionStep += baseNum;
  }
  return progression;
};

export default () => {
  const arrLength = getRandomNum(5, 10); // 5 - мин длина массива, 10 - макс
  const baseNum = getRandomNum(1, 100);
  const randIndex = getRandomNum(0, arrLength);
  const progression = getProgArr(baseNum, arrLength);
  const rightAnswer = progression[randIndex].toString();
  progression.splice(randIndex, 1, '..').toString();
  const question = progression.with(randIndex, '..').join(' ');
  return [question, rightAnswer];
};
