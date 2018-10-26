require("@babel/register");

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';

import { ConnectedRouter } from 'connected-react-router'
import FastClick from 'fastclick';
import deepForceUpdate from 'react-deep-force-update';
import { createBrowserHistory } from 'history'
import configureStore from './redux/store/configureStore';
import sagas from './sagas';
import App from './layouts'

import './styles/global.scss';

FastClick.attach(document.body);
const container = document.getElementById('app');
let initialState = {}
const history = createBrowserHistory()
const { persistor, store } = configureStore(initialState, history);

store.runSaga(sagas);

let appInstance = ReactDOM.render(
  <Provider store={store} persistor={persistor} >
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  container
);

 // Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept('./routes/', () => {
    if (appInstance) {
      try {
        // Force-update the whole tree, including components that refuse to update
        deepForceUpdate(appInstance);
      } catch (error) {
        appInstance = null;
        document.title = `Hot Update Error: ${error.message}`;
        ReactDOM.render(<ErrorReporter error={error} />, container);
        return;
      }
    }
  });
}
