import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import App from './routes/App';
import reducer from './reducers';

import initialState from './initialState';

const store = legacy_createStore(reducer, initialState);

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
