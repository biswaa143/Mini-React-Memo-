import React from 'react';

import classes from './Button.module.css'

const Button2 = (props) => {
  console.log('Button2 RUNNING');
  return (
    <button
      type={props.type || 'button2'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button2);