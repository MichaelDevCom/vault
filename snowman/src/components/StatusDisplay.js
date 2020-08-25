import React from 'react';
import Snowman from './Snowman';

const StatusDisplay = ({gameState, mistakes}) => {
  let statusOutput;
  let classes = 'status-display';

  switch (gameState) {
    case 'win':
      statusOutput = <div className="text-green">You Win!</div>;
      break;
    case 'lose':
      statusOutput = <div className="text-red">You Lose!</div>;
      classes += ' shake';
      break;
    case 'init':
      statusOutput = <div>Setting up new game</div>;
      break;
    default:
      statusOutput = null;
  }

  return (
    <div className={classes}>
      {statusOutput}
      <Snowman mistakes={mistakes} />
    </div>
  );
}

export default StatusDisplay;