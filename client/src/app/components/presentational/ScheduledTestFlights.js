import React from 'react';
import PropTypes from 'prop-types';


const ScheduledTestFlights = ({ testFlights, aircrafts, onClick }) => (
  /*eslint-disable */
  <div>
    {
      testFlights.map(t => (
        <div key={t.id}>
          {aircrafts.filter(a => a.id === t.aircraftId).map(a => (
            <div key={`${t.id} - ${a.id}`}>
              <h3>{a.model}</h3>
              <h4>{a.manufacturer}</h4>
            </div>
          ))}
          <p>{`${t.date} ${t.time}`}</p>   
          <div onClick={() => onClick(t)}>
            Cancel
          </div>
        </div>
      ))
    }
  </div>
  /* eslint-enable */
);

ScheduledTestFlights.propTypes = {
  testFlights: PropTypes.arrayOf(PropTypes.shape).isRequired,
  aircrafts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ScheduledTestFlights;
