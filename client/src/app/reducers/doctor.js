import ActionTypes from '../actions/types';

const doctor = (state = '', { type, doctor }) => {
  switch (type) {
    case ActionTypes.SELECT_DOCTOR:
      return doctor;
    default:
      return state;
  }
};

export default doctor;
