import ActionTypes from '../actions/types';

const aircraft = (state = null, { type, aircraft }) => {
  switch (type) {
    case ActionTypes.SELECT_AIRCRAFT:
      return aircraft;
    default:
      return state;
  }
};

export default aircraft;
