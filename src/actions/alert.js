import { ADD_ALERT, REMOVE_ALERT } from '../actions/types';

export const addAlert = (text, alertType, timeoutSeconds = 5) => (dispatch) => {
  // Build a random/unique id
  const id = new Date().getTime() + '-' + Math.floor(Math.random() * 100);

  dispatch({
    type: ADD_ALERT,
    payload: {
      id,
      text,
      alertType,
    },
  });

  setTimeout(() => {
    dispatch(removeAlert(id));
  }, timeoutSeconds * 1000);
};

export const removeAlert = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_ALERT,
    payload: id,
  });
};
