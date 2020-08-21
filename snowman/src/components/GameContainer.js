import React, {useState} from 'react';
import GameInputs from './GameInputs';
import GameOutputs from './GameOutputs';

const phrase = "Hello World";
const initialGuessesState = [];

const GameContainer = () => {
  const [guessesState, setGuessesState] = useState(initialGuessesState);

  const handleCheckLetter = (letter) => {
    const upperLetter = letter.toUpperCase();
    
    if (!guessesState.some(x => x.letter === upperLetter)){
      setGuessesState([...guessesState,
        {
          letter: upperLetter,
          status: phrase.toUpperCase().includes(upperLetter) ?
            'correct' : 
            'wrong'
        }
      ]);
    }
  }

  return (
    <div className="game-container">
      <GameOutputs />
      <GameInputs guesses={guessesState} onCheckLetter={handleCheckLetter} />
    </div>
  );
}

export default GameContainer;