import { ADD_TODO, UPDATE_DATE, GET_TODO } from '../actions/types';
import moment from 'moment';

const initialState = {
  list: [],
  date: moment().format('YYYY-MM-DD'),
};

const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, payload],
      };
    case UPDATE_DATE:
      return {
        ...state,
        date: payload,
      };
    case GET_TODO:
      return {
        ...state,
        list: payload,
      };
    default:
      return state;
  }
};

export default todos;
