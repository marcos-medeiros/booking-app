import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({
  onChange, options,
}) => (
  <div>
    <h3>
      Filter by category:
    </h3>
    <select onChange={e => onChange(e.target.value)}>
      {
      ['All', ...new Set(options)].sort().map(o => (
        <option key={o} value={o}>{o}</option>))
      }
    </select>
  </div>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Filter;
