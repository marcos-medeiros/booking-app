import { createStore } from 'redux';
import storeReducer from './reducers/storeReducer';
import doctors from './helpers/doctors';

const store = createStore(storeReducer, { doctors });

export default store;
