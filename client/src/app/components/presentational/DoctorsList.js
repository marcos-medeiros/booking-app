import React from 'react';
import PropTypes from 'prop-types';

const DoctorsList = ({ onClick, options, filter }) => (
  <div>
    <h3>
      Doctors:
    </h3>
    <ul>
      {
          /*eslint-disable */
                [...options.filter(o => filter === 'All' ? o : o.speciality === filter).sort()].map(o => <li key={o.id} onClick={onClick(o)}>{o.name}</li>)
        /* eslint-enable */
        }
    </ul>
  </div>

);

DoctorsList.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};

export default DoctorsList;
