import React, {useState, useEffect} from 'react';
import GameInputs from './GameInputs';
import GameOutputs from './GameOutputs';

const phrase = "Hello World";
const initialGuessesState = [];

const GameContainer = () => {
  const [guessesState, setGuessesState] = useState(initialGuessesState);
  const [gameState, setGameState] = useState('playing');

  useEffect(() => {
    if (guessesState.filter(x => x.status === 'wrong').length >= 6) {
      setGameState('lose');
    } else if (guessesState.length > 0) {
      const uniqueLetters = phrase.toUpperCase().split('')
        .filter((letter, i, arr) => 
          (letter.toLowerCase() !== letter.toUpperCase()) &&
          (arr.indexOf(letter) === i)
        );

      const correctGuesses = guessesState.filter(x => x.status === 'correct');

      if (uniqueLetters.length === correctGuesses.length){
        setGameState('win');
      } else {
        setGameState('playing');
      }
    }
  }, [guessesState]);

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
      <GameOutputs guesses={guessesState} phrase={phrase} gameState={gameState} />
      <GameInputs guesses={guessesState} onCheckLetter={handleCheckLetter} />
    </div>
  );
}

export default GameContainer;