import api from '../helpers/api';
import { ADD_TODO, UPDATE_DATE, GET_TODO } from './types';
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

    dispatch(addAlert(`Todo "${data.title}" added!`, 'green'));
  } catch (error) {
    dispatch(addAlert(`Can not add "${title}". ${error.toString()}`, 'red'));
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
      addAlert(`Can not fetch todos for "${date}". ${error.toString()}`, 'red')
    );
  }
};
