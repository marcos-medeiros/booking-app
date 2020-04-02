import { createStore } from 'redux';
import storeReducer from './reducers/storeReducer';
import aircrafts from './helpers/aircrafts';

const store = createStore(storeReducer, { aircrafts });

export default store;
