import React from 'react';
import GameInputs from './GameInputs';
import GameOutputs from './GameOutputs';

const GameContainer = () =>{

  return (
    <div className="game-container">
      <GameOutputs />
      <GameInputs />
    </div>
  );
}

export default GameContainer;