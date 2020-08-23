import React from 'react';

// redux
import store from './store';
import { Provider } from 'react-redux';

// internal

import Form from './components/Form';
import DatePicker from './components/DatePicker';
import Alert from './components/Alert';

function App() {
  return (
    <Provider store={store}>
      <Alert />
      <hr />
      <DatePicker />
      <hr />
      <Form />
      <hr />
      Todolist
    </Provider>
  );
}

export default App;
