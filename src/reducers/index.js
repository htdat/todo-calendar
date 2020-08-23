import { combineReducers } from 'redux';
import todos from './todos';
import alert from './alert';

export default combineReducers({
  todos,
  alert,
});
