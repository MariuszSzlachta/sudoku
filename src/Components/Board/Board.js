import React from 'react';
import Field from '../Field/FieldContainer';


const Board = (props) => {
  const board = props.board.split('');
  return (
    board.map((field, index) => <Field key={index} val={field} />)
  );
};
export default Board;