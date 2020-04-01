import {createStore} from 'redux';
import storeReducer from '../app/reducers/storeReducer';

const store = createStore(storeReducer);

export default store;