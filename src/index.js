import React from 'react';
import ReactDOM from 'react-dom';
import ThunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers/rootReducer';
import './index.css';
import App from './App';
import "tachyons";
import 'babel-polyfill';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducers, applyMiddleware(ThunkMiddleware));
const rootElement = document.getElementById("root");
ReactDOM.render(  <App store={store}/>, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();


