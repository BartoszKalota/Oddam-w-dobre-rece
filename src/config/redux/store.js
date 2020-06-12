import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import rootReducer from './reducers/rootReducer';
import firebase from '../firebase/firebase';

export const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({
    getFirebase,
    getFirestore
  }), logger),
  reduxFirestore(firebase),
  reactReduxFirebase(firebase)
));