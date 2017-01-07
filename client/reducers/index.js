import { combineReducers } from 'redux';

const notes = ( state = { isFetching: false, notes: [] }, action) => {
  switch (action.type) {
    case 'FETCH_NOTES_REQUEST':
      return {
        ...state,
        isFetching: true
      };
    case 'FETCH_NOTES_SUCCESS':
      return {
        ...state,
        isFetching: false,
        notes: action.notes
      };
    default:
      return state
  }
};

export default combineReducers({ notes })
