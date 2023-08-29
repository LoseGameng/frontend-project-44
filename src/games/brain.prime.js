import {
  congratsMessage, getGameRounds, passMessage, questionMessage, randomNumber, stopMessage,
} from '../index.js';
import getName from '../cli.js';

const isPrime = (number) => {
  let i = 2;
  if (number < 2) {
    return false;
  }
  while (i <= Math.sqrt(number)) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const primeGame = () => {
  const userName = getName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  while (i < getGameRounds()) {
    const number = randomNumber(0, 100);
    const userAnswer = questionMessage(number);
    let correctAnswer = 'no';
    if (isPrime(number)) {
      correctAnswer = 'yes';
    }
    if (userAnswer === correctAnswer) {
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

export default primeGame;
