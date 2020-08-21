import React from 'react';
import Keyboard from './Keyboard';
import Button from './Button';

const GameInputs = ({guesses, onCheckLetter}) => {

  const handleGetLetterClassName = (letter) => {
    const status = guesses && guesses.find(x => x.letter === letter)?.status;
    if (status) {
      return status === 'correct' ? 'back-green' : 'back-red';
    }

    return '';
  }

  const handleLetterClick = (letter) => {
    if (guesses && !guesses.some(x => x.letter === letter)){
      onCheckLetter && onCheckLetter(letter);
    }
  }

  return (
    <div>
      <Keyboard onGetLetterClassName={handleGetLetterClassName} onLetterClick={handleLetterClick} />
      <Button>New game</Button>
    </div>
  );
}

export default GameInputs;