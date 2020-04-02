import ActionTypes from '../actions/types';

const doctors = (state = [], { type }) => {
  switch (type) {
    case ActionTypes.GET_DOCTORS:
      return state;
    default:
      return state;
  }
};

export default doctors;
