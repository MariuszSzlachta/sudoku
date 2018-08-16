import React from 'react';

const field = (props) => {
  let value = props.val;
  let isDisabled = null;
  let initialBoard = props.initialBoard.split('');
  console.log(initialBoard.indexOf(props.ind -1 ))

  if (props.val !== '.' && initialBoard.indexOf(props.ind) !== '.') {
    isDisabled = 'disabled'
  }

  if (props.val === '.'){
    value = ''
  }



  return (
    <div className="field">
      <input
        type="number"
        name="quantity"
        min="1"
        max="9"
        value={value}
        onChange={(event) => props.setFieldValue(props.ind, event.target.value)}
        disabled={isDisabled}
      />
    </div>
  );
};

export default field;