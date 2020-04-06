import ActionTypes from './types';

const changeFilter = filter => ({
  type: ActionTypes.CHANGE_FILTER,
  filter,
});

const changeFormVisibility = () => ({
  type: ActionTypes.CHANGE_FORM_VISIBILITY,
});

const selectAircraft = aircraft => ({
  type: ActionTypes.SELECT_AIRCRAFT,
  aircraft,
});

const scheduleTestFlight = testFlight => ({
  type: ActionTypes.SCHEDULE_TEST_FLIGHT,
  testFlight,
});

const cancelTestFlight = testFlight => ({
  type: ActionTypes.CANCEL_TEST_FLIGHT,
  testFlight,
});

const loginUser = username => ({
  type: ActionTypes.LOGIN_USER,
  username,
});

const logoutUser = () => ({ type: ActionTypes.LOGOUT_USER });

// Handle HTTP errors since fetch won't.
const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

const fetchDataBegin = data => {
  switch (data) {
    case 'aircrafts':
      return ({
        type: ActionTypes.FETCH_AIRCRAFTS_BEGIN,
      });
    case 'users':
      return ({
        type: ActionTypes.FETCH_USERS_BEGIN,
      });
    case 'testFlights':
      return ({
        type: ActionTypes.FETCH_TESTFLIGHTS_BEGIN,
      });
    default:
      return data;
  }
};

const fetchDataSuccess = (data, res) => {
  switch (data) {
    case 'aircrafts':
      return ({
        type: ActionTypes.FETCH_AIRCRAFTS_SUCCESS,
        payload: { res },
      });
    case 'users':
      return ({
        type: ActionTypes.FETCH_USERS_SUCCESS,
        payload: { res },
      });
    case 'testFlights':
      return ({
        type: ActionTypes.FETCH_TESTFLIGHTS_SUCCESS,
        payload: { res },
      });
    default:
      return data;
  }
};

const fetchDataFailure = (data, error) => {
  switch (data) {
    case 'aircrafts':
      return ({
        type: ActionTypes.FETCH_AIRCRAFTS_FAILURE,
        payload: { error },
      });
    case 'users':
      return ({
        type: ActionTypes.FETCH_USERS_FAILURE,
        payload: { error },
      });
    case 'testFlights':
      return ({
        type: ActionTypes.FETCH_TESTFLIGHTS_FAILURE,
        payload: { error },
      });
    default:
      return data;
  }
};

const fetchData = data => dispatch => {
  dispatch(fetchDataBegin(data));
  return fetch(`http:localhost:3001/api/v1/${data}.json`)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(fetchDataSuccess(data, json));
      return json;
    })
    .catch(error => dispatch(fetchDataFailure(data, error)));
};

export {
  changeFilter, selectAircraft, scheduleTestFlight, cancelTestFlight,
  changeFormVisibility, loginUser, logoutUser, fetchDataBegin,
  fetchDataSuccess, fetchDataFailure, handleErrors, fetchData,
};
