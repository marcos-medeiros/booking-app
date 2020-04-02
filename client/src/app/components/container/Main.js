import React from 'react';
import {connect} from 'react-redux';

const Main = ({aircraft}) => (
  <>
    <img src={aircraft.imgSrc}></img>
  </>
);

const mapStateToProps = state => ({aircraft: state.aircraft});


export default connect(mapStateToProps,null)(Main);
