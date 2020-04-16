import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import AircraftImage from '../presentational/AircraftImage';
import AircraftSpecs from '../presentational/AircraftSpecs';
import ScheduleForm from '../presentational/ScheduleForm';
import Button from '../presentational/Button';
import { postData, changeFormVisibility, logoutUser } from '../../actions/actions';

const Main = ({
  aircraft, formVisibility, changeFormVisibility, user, logoutUser, postData, loading,
}) => {
  const onClick = date => {
    const convertedDate = moment(date);
    const formatedDate = convertedDate.format('MMMM Do YYYY, h:mm a');

    postData('tests', { user_id: user.id, aircraft_id: aircraft.id, date: formatedDate });
    changeFormVisibility();
  };


  return (
    <>
      {!loading
        ? (
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
        )
        : null }
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
  loading: PropTypes.bool.isRequired,

};

const mapStateToProps = state => ({
  aircraft: (state.aircraft || state.aircrafts.items[0]),
  formVisibility: state.formVisibility,
  user: state.user,
  loading: state.aircrafts.loading,
});

const mapDispatchToProps = dispatch => ({
  changeFormVisibility: () => {
    dispatch(changeFormVisibility());
  },
  logoutUser: () => {
    dispatch(logoutUser());
  },
  postData: (model, data) => {
    postData(model, data)(dispatch);
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);
