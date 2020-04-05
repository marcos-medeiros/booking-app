import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LeftSideBar from './LeftSideBar';
import Main from './Main';
import RightSideBar from './RightSideBar';
import Login from '../presentational/Login';
import { loginUser } from '../../actions/actions';

const App = ({ user, loginUser }) => (
  <>
    {user !== null
      ? (
        <>
          <LeftSideBar />
          <Main />
          <RightSideBar />
        </>
      )
      : <Login onClick={loginUser} />}


  </>
);

App.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  loginUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  loginUser: username => {
    dispatch(loginUser(username));
  },
});

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, mapDispatchToProps)(App);
