import React, { useEffect, useState } from 'react';
import BoardBlocks from './components/BoardBlocks';

const MonopolyBoard = () => {
  const [diceNumber1, setDiceNumber1] = useState(0);
  const [diceNumber2, setDiceNumber2] = useState(0);
  const [playerPosition, setPlayerPosition] = useState(1);

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

  return (
    <div className="container">
      {
        BoardMap.map((singleBlock) => {
          if (singleBlock >= 1) {
              return (
                <BoardBlocks
                  key={singleBlock}
                  position={singleBlock}
                  stationedPosition={playerPosition}
                />
              );
            }
          return (
            <div />
          );
        })
      }
      <div>
        <button onClick={() => RollTheDice()}>
          Roll The Dice
        </button>
        <span className={`dice dice-${diceNumber1}`} />
        <span className={`dice dice-${diceNumber2}`} />
      </div>
    </div>
  );
};
  export default MonopolyBoard;
