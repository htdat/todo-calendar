import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../actions/todos';

const SingleTodoNoRedux = ({
  title,
  isCompleted,
  date,
  id,
  isShowDate = false,
  removeTodo,
  toggleTodo,
}) => {
  let className = 'single-todo';
  className += isCompleted ? ' completed' : '';
  return (
    <li key={id} className={className} id={`single-todo-${id}`}>
      <input
        type='checkbox'
        defaultChecked={isCompleted}
        onChange={() => toggleTodo(id, isCompleted)}
      />{' '}
      <button onClick={() => removeTodo(id, title)}> x </button>{' '}
      {isShowDate ? date : ''} {title}
    </li>
  );
};

SingleTodoNoRedux.propTypes = {
  title: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isShowDate: PropTypes.bool,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export const SingleTodo = connect(null, { removeTodo, toggleTodo })(
  SingleTodoNoRedux
);

export const TodoList = ({ todos, removeTodo }) => {
  const numTodo = todos.length;
  return (
    numTodo > 0 && (
      <div>
        <h2>{numTodo === 1 ? '1 todo' : `${numTodo} todos`}</h2>
        <ul>
          {todos.map((todo) => (
            <SingleTodo {...todo} key={todo.id} />
          ))}
        </ul>
      </div>
    )
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.todos.list,
});

export default connect(mapStateToProps)(TodoList);
