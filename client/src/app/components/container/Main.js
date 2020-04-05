import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AircraftImage from '../presentational/AircraftImage';
import ScheduledTestFlights from '../presentational/ScheduledTestFlights';
import { cancelTestFlight } from '../../actions/actions';

const Main = ({
  aircraft, main, testFlights, user, aircrafts, cancelTestFlight,
}) => (
  <main>
    {
      main
        ? <AircraftImage src={aircraft.imgSrc} alt={`${aircraft.manufacturer} - ${aircraft.model}`} />
        : (
          <ScheduledTestFlights
            testFlights={testFlights.filter(t => t.userId === user.id)}
            aircrafts={aircrafts}
            onClick={cancelTestFlight}
          />
        )
    }
  </main>
);

Main.propTypes = {
  aircraft: PropTypes.shape({
    model: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    manufacturer: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
  aircrafts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  main: PropTypes.bool.isRequired,
  testFlights: PropTypes.arrayOf(PropTypes.shape).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  cancelTestFlight: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  aircraft: state.aircraft,
  main: state.main,
  aircrafts: state.aircrafts,
  user: state.user,
  testFlights: state.testFlights,
});

const mapDispatchToProps = dispatch => ({
  cancelTestFlight: testFlight => {
    dispatch(cancelTestFlight(testFlight));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);
