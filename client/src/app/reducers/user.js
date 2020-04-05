import ActionTypes from '../actions/types';
import users from '../helpers/users';

const user = (state = null, { type, username }) => {
  const user = users.filter(u => u.name === username);

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
