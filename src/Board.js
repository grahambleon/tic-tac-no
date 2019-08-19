import React from 'react';
import Square from './Square.js'
import './Board.css'

class Board extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      topLeft: null,
      topMiddle: null,
      topRight: null,
      centerLeft: null,
      centerMiddle: null,
      centerRight: null,
      bottomLeft: null,
      bottomMiddle: null,
      bottomRight: null
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    console.log('F')
  }

  render(){
    console.log(this.state);
    return(
      <table className="board">
        <tbody>
          <tr className="top-row">
            <Square handleChange={this.handleChange}/><Square/><Square/>
          </tr>
          <tr className="middle-row">
            <Square/><Square/><Square/>
          </tr>
          <tr className="bottom-row">
            <Square/><Square/><Square/>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Board;
