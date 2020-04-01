import ActionTypes from '../actions/types';

const appointments = (state = [], { type, appointment }) => {
  switch (type) {
    case ActionTypes.SCHEDULE_APPOINTMENT:
      return [...state, appointment];
    case ActionTypes.CANCEL_APPOINTMENT:
      return state.filter(a => a.id !== appointment.id);
    default:
      return state;
  }
};

export default appointments;
