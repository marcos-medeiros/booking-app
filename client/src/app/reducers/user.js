import ActionTypes from '../actions/types';

const user = (state = null, { type, user }) => {
  switch (type) {
    case ActionTypes.LOGIN_USER:
      return user;
    case ActionTypes.LOGOUT_USER:
      return null;
    default:
      return state;
  }
};

export default user;
