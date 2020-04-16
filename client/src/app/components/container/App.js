import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LeftMenu from './LeftMenu';
import Main from './Main';
import Login from './Login';

const App = ({ user }) => (
  <>
    {user !== null
      ? (
        <div className="container">
          <LeftMenu />
          <Main />
        </div>
      )
      : <Login />}
  </>
);


App.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

App.defaultProps = {
  user: null,
};


const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(App);
