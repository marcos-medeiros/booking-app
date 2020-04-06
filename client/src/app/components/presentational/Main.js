import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import AircraftImage from './AircraftImage';
import AircraftSpecs from './AircraftSpecs';
import ScheduleForm from './ScheduleForm';
import Button from './Button';

const Main = ({
  aircraft, scheduleTestFlight, formVisibility, changeFormVisibility, user, logoutUser,
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
    <>
      <main>
        <AircraftImage src={aircraft.imgSrc} alt={`${aircraft.manufacturer} - ${aircraft.model}`} />
        {
          formVisibility
            ? <ScheduleForm onClick={onClick} onCancel={changeFormVisibility} />
            : <Button styleClass="btn-schedule" buttonText="Schedule test flight" onClick={changeFormVisibility} />
        }
      </main>
      <aside className="aside-right">
        <AircraftSpecs aircraft={aircraft} />
        <Button buttonText="Log Out" styleClass="btn-logout" onClick={logoutUser} />
      </aside>
    </>
  );
};

Main.propTypes = {
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
  logoutUser: PropTypes.func.isRequired,

};


export default Main;
