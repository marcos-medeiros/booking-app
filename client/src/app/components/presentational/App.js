import React from 'react';
import Main from '../container/Main';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';

const App = () => (
  <div>
    <LeftSideBar />
    <Main />
    <RightSideBar />
  </div>
);

export default App;
