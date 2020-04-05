import ActionTypes from '../actions/types';

const filter = (state = 'All', { type, filter }) => {
  switch (type) {
    case ActionTypes.CHANGE_FILTER:
      return filter;
    case ActionTypes.LOGOUT_USER:
      return 'All';
    default:
      return state;
  }
};

export default filter;
