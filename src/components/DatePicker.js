import React from 'react';
import PropTypes from 'prop-types';
import { SingleDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';
import moment from 'moment';

// redux
import { connect } from 'react-redux';
import { changeDate } from '../actions/todos';

export const DatePicker = ({ date, changeDate }) => {
  return (
    <div id='date-picker'>
      <SingleDatePicker
        startDate={date}
        onChange={(newDate) => changeDate(moment(newDate).format('YYYY-MM-DD'))}
      />
    </div>
  );
};

DatePicker.propTypes = {
  date: PropTypes.string.isRequired,
  changeDate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  date: state.todos.date,
});
const mapDispatchToProps = { changeDate };

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
