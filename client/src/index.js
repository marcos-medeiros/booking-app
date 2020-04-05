import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import LeftSideBar from './app/components/container/LeftSideBar';
import Main from './app/components/container/Main';
import RightSideBar from './app/components/container/RightSideBar';
import store from './app/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LeftSideBar />
      <Main />
      <RightSideBar />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
