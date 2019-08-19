import React from 'react';
import './Square.css'

const Square = (props) => {
console.log(props);

// const handleClick = () => {
//   props.handleChange(props.location)
// }

const {handleChange} = props;
console.log(handleChange);

  return(
    <td className="square" onClick={handleChange}>
      &nbsp;
    </td>
  )
}

export default Square;
