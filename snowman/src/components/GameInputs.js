import React from 'react';
import Keyboard from './Keyboard';
import Button from './Button';

const GameInputs = ({guesses, onCheckLetter, onNewGame}) => {

  const handleGetLetterClassName = (letter) => {
    const status = guesses && guesses.find(x => x.letter === letter)?.status;
    if (status) {
      return status === 'correct' ? 'back-green' : 'back-red';
    }

    return '';
  }

  const handleNewGame = () => onNewGame && onNewGame();

  const handleLetterClick = (letter) => {
    if (guesses && !guesses.some(x => x.letter === letter)){
      onCheckLetter && onCheckLetter(letter);
    }
  }

  return (
    <div>
      <Keyboard onGetLetterClassName={handleGetLetterClassName} onLetterClick={handleLetterClick} />
      <Button onClick={handleNewGame}>New game</Button>
    </div>
  );
}

export default GameInputs;