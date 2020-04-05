import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import Button from './Button';
import 'react-datepicker/dist/react-datepicker.css';


class ScheduleForm extends React.Component {
  constructor(props) {
    super(props);
    this.coeff = 1000 * 60 * 30;
    this.state = {
      selectedDate: new Date().setHours(9,0),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({ selectedDate: date });
  }


  render() {
    const { onCancel } = this.props;
    const { selectedDate } = this.state;
    const { handleChange } = this;
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 90);
    const minDate = new Date();
    const minTime = minDate.setHours(9,0);
    const maxTime = maxDate.setHours(17,0);
    return (
      <div>
        <Button buttonText="x" onClick={onCancel} />
        <DatePicker
          selected={selectedDate}
          onChange={handleChange}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
          maxDate={maxDate}
          minDate={minDate}
          minTime={minTime}
          maxTime={maxTime}
        />
        <Button buttonText="Schedule" onClick={onCancel} />
      </div>

    );
  }
}

ScheduleForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default ScheduleForm;
