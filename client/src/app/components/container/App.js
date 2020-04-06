import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LeftMenu from '../presentational/LeftMenu';
import Main from '../presentational/Main';
import Login from '../presentational/Login';
import {
  loginUser, changeFilter, selectAircraft, cancelTestFlight, scheduleTestFlight,
  changeFormVisibility, logoutUser, fetchData,
} from '../../actions/actions';

class App extends React.Component {
  
  componentWillMount() {
    const {fetchData} = this.props;
    fetchData('aircrafts');
  }


  render() {
    const {
      user, loginUser, filter, aircrafts, changeFilter, selectAircraft, aircraft, formVisibility,
      cancelTestFlight, testFlights, scheduleTestFlight, logoutUser, changeFormVisibility,
    } = this.props;

    return (
      <>
        {user !== null
          ? (
            <div className="container">
              <LeftMenu
                user={user}
                filter={filter}
                aircraft={aircraft}
                aircrafts={aircrafts}
                selectAircraft={selectAircraft}
                changeFilter={changeFilter}
                cancelTestFlight={cancelTestFlight}
                testFlights={testFlights}
              />
              <Main
                aircraft={aircraft}
                scheduleTestFlight={scheduleTestFlight}
                formVisibility={formVisibility}
                changeFormVisibility={changeFormVisibility}
                user={user}
                logoutUser={logoutUser}
              />
            </div>
          )
          : <Login onClick={loginUser} />}
      </>
    );
  }
}

App.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  loginUser: PropTypes.func.isRequired,
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
  scheduleTestFlight: PropTypes.func.isRequired,
  formVisibility: PropTypes.bool.isRequired,
  changeFormVisibility: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  cancelTestFlight: PropTypes.func.isRequired,
  testFlights: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    aircraftId: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  fetchData: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  loginUser: username => {
    dispatch(loginUser(username));
  },
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
  selectAircraft: aircraft => {
    dispatch(selectAircraft(aircraft));
  },
  cancelTestFlight: testFlight => {
    dispatch(cancelTestFlight(testFlight));
  },
  scheduleTestFlight: testFlight => {
    dispatch(scheduleTestFlight(testFlight));
  },
  changeFormVisibility: () => {
    dispatch(changeFormVisibility());
  },
  logoutUser: () => {
    dispatch(logoutUser());
  },
  fetchData: data => {
    fetchData(data)(dispatch);
  },
});

const mapStateToProps = state => ({
  filter: state.filter,
  aircrafts: state.aircrafts.items,
  user: state.user,
  aircraft: state.aircraft,
  testFlights: state.testFlights.items,
  formVisibility: state.formVisibility,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
