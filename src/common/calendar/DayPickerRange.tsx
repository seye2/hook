import * as moment from 'moment';
import dynamic from 'next/dynamic';
import * as React from 'react';

import 'react-dates/initialize';
import './_datepicker.css';

type Props = {};

const DynamicDayPickerRangeController = dynamic(
  () => import('react-dates').then(module => module.DayPickerRangeController),
  {
    ssr: false,
    loading: () => {
      // console.log('loading');
      return <p>Loading...Loading...Loading...Loading...Loading...Loading...</p>;
    },
  }
);
// import { DayPickerRangeController } from 'react-dates';

const DayPickerRange = (props: Props) => {
  const onDatesChange = arg => arg;

  const onFocusChange = arg => arg;
  return (
    <DynamicDayPickerRangeController
      startDate={moment()}
      endDate={moment()}
      onDatesChange={onDatesChange}
      focusedInput="startDate"
      onFocusChange={onFocusChange}
    />
  );
};

export default DayPickerRange;
