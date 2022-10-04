import React from 'react';

const BoardBlocks = ({ position, stationedPosition, color }) => {
    let test = 'white';

    if (position === stationedPosition) {
       test = color;
    }

    return (
      <div className="blocks" style={{ backgroundColor: test }} />
    );
};
    export default BoardBlocks;
