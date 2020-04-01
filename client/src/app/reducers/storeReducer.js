import { combineReducers } from 'redux';
import appointments from './appointments';
import doctor from './doctor';
import filter from './filter';
import main from './main';

const storeReducer = combineReducers({
  appointments,
  doctor,
  filter,
  main,
});

export default storeReducer;
