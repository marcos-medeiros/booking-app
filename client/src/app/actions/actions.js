import ActionTypes from './types';

const changeDoctorFilter = filter => ({
  type: ActionTypes.CHANGE_DOCTOR_FILTER,
  filter,
});

const switchMain = () => ({
  type: ActionTypes.SWITCH_MAIN,
});

const selectDoctor = doctor => ({
  type: ActionTypes.SELECT_DOCTOR,
  doctor,
});

const scheduleAppointment = appointment => ({
  type: ActionTypes.SCHEDULE_APPOINTMENT,
  appointment,
});

const cancelAppointment = appointment => ({
  type: ActionTypes.CANCEL_APPOINTMENT,
  appointment,
});

export {
  changeDoctorFilter, switchMain, selectDoctor, scheduleAppointment, cancelAppointment,
};
