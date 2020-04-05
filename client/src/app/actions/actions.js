import ActionTypes from './types';

const changeFilter = filter => ({
  type: ActionTypes.CHANGE_FILTER,
  filter,
});

const changeFormVisibility = () => ({
  type: ActionTypes.CHANGE_FORM_VISIBILITY,
});

const switchMain = () => ({
  type: ActionTypes.SWITCH_MAIN,
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

export {
  changeFilter, switchMain, selectAircraft, scheduleTestFlight, cancelTestFlight,
  changeFormVisibility, loginUser, logoutUser,
};
