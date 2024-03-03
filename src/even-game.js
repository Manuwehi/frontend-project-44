const isEvenGame = () => {
  const message = 'Answer "yes" if the number is even, otherwise answer "no"';
  const randomNum = Math.floor(Math.random() * 10 + 1);
  const rightAnswer = !(randomNum % 2) ? 'yes' : 'no';
  const finalArr = [message, randomNum, rightAnswer];
  return finalArr;
};

export default isEvenGame;
