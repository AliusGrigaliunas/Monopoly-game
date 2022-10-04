import React from 'react';

const BoardBlocks = ({ position, stationedPosition }) => {
    let test = 'white';

    if (position === stationedPosition) {
       test = 'lightblue';
    }

    return (
      <div className="blocks" style={{ backgroundColor: test }} />
    );
};
    export default BoardBlocks;
