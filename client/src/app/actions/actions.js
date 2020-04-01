import { ActionTypes } from './types';

const changeDoctorFilter = (filter) => ({
    type: ActionTypes.CHANGE_DOCTOR_FILTER,
    filter
});

const switchMain = () => ({
    type: ActionTypes.SWITCH_MAIN
});

const selectDoctor = (doctor) => ({
    type: ActionTypes.SELECT_DOCTOR,
    doctor
});

const scheduleAppointment = (date, time, doctor, patient) => ({
    type: ActionTypes.SCHEDULE_APPOINTMENT,
    date,
    time,
    doctor,
    patient
});

const cancelAppointment = (date, time, doctor, patient) => ({
    type: ActionTypes.CANCEL_APPOINTMENT,
    date,
    time,
    doctor,
    patient
});

export { changeDoctorFilter, switchMain, selectDoctor, scheduleAppointment, cancelAppointment };