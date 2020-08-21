import React from 'react';
import Button from './Button';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const Keyboard = ({onLetterClick, onGetLetterClassName}) => {

  const handleLetterClick = (letter) => onLetterClick && onLetterClick(letter);

  const getLetterClassName = (letter) => onGetLetterClassName ? onGetLetterClassName(letter) : "";

  const lettersMap = letters.map((letter) => {
    return (
      <Button key={letter} className={getLetterClassName(letter)} onClick={() => handleLetterClick(letter)}>
        {letter}
      </Button>
    );
  });

  return (
    <div className="keyboard">
      {lettersMap}
    </div>
  );
}

export default Keyboard;