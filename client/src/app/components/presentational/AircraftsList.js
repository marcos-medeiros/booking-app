import React from 'react';
import PropTypes from 'prop-types';

const AircraftsList = ({ onClick, options, filter }) => (
  <div>
    <h3>
      Aircrafts:
    </h3>
    <ul>
      {
          /*eslint-disable */
                [...options.filter(o => filter === 'All' ? o : o.category === filter).sort()].map(o => <li key={o.id} onClick={() => onClick(o)}>{o.manufacturer + ' - ' + o.model}</li>)
        /* eslint-enable */
        }
    </ul>
  </div>

);

AircraftsList.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};

export default AircraftsList;
