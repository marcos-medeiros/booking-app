import ActionTypes from '../actions/types';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const aircrafts = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_AIRCRAFTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ActionTypes.FETCH_AIRCRAFTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.res,
      };

    case ActionTypes.FETCH_AIRCRAFTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

    default:
      return state;
  }
};
export default aircrafts;
