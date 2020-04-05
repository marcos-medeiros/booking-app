import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import AircraftSpecs from '../presentational/AircraftSpecs';
import ScheduleForm from '../presentational/ScheduleForm';
import Button from '../presentational/Button';
import { scheduleTestFlight, changeFormVisibility } from '../../actions/actions';

const RightSideBar = ({
  aircraft, scheduleTestFlight, formVisibility, changeFormVisibility, user, main,
}) => {
  const onClick = date => {
    const convertedDate = moment(date);
    const formatedDate = convertedDate.format('MMMM Do YYYY, h:mm a');
    scheduleTestFlight({
      userId: user.id, aircraftId: aircraft.id, date: formatedDate,
    });
    changeFormVisibility();
  };

  return (
    <aside>
      {main ? (
        <>
          <AircraftSpecs aircraft={aircraft} />
          {
      formVisibility
        ? <ScheduleForm onClick={onClick} onCancel={changeFormVisibility} />
        : <Button buttonText="Schedule test flight" onClick={changeFormVisibility} />
    }
        </>
      ) : null}
    </aside>
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
  main: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  aircraft: state.aircraft,
  formVisibility: state.formVisibility,
  user: state.user,
  main: state.main,
});

const mapDispatchToProps = dispatch => ({
  scheduleTestFlight: testFlight => {
    dispatch(scheduleTestFlight(testFlight));
  },
  changeFormVisibility: () => {
    dispatch(changeFormVisibility());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RightSideBar);
