import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AircraftSpecs from '../container/AircraftSpecs';
import ScheduleForm from '../container/ScheduleForm';
import { scheduleTestFlight } from '../../actions/actions';

const RightSideBar = ({ aircraft, scheduleTestFlight }) => (
  <>
    <AircraftSpecs aircraft={aircraft} />
    <ScheduleForm onClick={scheduleTestFlight} />
  </>
);

RightSideBar.propTypes = {
  aircraft: PropTypes.shape({
    model: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    manufacturer: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
  scheduleTestFlight: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ aircraft: state.aircraft });

const mapDispatchToProps = dispatch => ({
  scheduleTestFlight: testFLight => {
    dispatch(scheduleTestFlight(testFLight));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RightSideBar);
