import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from '../presentational/Filter';
import AircraftsList from '../presentational/AircraftsList';
import MyTestFlights from '../presentational/MyTestFlights';
import {
  changeFilter, selectAircraft, deleteData,
} from '../../actions/actions';

class LeftMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleClick(filter) {
    const { changeFilter, selectAircraft, aircrafts } = this.props;
    changeFilter(filter);
    const categoryAircrafts = [...aircrafts.filter(a => (filter === 'All' ? a : a.category === filter)).sort()];
    selectAircraft(categoryAircrafts[0]);
  }

  handleCancel(id) {
    const { deleteData } = this.props;
    deleteData('tests', id.toString());
  }

  render() {
    const {
      filter, aircrafts, selectAircraft, aircraft,
      testFlights, user, loading,
    } = this.props;
    const { handleCancel, handleClick } = this;

    return (
      <>
        {!loading
          ? (
            <aside className="aside-left">
              <Filter
                onClick={handleClick}
                filter={filter}
                options={aircrafts.map(a => a.category)}
              />
              <AircraftsList
                onClick={selectAircraft}
                options={aircrafts}
                filter={filter}
                aircraft={aircraft}
              />
              {testFlights.filter(t => t.user_id === user.id).length >= 1
                ? (
                  <MyTestFlights
                    testFlights={testFlights.filter(t => t.user_id === user.id)}
                    aircrafts={aircrafts}
                    onClick={handleCancel}
                  />
                )
                : null}
            </aside>
          )
          : null }
      </>
    );
  }
}

LeftMenu.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  selectAircraft: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  aircrafts: PropTypes.arrayOf(PropTypes.object).isRequired,
  aircraft: PropTypes.shape({
    model: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    manufacturer: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  deleteData: PropTypes.func.isRequired,
  testFlights: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
    aircraft_id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
  aircrafts: state.aircrafts.items,
  user: state.user,
  aircraft: (state.aircraft || state.aircrafts.items[0]),
  testFlights: state.testFlights.items,
  loading: (state.testFlights.loading && state.aircrafts.loading),
});

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
  selectAircraft: aircraft => {
    dispatch(selectAircraft(aircraft));
  },
  deleteData: (model, id) => {
    deleteData(model, id)(dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
