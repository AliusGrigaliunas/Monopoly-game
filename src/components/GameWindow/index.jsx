import React, { useEffect, useState } from 'react';
import { CirclePicker } from 'react-color';
import { Button } from '@mui/material';
import BoardBlocks from './components/BoardBlocks';
import Dices from './components/Dices';

const MonopolyBoard = () => {
  const [diceNumber1, setDiceNumber1] = useState(0);

  const [diceNumber2, setDiceNumber2] = useState(0);

  const [playerPosition, setPlayerPosition] = useState(1);

  const [color, setColor] = useState('#FFFFFF');

  const [showColor, setShowColor] = useState(false);

    const BoardMap = [
    1, 2, 3, 4, 5,
    16, 0, 0, 0, 6,
    15, 0, 0, 0, 7,
    14, 0, 0, 0, 8,
    13, 12, 11, 10, 9,
  ];

  const RollTheDice = () => {
    const RollDiceRNG1 = Math.floor(Math.random() * 6);
    const RollDiceRNG2 = Math.floor(Math.random() * 6);
    if (RollDiceRNG1 >= 1 && RollDiceRNG2 >= 1) {
      setDiceNumber1(RollDiceRNG1);
      setDiceNumber2(RollDiceRNG2);
    } else {
      setDiceNumber1(1);
      setDiceNumber2(1);
    }
  };

  useEffect(() => {
    if (playerPosition + (diceNumber1 + diceNumber2) > 16) {
      setPlayerPosition(playerPosition + (diceNumber1 + diceNumber2) - 16);
    } else {
      setPlayerPosition(playerPosition + (diceNumber1 + diceNumber2));
    }
  }, [diceNumber1, diceNumber2]);

  const ActivateColor = (ChosenColor) => {
    setColor(ChosenColor);
  };

  return (
    <div className="container">
      <div className="Grid-container">
        {
        BoardMap.map((singleBlock) => {
          if (singleBlock >= 1) {
              return (
                <BoardBlocks
                  key={singleBlock}
                  position={singleBlock}
                  stationedPosition={playerPosition}
                  color={showColor && color}
                />
              );
            }
          return (
            <div />
          );
        })
      }
      </div>
      <div className="flex flexDirCol alignItems justConAround">
        <Dices
          RollDice={() => RollTheDice()}
          DiceNum1={diceNumber1}
          DiceNum2={diceNumber2}
          isActive={showColor}
        />
        <CirclePicker color={color} onChange={(NewColor) => ActivateColor(NewColor.hex)} />
        <Button onClick={() => setShowColor(!showColor)}>
          Start Game
        </Button>

      </div>
    </div>
  );
};
  export default MonopolyBoard;
