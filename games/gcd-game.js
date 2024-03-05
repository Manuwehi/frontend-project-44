import getRandomNum from '../src/getRandomNum.js';

const gcdGame = () => {
  const firstNum = getRandomNum();
  const secNum = getRandomNum();
  const greatestNum = firstNum >= secNum ? firstNum : secNum; // сортируем для удобства
  const smallerNum = firstNum <= secNum ? firstNum : secNum;
  const gameQuestion = `${greatestNum} ${smallerNum}`;
  const message = 'Find the greatest common divisor of given numbers.';
  const gcd = (restNum, startNum) => {
    let temp = 0;
    if (startNum === 0) {
      temp = restNum;
    } else {
      temp = gcd(startNum, restNum % startNum);
    }
    return temp;
  };
  const rightAnswer = gcd(greatestNum, smallerNum);
  const finalArr = [message, gameQuestion, rightAnswer.toString()]; // выводим для индекса
  return finalArr;
};

export default gcdGame;
