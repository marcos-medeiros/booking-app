import { createStore } from 'redux';
import storeReducer from './reducers/storeReducer';
import aircrafts from './helpers/aircrafts';
import testFlights from './helpers/testFlights';
import users from './helpers/users';

const store = createStore(storeReducer, {
  aircrafts, testFlights, aircraft: aircrafts[0], users,
});

export default store;
