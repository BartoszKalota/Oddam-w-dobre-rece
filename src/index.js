import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './config/store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebase from './config/firebase/firebase';

import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({
    getFirebase,
    getFirestore
  })),
  reduxFirestore(firebase),
  reactReduxFirebase(firebase)
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();