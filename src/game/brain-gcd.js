import {
  congratsMessage, getGameRounds, passMessage, questionMessage, randomNumber, stopMessage,
} from '../index.js';
import getName from '../cli.js';

const getGcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return getGcd(secondNumber, firstNumber % secondNumber);
};

const gcdGame = () => {
  const userName = getName();
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < getGameRounds()) {
    const firstNumber = randomNumber(0, 100);
    const secondNumber = randomNumber(0, 100);
    const correctAnswer = getGcd(firstNumber, secondNumber);
    const expression = `${firstNumber} ${secondNumber}`;
    const userAnswer = questionMessage(expression);
    if (String(correctAnswer) === userAnswer) {
      passMessage();
      i += 1;
    } else {
      stopMessage(userName, correctAnswer, userAnswer);
      break;
    }
  }
  if (i === getGameRounds()) {
    congratsMessage(userName);
  }
};

export default gcdGame;
