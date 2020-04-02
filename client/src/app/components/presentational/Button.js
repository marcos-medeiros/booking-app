import React from 'react';

const Button = ({ buttonText, onClick }) => (
  <div onClick={onClick}>
    {buttonText}
  </div>
);

export default Button;
