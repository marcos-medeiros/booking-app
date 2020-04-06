import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


const MyTestFlights = ({ testFlights, aircrafts, onClick }) => (
  /*eslint-disable */
  <div className='test-flight-wrapper'>
    <div className="left-menu-label">
      MY TEST FLIGHTS
    </div>
    <div className='item-container'>
      {
        testFlights.map(t => (
          <>
            <div className='test-flight' key={`${t.id} ${t.aircraftId} ${t.userId}`}>
              {aircrafts.filter(a => a.id === t.aircraftId).map(a => (
                <div className='test-flight-info' key={`${t.id} - ${a.id}`}>
                  <p className='tfi-1'>{`${a.model} - ${a.manufacturer} `}</p>
                  <p className='tfi-2'>{`${t.date}`}</p>  
                </div>
              ))} 
              <Button buttonText='X' styleClass='btn-cancel' onClick={() => onClick(t)} />
            </div>
            <hr />
          </>
        ))
      }
    </div>
  </div>
  /* eslint-enable */
);

MyTestFlights.propTypes = {
  testFlights: PropTypes.arrayOf(PropTypes.shape).isRequired,
  aircrafts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MyTestFlights;
