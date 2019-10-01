import React, { Component } from 'react';
import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

import rootReducer from './src/configs/redux';
import Router from './src/configs/route'

const store = createStore(rootReducer, applyMiddleware(promise, logger));

axios.defaults.baseURL = 'http://192.168.0.136:8000/api'

class App extends Component {
  render() {
      return (
        <Provider store={store}>
          <Router />
        </Provider>
      )
  }
}

export default App





