import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({
  onClick, options, filter,
}) => (
  <div className="filter">
    <div className="left-menu-label">
      FILTER
    </div>
    <div>
      {
        ['All', ...new Set(options)].sort().map(o => (
          <button type="button" key={o} className={filter === o ? 'left-menu-item selected-item' : 'left-menu-item'} onClick={() => onClick(o)} value={o}>
            {filter === o ? <i className="fas fa-chevron-right" /> : ''}
            {' '}
            {o}
          </button>
        ))
        }
    </div>
  </div>
);

Filter.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
