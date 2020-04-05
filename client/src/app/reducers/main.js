import ActionTypes from '../actions/types';

const main = (state = true, { type }) => {
  switch (type) {
    case ActionTypes.SWITCH_MAIN:
      return !state;
    case ActionTypes.LOGOUT_USER:
      return true;
    default:
      return state;
  }
};

export default main;
