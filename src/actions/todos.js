import api from '../helpers/api';
import {
  ADD_TODO,
  UPDATE_DATE,
  GET_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from './types';
import { addAlert } from './alert';
import store from '../store';

export const addTodo = (date, title) => async (dispatch) => {
  try {
    const formData = {
      title,
      isCompleted: false,
      date,
    };

    const data = await api('POST', '', formData);

    dispatch({
      type: ADD_TODO,
      payload: data,
    });

    dispatch(addAlert(`Todo "${data.title}" added!`, 'success'));
  } catch (error) {
    dispatch(addAlert(`Can not add "${title}". ${error.toString()}`, 'danger'));
  }
};

export const changeDate = (date) => (dispatch) => {
  dispatch({
    type: UPDATE_DATE,
    payload: date,
  });
  dispatch(getTodo(date));
};

export const getTodo = (date = null) => async (dispatch) => {
  try {
    // If date is not provided, use date in state.todos.date
    if (date === null) {
      date = store.getState().todos.date;
    }
    const data = await api('GET', `/?date=${date}`);

    dispatch({
      type: GET_TODO,
      payload: data,
    });
  } catch (error) {
    dispatch(
      addAlert(
        `Can not fetch todos for "${date}". ${error.toString()}`,
        'danger'
      )
    );
  }
};

export const removeTodo = (id, title = null) => async (dispatch) => {
  try {
    await api('DELETE', `/${id}`);

    dispatch({
      type: REMOVE_TODO,
      payload: id,
    });

    const alertMsg =
      title === null
        ? `Todo with "${id}" removed!`
        : `Todo "${title}" removed!`;
    dispatch(addAlert(alertMsg, 'danger'));
  } catch (error) {
    dispatch(
      addAlert(`Can not delete the todo. ${error.toString()}`, 'danger')
    );
  }
};

export const toggleTodo = (id, currentBool) => async (dispatch) => {
  try {
    const data = await api('PATCH', `/${id}`, { isCompleted: !currentBool });

    dispatch({
      type: TOGGLE_TODO,
      payload: data,
    });

    const alertMsg = data.isCompleted
      ? `Todo "${data.title}" completed!`
      : `Todo "${data.title}" undone!`;
    dispatch(addAlert(alertMsg, 'success'));
  } catch (error) {
    dispatch(
      addAlert(`Can not update todo ID ${id}. ${error.toString()}`, 'danger')
    );
  }
};
