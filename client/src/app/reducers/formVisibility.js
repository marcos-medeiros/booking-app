import ActionTypes from '../actions/types';

const formVisibility = (state = false, { type }) => {
  switch (type) {
    case ActionTypes.CHANGE_FORM_VISIBILITY:
      return !state;
    default:
      return state;
  }
};

export default formVisibility;
