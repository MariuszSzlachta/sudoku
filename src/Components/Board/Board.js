import React from 'react';
import Field from '../Field/FieldContainer';
import './board.css';


const Board = (props) => {
  const board = [...props.board]
  let renderedBoard = board.map((field, index) => <Field key={index} ind={index} val={field} />)
  return (
    <div className="board">
      {renderedBoard}
    </div>
  );
};
export default Board;