import { createStore } from 'redux';
import storeReducer from './reducers/storeReducer';

const store = createStore(storeReducer);

export default store;
