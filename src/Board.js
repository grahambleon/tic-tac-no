import React from 'react';
import Square from './Square.js'

const Board = () => {
  return(
    <>
      <div className="top-row">
        <Square/><Square/><Square/>
      </div>
      <div className="middle-row">
        <Square/><Square/><Square/>
      </div>
      <div className="bottom-row">
        <Square/><Square/><Square/>
      </div>
    </>
  )
}

export default Board;
