import { combineReducers } from 'redux';
import testFlights from './testFlights';
import aircraft from './aircraft';
import filter from './filter';
import main from './main';
import aircrafts from './aircrafts';
import user from './user';
import formVisibility from './formVisibility';

const rootReducer = combineReducers({
  testFlights,
  aircraft,
  filter,
  main,
  aircrafts,
  user,
  formVisibility,
});

export default rootReducer;
