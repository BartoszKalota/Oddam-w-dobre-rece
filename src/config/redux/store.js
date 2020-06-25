import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import rootReducer from './reducers/rootReducer';
import firebase from '../firebase/firebase';

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument({
    getFirebase,
    getFirestore
  })),
  reduxFirestore(firebase),
  reactReduxFirebase(firebase)
));