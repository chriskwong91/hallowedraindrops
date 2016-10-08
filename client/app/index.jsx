import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Admin from './reducers';
import App from './App.jsx';

// Index is now our store

let store = createStore(Admin);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
  );
