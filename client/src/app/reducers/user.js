import ActionTypes from '../actions/types';

const user = (state = {}, { type }) => {
  switch (type) {
    case ActionTypes.GET_USER:
      return state;
    default:
      return state;
  }
};

export default user;
