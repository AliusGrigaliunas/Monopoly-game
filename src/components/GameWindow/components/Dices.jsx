import { Button } from '@mui/material';
import React from 'react';

const Dices = ({
 RollDice, DiceNum1, DiceNum2, isActive,
}) => (
  <div className="flex flexDirCol">
    <Button disabled={!isActive} sx={{ width: '200px', height: '200px' }} onClick={() => RollDice()}>
      Roll The Dice
    </Button>
    <div>
      <span className={`dice dice-${DiceNum1} 2rem`} />
      <span className={`dice dice-${DiceNum2}`} />
    </div>
  </div>
  );

export default Dices;
