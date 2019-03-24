import React from 'react';

const MyButton = (props) => {
  return(
    <button event={props.event} className={props.className}>{props.text}</button>
  );
}

export default Button;

