import React from 'react';
import PropTypes from 'prop-types';

const AircraftsList = ({
  onClick, options, filter, aircraft,
}) => (
  <div className="left-menu-item-wrapper">
    <div className="left-menu-label">
      AIRCRAFTS
    </div>
    {
      [...options.filter(o => (filter === 'All' ? o : o.category === filter)).sort()].map(o => (
        <button type="button" key={o.id} className={aircraft === o ? 'left-menu-item selected-item' : 'left-menu-item'} onClick={() => onClick(o)} value={o}>
          {aircraft === o ? <i className="fas fa-chevron-right" /> : ''}
          {' '}
          {`${o.manufacturer} - ${o.model}`}
        </button>
      ))
      }
  </div>

);

AircraftsList.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  aircraft: PropTypes.shape({
    model: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    manufacturer: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default AircraftsList;
