import React from 'react';
import PropTypes from 'prop-types';

const AircraftImage = ({ src, alt }) => (
  <img src={src} alt={alt} />
);

AircraftImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default AircraftImage;
