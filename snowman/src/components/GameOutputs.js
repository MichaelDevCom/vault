import React from 'react';
import MaskedPhrase from './MaskedPhrase';
import StatusDisplay from './StatusDisplay';

const GameOutputs = ({phrase, guesses, gameState}) => {

  const mistakes = guesses.filter(x => x.status === 'wrong').length;

  return (
    <div>
      <StatusDisplay gameState={gameState} mistakes={mistakes} />
      <MaskedPhrase phrase={phrase} guesses={guesses} />
    </div>
  );
}

export default GameOutputs;