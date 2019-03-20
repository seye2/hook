import * as moment from 'moment';
import dynamic from 'next/dynamic';
import * as React from 'react';

import 'react-dates/initialize';
import './_datepicker.css';

interface DayPickerRangeProps {}

const DynamicDayPickerRangeController = dynamic(
  () => import('react-dates').then(module => module.DayPickerRangeController),
  {
    ssr: false,
    loading: () => {
      console.log('loading');
      return <p>Loading...Loading...Loading...Loading...Loading...Loading...</p>;
    },
  }
);
// import { DayPickerRangeController } from 'react-dates';

class DayPickerRange extends React.Component<DayPickerRangeProps> {
  render() {
    return (
      <DynamicDayPickerRangeController
        startDate={moment()}
        endDate={moment()}
        onDatesChange={arg => {}}
        focusedInput="startDate"
        onFocusChange={arg => {}}
      />
    );
  }
}

export default DayPickerRange;
