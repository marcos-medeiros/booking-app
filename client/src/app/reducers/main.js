import ActionTypes from '../actions/types';

const main = (state = true, { type }) => {
  switch (type) {
    case ActionTypes.SWITCH_MAIN:
      return !state;
    default:
      return state;
  }
};

export default main;
