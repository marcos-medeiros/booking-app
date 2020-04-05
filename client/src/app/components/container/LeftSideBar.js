import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../presentational/Button';
import Filter from '../presentational/Filter';
import AircraftsList from '../presentational/AircraftsList';
import { changeFilter, selectAircraft, switchMain } from '../../actions/actions';

const LeftSideBar = ({
  filter, aircrafts, changeFilter, selectAircraft, main, switchMain,
}) => {
  const buttonText = main ? 'My test flights' : 'Back';
  return (
    <aside>
      <div>
        {main
          ? (
            <>
              <Filter onChange={changeFilter} options={aircrafts.map(a => a.category)} />
              <AircraftsList onClick={selectAircraft} options={aircrafts} filter={filter} />
            </>
          )
          : null}
      </div>
      <Button onClick={switchMain} buttonText={buttonText} />
    </aside>
  );
};

LeftSideBar.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  selectAircraft: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  aircrafts: PropTypes.arrayOf(PropTypes.object).isRequired,
  main: PropTypes.bool.isRequired,
  switchMain: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
  aircrafts: state.aircrafts,
  main: state.main,
  user: state.user,
  aircraft: state.aircraft,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
  selectAircraft: aircraft => {
    dispatch(selectAircraft(aircraft));
  },
  switchMain: () => {
    dispatch(switchMain());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftSideBar);
