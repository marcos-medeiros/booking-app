import React from 'react';
import PropTypes from 'prop-types';

const AircraftSpecs = ({ aircraft }) => (
  <div className="specs-container">
    <div className="aircraft-model-maker">
      <p>{aircraft.model}</p>
      <p>{aircraft.manufacturer}</p>
    </div>
    <div className="specs">
      <div className="specs-negative">
        <p>
          Category:
          {' '}
          {aircraft.category}
        </p>
      </div>
      <div>
        <p>
          Max Speed:
          {' '}
          {aircraft.speed}
        </p>
      </div>
      <div className="specs-negative">
        <p>
          Fuel Economy:
          {' '}
          {aircraft.fuel}
        </p>
      </div>
      <div>
        <p>
          Max Range:
          {' '}
          {aircraft.range}
        </p>
      </div>
      <div className="specs-negative">
        <p>
          Price:
          {' '}
          {aircraft.price}
        </p>
      </div>
    </div>
  </div>

);

AircraftSpecs.propTypes = {
  aircraft: PropTypes.shape({
    model: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    manufacturer: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    speed: PropTypes.string.isRequired,
    range: PropTypes.string.isRequired,
    fuel: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default AircraftSpecs;