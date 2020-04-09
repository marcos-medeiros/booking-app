import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LeftMenu from '../presentational/LeftMenu';
import Main from '../presentational/Main';
import Login from '../presentational/Login';
import {
  loginUser, changeFilter, selectAircraft, changeFormVisibility, logoutUser,
  getData, postData, deleteData,
} from '../../actions/actions';

class App extends React.Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    const { getData } = this.props;
    getData('aircrafts');
    getData('users');
    getData('tests');
  }

  render() {
    const {
      user, users, loginUser, filter, aircrafts, changeFilter, selectAircraft, aircraft,
      formVisibility, testFlights, logoutUser, changeFormVisibility, postData, deleteData,
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
                cancelTestFlight={deleteData}
                testFlights={testFlights}
              />
              <Main
                aircraft={aircraft || aircrafts[0]}
                formVisibility={formVisibility}
                changeFormVisibility={changeFormVisibility}
                user={user}
                logoutUser={logoutUser}
                postData={postData}
              />
            </div>
          )
          : <Login onClick={loginUser} users={users} postData={postData} />}
      </>
    );
  }
}

App.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  loginUser: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  selectAircraft: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  aircrafts: PropTypes.arrayOf(PropTypes.shape({
    model: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    manufacturer: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  aircraft: PropTypes.shape({
    model: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    manufacturer: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  formVisibility: PropTypes.bool.isRequired,
  changeFormVisibility: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  testFlights: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
    aircraft_id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  getData: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  postData: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,
};

App.defaultProps = {
  user: null,
  aircraft: null,
};

const mapDispatchToProps = dispatch => ({
  loginUser: (username, users) => {
    dispatch(loginUser(username, users));
  },
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
  selectAircraft: aircraft => {
    dispatch(selectAircraft(aircraft));
  },
  changeFormVisibility: () => {
    dispatch(changeFormVisibility());
  },
  logoutUser: () => {
    dispatch(logoutUser());
  },
  getData: model => {
    getData(model)(dispatch);
  },
  postData: (model, data) => {
    postData(model, data)(dispatch);
  },
  deleteData: (model, id) => {
    deleteData(model, id)(dispatch);
  },
});

const mapStateToProps = state => ({
  filter: state.filter,
  aircrafts: state.aircrafts.items,
  user: state.user,
  aircraft: state.aircraft,
  testFlights: state.testFlights.items,
  formVisibility: state.formVisibility,
  users: state.users.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
