import React from 'react';

const MaskedPhrase = ({gameState, phrase, guesses}) => {
  let output;
  
  if (gameState === 'lose'){
    output = phrase;
  } else {
    output = phrase && guesses && phrase.split('').map((letter) => {
      if (letter.toLowerCase() !== letter.toUpperCase()) {
        return guesses.some(x => x.letter === letter.toUpperCase()) ?
          letter :
          '_';
      }
      else {
        return letter;
      }
    });
  }

  let classes = 'masked-phrase';
    if (phrase.length > 20) {
      classes += ' phrase-long';
    }

    if (gameState === 'lose'){
      classes += ' text-red';
    }
    else if (gameState === 'win'){
      classes += ' text-green';
    }

  return (
    <div className={classes}>{output}</div>
  );
}

export default MaskedPhrase;