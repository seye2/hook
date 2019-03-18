import * as moment from 'moment';
import * as React from 'react';
import dynamic from 'next/dynamic';

import 'react-dates/initialize';
import './_datepicker.css';

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

class Index extends React.Component {
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

export default Index;
