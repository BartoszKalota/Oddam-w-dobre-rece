import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './config/redux/store';
import { Provider } from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();