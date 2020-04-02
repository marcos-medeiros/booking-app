import ActionTypes from './types';

const changeFilter = filter => ({
  type: ActionTypes.CHANGE_FILTER,
  filter,
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

export {
  changeFilter, switchMain, selectAircraft, scheduleTestFlight, cancelTestFlight,
};
