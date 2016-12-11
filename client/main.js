import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import NotesApp from './components/NotesApp.jsx';

import store from './store';

import './assets/globalStyles.css';

ReactDOM.render(
    <Provider store={store}>
    <NotesApp />
    </Provider>,
    document.getElementById('root')
);
