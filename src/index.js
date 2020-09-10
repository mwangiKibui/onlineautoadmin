
//stuff i dont know

import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill';

//React

import React from 'react';
import ReactDOM from 'react-dom';

//components
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import { icons } from './assets/icons';

//third-party

import { Provider } from 'react-redux'


React.icons = icons

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);
serviceWorker.unregister();
