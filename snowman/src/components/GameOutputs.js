import React from 'react';
import MaskedPhrase from './MaskedPhrase';
import StatusDisplay from './StatusDisplay';

const GameOutputs = ({phrase, guesses, gameState}) => {

  const mistakes = guesses.filter(x => x.status === 'wrong').length;

  return (
    <div className='game-outputs-container'>
      <StatusDisplay gameState={gameState} mistakes={mistakes} />
      <MaskedPhrase gameState={gameState} phrase={phrase} guesses={guesses} />
    </div>
  );
}

export default GameOutputs;