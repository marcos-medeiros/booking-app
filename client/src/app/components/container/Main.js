import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Main = ({ aircraft }) => (
  <>
    <img src={aircraft.imgSrc} alt={`${aircraft.manufacturer} - ${aircraft.model}`} />
  </>
);

Main.propTypes = {
  aircraft: PropTypes.shape.isRequired,
};

const mapStateToProps = state => ({ aircraft: state.aircraft });


export default connect(mapStateToProps, null)(Main);
