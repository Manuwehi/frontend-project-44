const getRandomNum = (min = 1, max = 100) => {
  const num = Math.floor(Math.random() * max + min);
  return num;
};

const isRandomEven = (num) => num % 2 === 0;

export { getRandomNum, isRandomEven };
