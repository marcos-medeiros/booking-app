import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonText, onClick }) => (
  /*eslint-disable */
  <div onClick={onClick}>
  {/* eslint-enable */}
    {buttonText}
  </div>
);
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
