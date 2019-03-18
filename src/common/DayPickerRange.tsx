import * as moment from 'moment';
import * as React from 'react';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class Index extends React.Component {
  render() {
    return (
      <DayPickerRangeController
        startDate={moment()}
        endDate={moment()}
        onDatesChange={arg => {}}
        focusedInput="startDate"
        onFocusChange={arg => {}}
      />
    );
  }
}

export default Index;
