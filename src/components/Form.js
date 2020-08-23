import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';

const Form = ({ date, addTodo }) => {
  const [title, setTitle] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTitle('');
        addTodo(date, title);
      }}
    >
      <input
        name='title'
        type='text'
        value={title}
        placeholder='What do you want to do?'
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <button type='submit'>Add todo</button>
    </form>
  );
};

Form.propTypes = {
  addTodo: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired, //
};

const mapStateToProps = (state) => ({
  date: state.todos.date,
});

const mapDispatchToProps = { addTodo };

export default connect(mapStateToProps, mapDispatchToProps)(Form);
