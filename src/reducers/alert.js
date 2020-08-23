import { ADD_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];
/*
[
    {
        id: 'xxxxx',
        text: 'Alert message'
        alertType: 'red' // or green 

    }
]
*/

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((item) => item.id !== payload);

    default:
      return state;
  }
};
