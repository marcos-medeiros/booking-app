import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import users from './helpers/users';

const store = createStore(rootReducer, { users,
}, applyMiddleware(thunk));

export default store;
