/* eslint-disable class-methods-use-this */
import 'babel-polyfill';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import ThunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers/rootReducer';
import App from './app';
import 'tachyons';
import 'react-toastify/dist/ReactToastify.css';
import * as serviceWorker from './serviceWorker';

/**
 * STORE
 * @const store
 * @description Creation store of application
 */
const store = createStore(rootReducers, applyMiddleware(ThunkMiddleware));

/**
 * E-VOTING APP ELEMENT
 * @class EVotingApp
 * @description Custom Component created and connected with React
 */
class EVotingApp extends HTMLElement {
  connectedCallback() {
    render(<App store={store}/>, this);
  }

  disconnectedCallback() {
    unmountComponentAtNode(this);
  }
}

customElements.define('evoting-app', EVotingApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
