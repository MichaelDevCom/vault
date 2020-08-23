import React from 'react';
import MaskedPhrase from './MaskedPhrase';
import StatusDisplay from './StatusDisplay';

const GameOutputs = ({phrase, guesses}) => {

  return (
    <div>
      <StatusDisplay />
      <MaskedPhrase phrase={phrase} guesses={guesses} />
    </div>
  );
}

export default GameOutputs;