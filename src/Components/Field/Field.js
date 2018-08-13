import React from 'react';

const field = (props) => {
  let value = props.val;
  if (props.val === '.'){
    value = ''
  }
  let index = props.ind;
  return (
    <div>
      <input
        type="number"
        name="quantity"
        min="1"
        max="9"
        value={value}
        onChange={(index, event) => props.setFieldValue(index, event.target.value)}


      />
    </div>
  );
};

export default field;