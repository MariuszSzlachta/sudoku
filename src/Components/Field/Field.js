import React from 'react';

const field = (props) => {
  let value = props.val;
  if (props.val === '.'){
    value = ''
  }
  return (
    <div>
      <input
        type="number"
        name="quantity"
        min="1"
        max="9"
        value={value}
        onChange={(event) => props.setFieldValue(props.ind, event.target.value)}
      />
    </div>
  );
};

export default field;