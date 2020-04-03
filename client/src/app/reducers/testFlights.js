import ActionTypes from '../actions/types';

const testFlights = (state = [], { type, testFlight }) => {
  switch (type) {
    case ActionTypes.SCHEDULE_TEST_FLIGHT:
      return [...state, testFlight];
    case ActionTypes.CANCEL_TEST_FLIGHT:
      return state.filter(t => t.id !== testFlight.id);
    default:
      return state;
  }
};

export default testFlights;
