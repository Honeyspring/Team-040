import React from 'react';
import { render } from 'react-dom';
import ThunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers/rootReducer';
import App from './app';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducers, applyMiddleware(ThunkMiddleware));
render(
  <App store={store}/>,
  document.querySelector('#root')
);

// The app work offline and load faster. You can change this to unregister() if you don't want it.
serviceWorker.register();
