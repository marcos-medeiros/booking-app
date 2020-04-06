import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonText, onClick, styleClass }) => (
  /*eslint-disable */
  <button className={styleClass} onClick={onClick}>
  {/* eslint-enable */}
<p>{buttonText}</p>
  </button>
);
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  styleClass: PropTypes.string.isRequired,
};
export default Button;
