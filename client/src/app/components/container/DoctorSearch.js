import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SpecialityFilter from '../presentational/SpecialityFilter';
import DoctorsList from '../presentational/DoctorsList';
import { changeDoctorFilter, selectDoctor } from '../../actions/actions';

const DoctorSearch = ({
  filter, doctors, changeDoctorFilter, selectDoctor,
}) => (
  <>
    <SpecialityFilter onChange={changeDoctorFilter} options={doctors.map(d => d.speciality)} />
    <DoctorsList onClick={selectDoctor} options={doctors} filter={filter} />
  </>
);

DoctorSearch.propTypes = {
  changeDoctorFilter: PropTypes.func.isRequired,
  selectDoctor: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  doctors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
  doctors: state.doctors,
});

const mapDispatchToProps = dispatch => ({
  changeDoctorFilter: filter => {
    dispatch(changeDoctorFilter(filter));
  },
  selectDoctor: doctor => {
    dispatch(selectDoctor(doctor));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSearch);
