import { combineReducers } from 'redux';
import testFlights from './testFlights';
import aircraft from './aircraft';
import filter from './filter';
import main from './main';
import aircrafts from './aircrafts';

const storeReducer = combineReducers({
  testFlights,
  aircraft,
  filter,
  main,
  aircrafts,
});

export default storeReducer;
