import ActionTypes from '../actions/types';

const aircrafts = (state = [], { type }) => {
  switch (type) {
    case ActionTypes.GET_AIRCRAFTS:
      return state;
    default:
      return state;
  }
};

export default aircrafts;
