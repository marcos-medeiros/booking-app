import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../presentational/Button';
import { switchMain } from '../../actions/actions';

const MainSwitchButton = ({ switchMain, main }) => {
  let buttonText;
  if (main) { buttonText = 'My Appointments'; } else { buttonText = 'Back to calendar'; }

  return (
    <Button onClick={switchMain} buttonText={buttonText} />
  );
};

const mapStatetoProps = state => ({ main: state.main });

const mapDispatchToProps = dispatch => ({
  switchMain: () => {
    dispatch(switchMain());
  },
});

MainSwitchButton.defaultProps = {
  switchMain: PropTypes.func.isRequired,
  main: PropTypes.bool.isRequired,
};

export default connect(mapStatetoProps, mapDispatchToProps)(MainSwitchButton);
