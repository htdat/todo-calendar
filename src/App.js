import React, { useEffect } from 'react';

// redux
import store from './store';
import { Provider } from 'react-redux';

// internal
import './App.scss';

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
      <h1 id='main-title'>Todo Calendar</h1>
      <Alert />
      <div id='main-content'>
        <section id='left'>
          <DatePicker />
          <Form />
        </section>
        <section id='right'>
          <TodoList />
        </section>
      </div>
    </Provider>
  );
}

export default App;
