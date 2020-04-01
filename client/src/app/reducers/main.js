import ActionTypes from '../actions/types';

const main = (state = false, { type }) => {
  switch (type) {
    case ActionTypes.SWITCH_MAIN:
      return !state;
    default:
      return state;
  }
};

export default main;
