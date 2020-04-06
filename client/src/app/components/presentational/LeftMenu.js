import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';
import AircraftsList from './AircraftsList';
import MyTestFlights from './MyTestFlights';

const LeftMenu = ({
  filter, aircrafts, changeFilter, selectAircraft, aircraft,
  cancelTestFlight, testFlights, user,
}) => {
  const handleClick = filter => {
    changeFilter(filter);
    const categoryAircrafts = [...aircrafts.filter(a => (filter === 'All' ? a : a.category === filter)).sort()];
    selectAircraft(categoryAircrafts[0]);
  };


  return (
    <aside className="aside-left">
      <Filter
        onClick={handleClick}
        filter={filter}
        options={aircrafts.map(a => a.category)}
      />
      <AircraftsList
        onClick={selectAircraft}
        options={aircrafts}
        filter={filter}
        aircraft={aircraft}
      />
      {testFlights.filter(t => t.userId === user.id).length > 1
        ? (
          <MyTestFlights
            testFlights={testFlights.filter(t => t.userId === user.id)}
            aircrafts={aircrafts}
            onClick={cancelTestFlight}
          />
        )
        : null}
    </aside>
  );
};

LeftMenu.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  selectAircraft: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  aircrafts: PropTypes.arrayOf(PropTypes.object).isRequired,
  aircraft: PropTypes.shape({
    model: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    manufacturer: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
  cancelTestFlight: PropTypes.func.isRequired,
  testFlights: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    aircraftId: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default LeftMenu;
