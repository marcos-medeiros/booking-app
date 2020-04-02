import { combineReducers } from 'redux';
import appointments from './appointments';
import doctor from './doctor';
import filter from './filter';
import main from './main';
import doctors from './doctors';

const storeReducer = combineReducers({
  appointments,
  doctor,
  filter,
  main,
  doctors,
});

export default storeReducer;
