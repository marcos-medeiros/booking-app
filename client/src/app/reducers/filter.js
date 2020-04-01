import ActionTypes from '../actions/types';

const filter = (state = 'All', { type, filter }) => {
  switch (type) {
    case ActionTypes.CHANGE_FILTER:
      return filter;
    default:
      return state;
  }
};

export default filter;
