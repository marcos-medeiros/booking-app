import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from '../presentational/Filter';
import AircraftsList from '../presentational/AircraftsList';
import { changeFilter, selectAircraft } from '../../actions/actions';

const AircraftSearch = ({
  filter, aircrafts, changeFilter, selectAircraft,
}) => (
  <>
    <Filter onChange={changeFilter} options={aircrafts.map(a => a.category)} />
    <AircraftsList onClick={selectAircraft} options={aircrafts} filter={filter} />
  </>
);

AircraftSearch.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  selectAircraft: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  aircrafts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
  aircrafts: state.aircrafts,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
  selectAircraft: aircraft => {
    dispatch(selectAircraft(aircraft));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AircraftSearch);
