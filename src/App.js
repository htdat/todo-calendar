import React, { useEffect } from 'react';

// redux
import store from './store';
import { Provider } from 'react-redux';

// internal
import './App.css';

import Form from './components/Form';
import DatePicker from './components/DatePicker';
import Alert from './components/Alert';
import TodoList from './components/TodoList';
import { getTodo } from './actions/todos';

function App() {
  useEffect(() => {
    store.dispatch(getTodo());
  }, []);

  return (
    <Provider store={store}>
      <Alert />
      <hr />
      <DatePicker />
      <hr />
      <Form />
      <hr />
      <TodoList />
    </Provider>
  );
}

export default App;
