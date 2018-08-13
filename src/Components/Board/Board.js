import React from 'react';
import Field from '../Field/FieldContainer';


const Board = (props) => {
  const board = [...props.board]
  return (
    board.map((field, index) => <Field key={index} ind={index} val={field} />)
  );
};
export default Board;