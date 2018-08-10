import React from 'react';

const field = (props) => {
  return (
    <div>
      <input type="number" name="quantity" min="0" max="9" value={props.val ==='.' ? props.val === '' : props.val} onChange={(event) => props.setFieldValue(event.target.value)} />
    </div>
  );
};

export default field;