import { createStore } from 'redux';
import storeReducer from './reducers/storeReducer';
import aircrafts from './helpers/aircrafts';
import testFlights from './helpers/testFlights';

const store = createStore(storeReducer, {
  aircrafts, user: { id: 1, name: 'marcos' }, testFlights, aircraft: aircrafts[0],
});

export default store;
