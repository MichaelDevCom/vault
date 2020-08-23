import React from 'react';

const MaskedPhrase = ({phrase, guesses}) => {

  const output = phrase && guesses && phrase.split('').map((letter) => {
    if (letter.toLowerCase() !== letter.toUpperCase()) {
      return guesses.some(x => x.letter === letter.toUpperCase()) ?
        letter :
        '_';
    }
    else {
      return letter;
    }
  });

  return (
    <div className="masked-phrase">{output}</div>
  );
}

export default MaskedPhrase;