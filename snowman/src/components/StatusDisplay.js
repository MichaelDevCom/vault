import React from 'react';

const StatusDisplay = ({gameState, mistakes}) => {
  let statusOutput;

  switch (gameState) {
    case 'win':
      statusOutput = <div className="text-green">You Win!</div>;
      break;
    case 'lose':
      statusOutput = <div className="text-red">You Lose</div>
      break;
    default:
      statusOutput = mistakes;
  }

  return (
    <div className="status-display">
      {statusOutput}
    </div>
  );
}

export default StatusDisplay;