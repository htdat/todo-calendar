import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/types';

const todos = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      // do something
      break;
    case REMOVE_TODO:
      // do something
      break;
    case TOGGLE_TODO:
      // do something
      break;

    default:
      return state;
      break;
  }
};

export default todos;
