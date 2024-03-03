const gcdGame = () => {
  const firstNum = Math.floor(Math.random() * 100 + 1);
  const secNum = Math.floor(Math.random() * 100 + 1);
  const greatestNum = firstNum >= secNum ? firstNum : secNum; // сортируем для удобства
  const smallerNum = firstNum <= secNum ? firstNum : secNum;
  const restArr = []; // сохраняем остаток
  let rightAnswer = 0;
  let restNum = greatestNum % smallerNum;
  let startNum = smallerNum;
  const gameQuestion = `${greatestNum} ${smallerNum}`;
  const message = 'Find the greatest common divisor of given numbers.';
  if (greatestNum % smallerNum === 0) {
    rightAnswer = smallerNum.toString();
  }
  while (restNum !== 0) {
    const temp = restNum; // сохраняем остаток для получения НОД (НОД - последний остаток до % = 0)
    restNum = startNum % restNum;
    startNum = temp;
    restArr.push(startNum); // сохраняем все остатки для выбора последнего
  }
  if (greatestNum % smallerNum !== 0) {
    rightAnswer = restArr[restArr.length - 1].toString();
  }
  const finalArr = [message, gameQuestion, rightAnswer]; // выводим для индекса
  return finalArr;
};

gcdGame();
export default gcdGame;
