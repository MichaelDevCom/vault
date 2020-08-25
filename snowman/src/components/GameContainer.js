import React, {useState, useEffect} from 'react';
import GameInputs from './GameInputs';
import GameOutputs from './GameOutputs';
import getPhrase from '../library/phraseLibrary';

const initialGuessesState = [];

const GameContainer = () => {
  const [guessesState, setGuessesState] = useState(initialGuessesState);
  const [gameState, setGameState] = useState('init');
  const [phraseState, setPhraseState] = useState('');

  const newGame = () => {
    setGameState('init');
    setPhraseState('');
    setGuessesState([]);
    getPhrase().then((newPhrase) => {
      setPhraseState(newPhrase);
      setGameState('playing');
    });
  }

  useEffect(newGame, []);

  useEffect(() => {
    if (gameState === 'playing') {
      if (guessesState.filter(x => x.status === 'wrong').length >= 6) {
        setGameState('lose');
      } else if (guessesState.length > 0) {
        const uniqueLetters = phraseState.toUpperCase().split('')
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
    }
  }, [guessesState, gameState, phraseState]);

  const handleCheckLetter = (letter) => {
    if (gameState === 'playing') {
      const upperLetter = letter.toUpperCase();
      
      if (!guessesState.some(x => x.letter === upperLetter)){
        setGuessesState([...guessesState,
          {
            letter: upperLetter,
            status: phraseState.toUpperCase().includes(upperLetter) ?
              'correct' : 
              'wrong'
          }
        ]);
      }
    }
  }

  return (
    <div className="game-container">
      <GameOutputs guesses={guessesState} phrase={phraseState} gameState={gameState}/>
      <GameInputs guesses={guessesState} onCheckLetter={handleCheckLetter}  onNewGame={newGame} />
    </div>
  );
}

export default GameContainer;