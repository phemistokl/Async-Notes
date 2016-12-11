import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducers';

// const createStore = (reducer) => {
//     let state;
//     let listeners = [];
//
//     const getState = () => state;
//
//     const dispatch = (action) => {
//         state = reducer(state, action);
//         listeners.forEach(listener => listener());
//     };
//
//     const subscribe = (listener) => {
//         listeners.push(listener);
//
//         return () => {
//             listeners = listeners.filter(l => l !== listener);
//         }
//     };
//
//     dispatch({});
//
//     return { getState, dispatch, subscribe };
// };
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

const myMiddleware = store => next => action => {
  //let result = next(action);
  if (action.type === 'ADD_NOTE') {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
    console.log(localStorage);
  } else if (action.type === 'DELETE_NOTE') {
    console.log("delete");
  }

  return next(action);
}

export default createStore(
  reducer,
  applyMiddleware(myMiddleware)
);
