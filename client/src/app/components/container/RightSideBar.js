import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AircraftSpecs from '../presentational/AircraftSpecs';
import ScheduleForm from '../presentational/ScheduleForm';
import Button from '../presentational/Button';
import { scheduleTestFlight, changeFormVisibility } from '../../actions/actions';

const RightSideBar = ({
  aircraft, scheduleTestFlight, formVisibility, changeFormVisibility, user,
}) => {
  const onClick = date => {
    scheduleTestFlight({
      userId: user.id, aircraftId: aircraft.id, date,
    });
    changeFormVisibility();
  };

  return (
    <>
      <AircraftSpecs aircraft={aircraft} />
      {
      formVisibility
        ? <ScheduleForm onClick={onClick} onCancel={changeFormVisibility} />
        : <Button buttonText="Schedule test flight" onClick={changeFormVisibility} />
    }
    </>
  );
};

RightSideBar.propTypes = {
  aircraft: PropTypes.shape({
    model: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    manufacturer: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
  scheduleTestFlight: PropTypes.func.isRequired,
  formVisibility: PropTypes.bool.isRequired,
  changeFormVisibility: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  aircraft: state.aircraft,
  formVisibility: state.formVisibility,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  scheduleTestFlight: testFLight => {
    dispatch(scheduleTestFlight(testFLight));
  },
  changeFormVisibility: () => {
    dispatch(changeFormVisibility());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RightSideBar);
