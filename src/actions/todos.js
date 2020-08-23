import api from '../helpers/api';
import { ADD_TODO, UPDATE_DATE } from './types';
import { addAlert } from './alert';

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
    // @todo - hanlde the alert
    console.log(error);
  }
};

export const changeDate = (date) => (dispatch) => {
  dispatch({
    type: UPDATE_DATE,
    payload: date,
  });
};
