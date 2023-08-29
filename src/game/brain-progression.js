import {
  congratsMessage, getGameRounds, passMessage, questionMessage, randomNumber, stopMessage,
} from '../index.js';
import getName from '../cli.js';

const generateProgression = (lengthOfProgression, correctAnswer) => {
  const stepValue = randomNumber(1, 10);
  const positionOfNumber = randomNumber(1, lengthOfProgression);
  let expression = '';
  for (let i = 1; i < positionOfNumber; i += 1) {
    expression = `${expression}${correctAnswer - stepValue * (positionOfNumber - i)} `;
  }
  expression = `${expression}.. `;
  for (let i = 0; i < lengthOfProgression - positionOfNumber; i += 1) {
    expression = `${expression}${correctAnswer + stepValue * (i + 1)} `;
  }
  return expression;
};

const progressionGame = () => {
  const userName = getName();
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i < getGameRounds()) {
    const correctAnswer = randomNumber(-100, 100);
    const userAnswer = questionMessage(generateProgression(10, correctAnswer));
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

export default progressionGame;
