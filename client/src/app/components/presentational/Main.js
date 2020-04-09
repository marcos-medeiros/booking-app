import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import AircraftImage from './AircraftImage';
import AircraftSpecs from './AircraftSpecs';
import ScheduleForm from './ScheduleForm';
import Button from './Button';

const Main = ({
  aircraft, formVisibility, changeFormVisibility, user, logoutUser, postData,
}) => {
  const onClick = date => {
    const convertedDate = moment(date);
    const formatedDate = convertedDate.format('MMMM Do YYYY, h:mm a');

    postData('tests', { user_id: user.id, aircraft_id: aircraft.id, date: formatedDate });
    changeFormVisibility();
  };


  return (
    <>
      <main>
        <AircraftImage src={aircraft.image} alt={`${aircraft.manufacturer} - ${aircraft.model}`} />
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
    image: PropTypes.string.isRequired,
  }).isRequired,
  formVisibility: PropTypes.bool.isRequired,
  changeFormVisibility: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  logoutUser: PropTypes.func.isRequired,
  postData: PropTypes.func.isRequired,

};


export default Main;
