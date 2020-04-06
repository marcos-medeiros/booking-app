import React from 'react';
import PropTypes from 'prop-types';

const AircraftImage = ({ src, alt }) => (

  <div className="image-container">
    <img className="aircraft-image" src={src} alt={alt} />
  </div>

);

AircraftImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default AircraftImage;
