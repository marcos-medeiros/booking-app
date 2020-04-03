import React from 'react';
import PropTypes from 'prop-types';

const AircraftSpecs = ({ aircraft }) => (
  <div>
    <h3>Specs</h3>
    <ul>
      <li>
        Model:
        {aircraft.model}
      </li>
      <li>
        Manufacturer:
        {aircraft.manufacturer}
      </li>
      <li>
        Category:
        {aircraft.category}
      </li>
      <li>
        Max Speed:
        {aircraft.speed}
      </li>
      <li>
        Fuel Economy:
        {aircraft.fuel}
      </li>
      <li>
        Max Range:
        {aircraft.range}
      </li>
      <li>
        Price:
        {aircraft.price}
      </li>
    </ul>
  </div>
);

AircraftSpecs.propTypes = {
  aircraft: PropTypes.shape({
    model: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    manufacturer: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    speed: PropTypes.string.isRequired,
    range: PropTypes.string.isRequired,
    fuel: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default AircraftSpecs;
