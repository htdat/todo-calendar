import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const SingleTodo = ({
  title,
  isCompleted,
  date,
  id,
  isShowDate = false,
}) => {
  let className = 'single-todo';
  className += isCompleted ? ' commpleted' : '';
  return (
    <li key={id} className={className}>
      <input type='checkbox' defaultChecked={isCompleted} />{' '}
      <button> x </button> {isShowDate ? date : ''} {title}
    </li>
  );
};

SingleTodo.propTypes = {
  title: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isShowDate: PropTypes.bool,
};

export const TodoList = ({ todos }) => {
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
