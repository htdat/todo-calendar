import React, { useState } from 'react';
import { SingleDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';

// redux
import store from './reducers';
import { Provider } from 'react-redux';

function App() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    console.log();
    setDate(newDate);
  };
  return (
    <Provider store={store}>
      <SingleDatePicker startDate={date} onChange={onChange} />
      Selected Date: {date.toString()}
    </Provider>
  );
}

export default App;
