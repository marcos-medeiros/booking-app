import ActionTypes from './types';

const changeFilter = filter => ({
  type: ActionTypes.CHANGE_FILTER,
  filter,
});

const changeFormVisibility = () => ({
  type: ActionTypes.CHANGE_FORM_VISIBILITY,
});

const selectAircraft = aircraft => ({
  type: ActionTypes.SELECT_AIRCRAFT,
  aircraft,
});

const loginUser = user => ({
  type: ActionTypes.LOGIN_USER,
  user,
});

const logoutUser = () => ({ type: ActionTypes.LOGOUT_USER });


const fetchDataBegin = data => {
  switch (data) {
    case 'aircrafts':
      return ({
        type: ActionTypes.FETCH_AIRCRAFTS_BEGIN,
      });
    case 'users':
      return ({
        type: ActionTypes.FETCH_USERS_BEGIN,
      });
    case 'tests':
      return ({
        type: ActionTypes.FETCH_TESTFLIGHTS_BEGIN,
      });
    default:
      return data;
  }
};

const fetchDataSuccess = (data, res) => {
  switch (data) {
    case 'aircrafts':
      return ({
        type: ActionTypes.FETCH_AIRCRAFTS_SUCCESS,
        payload: { res },
      });
    case 'users':
      return ({
        type: ActionTypes.FETCH_USERS_SUCCESS,
        payload: { res },
      });
    case 'tests':
      return ({
        type: ActionTypes.FETCH_TESTFLIGHTS_SUCCESS,
        payload: { res },
      });
    default:
      return data;
  }
};

const fetchDataFailure = (data, error) => {
  switch (data) {
    case 'aircrafts':
      return ({
        type: ActionTypes.FETCH_AIRCRAFTS_FAILURE,
        payload: { error },
      });
    case 'users':
      return ({
        type: ActionTypes.FETCH_USERS_FAILURE,
        payload: { error },
      });
    case 'tests':
      return ({
        type: ActionTypes.FETCH_TESTFLIGHTS_FAILURE,
        payload: { error },
      });
    default:
      return data;
  }
};


const getData = model => dispatch => {
  dispatch(fetchDataBegin(model));
  return fetch(`http://localhost:3001/api/v1/${model}.json`)
    .then(res => res.json())
    .then(json => {
      dispatch(fetchDataSuccess(model, json));
      return json;
    })
    .catch(error => dispatch(fetchDataFailure(model, error)));
};

const postData = (model, data) => dispatch => fetch(`http://localhost:3001/api/v1/${model}.json`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})
  .then(res => res.json())
  .then(json => {
    dispatch(getData(model));
    return json;
  });

const deleteData = (model, id) => dispatch => fetch(`http://localhost:3001/api/v1/${model}/${id}`, {
  method: 'DELETE',
})
  .then(res => {
    dispatch(getData(model));
    return res;
  });

export {
  changeFilter, selectAircraft, changeFormVisibility, loginUser, logoutUser,
  fetchDataBegin, fetchDataSuccess, fetchDataFailure, getData, postData, deleteData,
};
