import React from 'react';
import Square from './Square.js'
import './Board.css'

const Board = () => {
  return(
    <table className="board">
      <tr className="row">
        <Square/><Square/><Square/>
      </tr>
      <tr className="row">
        <Square/><Square/><Square/>
      </tr>
      <tr className="row">
        <Square/><Square/><Square/>
      </tr>
    </table>
  )
}

export default Board;
