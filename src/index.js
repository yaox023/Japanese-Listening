import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from "./store"
import { Context } from "./constants";


ReactDOM.render(
  <Context.Provider value={store} >
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
