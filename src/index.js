import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import constellationReducer from './reducers/constellation_reducer';

const store = createStore(constellationReducer);
store.subscribe(() => (console.log('current state: ', store.getState())));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));