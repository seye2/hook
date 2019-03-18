import * as moment from 'moment';
import dynamic from 'next/dynamic';
import * as React from 'react';
import DynamicComponentWithCustomLoading from '../common/calendar/DayPickerRange';

// const DynamicComponentWithCustomLoading = dynamic(() => import('../common/DayPickerRange'), {
//   loading: () => <p>...</p>,
// });

interface IndexProps {}

class Index extends React.Component<IndexProps> {
  render() {
    return <DynamicComponentWithCustomLoading />;
  }
}

export default Index;
